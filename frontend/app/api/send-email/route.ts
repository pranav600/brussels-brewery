import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email,
      name,
      phone,
      partySize,
      date,
      day,
      time,
      bookingRef,
      specialRequests,
      location,
    } = body;

    if (
      !email ||
      !name ||
      !phone ||
      !partySize ||
      !date ||
      !day ||
      !time ||
      !bookingRef ||
      !location
    ) {
      return NextResponse.json(
        { error: "Missing required booking details" },
        { status: 400 },
      );
    }

    // Forward booking information to Python Django REST API backend to store in MongoDB
    try {
      const backendUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://127.0.0.1:8000/api";
      const djangoResponse = await fetch(`${backendUrl}/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          partySize,
          date,
          day,
          time,
          bookingRef,
          specialRequests,
          location,
        }),
      });

      if (!djangoResponse.ok) {
        const djangoError = await djangoResponse.json();
        console.warn(
          "[Next.js Gateway] Django DB persistence returned error:",
          djangoError,
        );
        return NextResponse.json(
          { error: "Database error. Booking could not be completed." },
          { status: 500 },
        );
      }
    } catch (dbError) {
      console.error(
        "[Next.js Gateway] Failed to connect to Django DB microservice:",
        dbError,
      );
      return NextResponse.json(
        {
          error:
            "Backend database service is offline. Booking could not be completed.",
        },
        { status: 500 },
      );
    }

    console.log("\n=======================================================");
    console.log("[ Cafe Forêt Email Simulation ]");
    console.log("-------------------------------------------------------");
    console.log(`To: ${email} (${name})`);
    console.log(`Subject: Table Reservation Confirmed - ${bookingRef}`);
    console.log(
      `Details: ${partySize} guests at ${location} on ${date} (${day}) at ${time}`,
    );
    if (specialRequests) {
      console.log(`Special Request: ${specialRequests}`);
    }
    console.log("-------------------------------------------------------");
    console.log("Email simulated successfully (Mock Mode).");
    console.log("=======================================================\n");

    return NextResponse.json({
      success: true,
      message: "Booking completed successfully.",
      bookingRef,
    });
  } catch (error: any) {
    console.error("Email API handler failed:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
