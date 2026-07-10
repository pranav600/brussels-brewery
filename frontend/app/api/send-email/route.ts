import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, partySize, date, day, time, bookingRef, specialRequests, location } = body;

    if (!email || !name || !partySize || !date || !day || !time || !bookingRef || !location) {
      return NextResponse.json(
        { error: "Missing required booking details" },
        { status: 400 }
      );
    }

    // Forward booking information to Python Django REST API backend to store in MongoDB
    try {
      const djangoResponse = await fetch("http://localhost:8000/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          partySize,
          date,
          day,
          time,
          bookingRef,
          specialRequests,
          location,
        }),
      });

      if (djangoResponse.ok) {
        const djangoData = await djangoResponse.json();
        console.log("[Next.js Gateway] Successfully persisted booking in Django DB.", djangoData);
      } else {
        const djangoError = await djangoResponse.json();
        console.warn("[Next.js Gateway] Django DB persistence returned error:", djangoError);
      }
    } catch (dbError) {
      console.error("[Next.js Gateway] Failed to connect to Django DB microservice (will fall back to mock):", dbError);
    }

    const apiKey = process.env.RESEND_API_KEY;

    const emailHtml = `
      <div style="font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #4a3a2a; border-radius: 16px; background-color: #efebe4; color: #4a3a2a;">
        <h1 style="font-weight: 300; font-size: 28px; border-bottom: 1px solid rgba(74,58,42,0.2); padding-bottom: 15px; margin-top: 0; color: #4a3a2a;">Brussels Brewery</h1>
        <h2 style="font-weight: 400; font-size: 20px; color: #4a3a2a; margin-top: 25px;">Reservation Confirmed</h2>
        <p style="font-size: 15px; line-height: 1.6; color: rgba(74,58,42,0.9);">
          Hello <strong>${name}</strong>,<br><br>
          Your table reservation at Brussels Brewery has been confirmed. We look forward to hosting you!
        </p>
        
        <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; margin: 25px 0; border: 1px solid rgba(74,58,42,0.1);">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #efebe4; padding-bottom: 10px; margin-bottom: 15px; font-size: 13px; font-weight: bold; text-transform: uppercase; color: rgba(74,58,42,0.6);">
            <span style="float: left;">Booking Reference</span>
            <span style="float: right; font-family: monospace; background-color: #efebe4; padding: 2px 6px; border-radius: 4px;">${bookingRef}</span>
            <div style="clear: both;"></div>
          </div>
          
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: rgba(74,58,42,0.6);">Location / Store</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${location} Store</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(74,58,42,0.6);">Guests</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${partySize} Guests</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(74,58,42,0.6);">Date & Day</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${date} (${day})</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: rgba(74,58,42,0.6);">Time Slot</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${time}</td>
            </tr>
            ${specialRequests ? `
            <tr>
              <td style="padding: 12px 0 0 0; color: rgba(74,58,42,0.6); vertical-align: top;" colspan="2">
                <span style="display: block; font-size: 12px; margin-bottom: 6px; font-weight: bold;">Special Requests</span>
                <div style="font-weight: normal; font-size: 13px; background-color: #efebe4; padding: 12px; border-radius: 8px; border-left: 3px solid #4a3a2a; color: #4a3a2a; line-height: 1.5;">${specialRequests}</div>
              </td>
            </tr>` : ""}
          </table>
        </div>

        <p style="font-size: 12px; line-height: 1.5; color: rgba(74,58,42,0.5); margin-top: 30px; border-top: 1px solid rgba(74,58,42,0.1); padding-top: 15px;">
          Note: We hold tables for a maximum of 15 minutes past your reserved slot time. If you need to make changes or cancel, please reach out to us at least 2 hours prior to your booking.
        </p>
      </div>
    `;

    if (!apiKey) {
      console.log("\n=======================================================");
      console.log("[ Brussels Brewery Email Simulation ]");
      console.log("-------------------------------------------------------");
      console.log(`To: ${email} (${name})`);
      console.log(`Subject: Table Reservation Confirmed - ${bookingRef}`);
      console.log(`Details: ${partySize} guests at ${location} on ${date} (${day}) at ${time}`);
      if (specialRequests) {
        console.log(`Special Request: ${specialRequests}`);
      }
      console.log("-------------------------------------------------------");
      console.log("RESEND_API_KEY env key is not configured.");
      console.log("Configure it in .env.local to send live emails via Resend.");
      console.log("=======================================================\n");

      return NextResponse.json({
        success: true,
        message: "Email simulated successfully (Mock Mode).",
        bookingRef
      });
    }

    // Call Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "Brussels Brewery <onboarding@resend.dev>",
        to: [email],
        subject: `Table Reservation Confirmed - ${bookingRef}`,
        html: emailHtml
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API Error details:", resendData);
      return NextResponse.json(
        { error: resendData.message || "Failed to send email via Resend API" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Confirmation email sent successfully via Resend API",
      id: resendData.id,
      bookingRef
    });

  } catch (error: any) {
    console.error("Email API handler failed:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
