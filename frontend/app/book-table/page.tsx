"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  ChevronLeft,
  User,
  Mail,
  Phone,
  FileText,
  Utensils,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookTablePage() {
  // Form states
  const [store, setStore] = useState<string>("Brussels");
  const [partySize, setPartySize] = useState<number>(2);
  const [customPartySize, setCustomPartySize] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");

  // Flow states
  const [formStep, setFormStep] = useState<number>(1); // 1: Booking Details, 2: Contact Details
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  // Set default date to tomorrow on mount
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  // Reset selected time slot if it becomes invalid/passed
  useEffect(() => {
    if (date && selectedTimeSlot && isSlotPassed(date, selectedTimeSlot)) {
      setSelectedTimeSlot("");
    }
  }, [date]);

  const getTodayString = () => {
    return new Date().toISOString().split("T")[0];
  };

  // Helper to parse day of the week cleanly without timezone shifts
  const getWeekdayName = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return "";
    const dateObj = new Date(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2]),
    );
    return dateObj.toLocaleDateString("en-US", { weekday: "long" });
  };

  const getFormattedDate = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return "";
    const dateObj = new Date(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2]),
    );
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Check if the selected date is today in the user's local timezone
  const isToday = (selectedDateStr: string) => {
    if (!selectedDateStr) return false;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const localTodayStr = `${yyyy}-${mm}-${dd}`;
    return selectedDateStr === localTodayStr;
  };

  // Helper to parse time slot string (e.g. "11:30 AM", "7:30 PM") into hours and minutes
  const parseTimeSlot = (timeStr: string) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours < 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    return { hours, minutes };
  };

  // Check if the slot has already passed today
  const isSlotPassed = (selectedDateStr: string, timeStr: string) => {
    if (!isToday(selectedDateStr)) return false;

    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const slot = parseTimeSlot(timeStr);

    if (currentHours > slot.hours) {
      return true;
    } else if (currentHours === slot.hours) {
      return currentMinutes >= slot.minutes;
    }
    return false;
  };

  const activePartySize = customPartySize ? Number(customPartySize) : partySize;

  const timeSlots = {
    lunch: [
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
    ],
    dinner: [
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
    ],
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!date || !selectedTimeSlot) return;
      setFormStep(2);
    }
  };

  const handleBackStep = () => {
    if (formStep === 2) {
      setFormStep(1);
    }
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading(
      "Securing your table and sending confirmation...",
    );

    // Generate reference
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refStr = `BB-${new Date().getFullYear().toString().slice(-2)}${randomNum}`;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          partySize: activePartySize,
          date: getFormattedDate(date),
          day: getWeekdayName(date),
          time: selectedTimeSlot,
          bookingRef: refStr,
          specialRequests,
          location: store,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setBookingRef(refStr);
        setIsSubmitted(true);
        toast.dismiss(loadingToast);

        if (
          data.message &&
          (data.message.includes("simulation") ||
            data.message.includes("Simulated"))
        ) {
          toast.success("Table booked! (Details printed to terminal)");
        } else {
          toast.success("Table booked! Confirmation email sent.");
        }
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error: any) {
      console.error(error);
      // Fallback: Secure booking anyway even if email fails
      setBookingRef(refStr);
      setIsSubmitted(true);
      toast.dismiss(loadingToast);
      toast.error("Booking secured, but email notification failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#efebe4] text-[#4a3a2a] selection:bg-[#4a3a2a]/10 overflow-x-hidden relative flex flex-col justify-between">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center py-10 px-6 sm:px-10">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-[#4a3a2a]/10 overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Form Side */}
                <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#4a3a2a]/10">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]/60 mb-3">
                    <Utensils className="w-4 h-4" />
                    <span>Table Reservation</span>
                  </div>

                  <h1 className="font-sans font-light text-3xl sm:text-4xl text-[#4a3a2a] mb-8">
                    Book A Table
                  </h1>

                  {/* Progressive Booking Form */}
                  <form
                    onSubmit={
                      formStep === 1 ? handleNextStep : handleSubmitBooking
                    }
                    className="space-y-8">
                    {formStep === 1 ? (
                      /* STEP 1 */
                      <div className="space-y-6">
                        {/* Store Location Selector */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#4a3a2a]/70" />
                            Select Store / Location
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              {
                                name: "Brussels",
                                desc: "Rue au Midi 45, Brussels",
                              },
                              {
                                name: "Anderlecht",
                                desc: "Pl. De Linde 27, Anderlecht",
                              },
                              {
                                name: "Machelen",
                                desc: "Dorpsplein 2, Machelen",
                              },
                            ].map((loc) => (
                              <button
                                key={loc.name}
                                type="button"
                                onClick={() => setStore(loc.name)}
                                className={`p-4 rounded-[14px] text-left transition-all duration-200 border cursor-pointer flex flex-col ${
                                  store === loc.name
                                    ? "bg-[#4a3a2a] border-[#4a3a2a] text-[#efebe4] shadow-md"
                                    : "bg-[#efebe4]/20 border-[#4a3a2a]/15 text-[#4a3a2a] hover:border-[#4a3a2a]/40"
                                }`}>
                                <span className="text-sm font-semibold mb-1">
                                  {loc.name}
                                </span>
                                <span
                                  className={`text-[11px] leading-snug ${
                                    store === loc.name
                                      ? "text-[#efebe4]/75"
                                      : "text-[#4a3a2a]/60"
                                  }`}>
                                  {loc.desc}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Party Size Selector */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#4a3a2a]/70" />
                            How many guests?
                          </label>
                          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => {
                                  setPartySize(num);
                                  setCustomPartySize("");
                                }}
                                className={`py-3 rounded-[12px] text-sm font-medium transition-all duration-150 border cursor-pointer ${
                                  partySize === num && !customPartySize
                                    ? "bg-[#4a3a2a] border-[#4a3a2a] text-[#efebe4]"
                                    : "border-[#4a3a2a]/20 text-[#4a3a2a] hover:border-[#4a3a2a]/60"
                                }`}>
                                {num}
                              </button>
                            ))}
                            {/* Dropdown for larger sizes
                            <select
                              value={customPartySize}
                              onChange={(e) => {
                                setCustomPartySize(e.target.value);
                                setPartySize(0);
                              }}
                              className={`py-3 px-2 rounded-[12px] text-sm font-medium border text-center transition-all bg-transparent outline-none ${
                                customPartySize
                                  ? "bg-[#4a3a2a] border-[#4a3a2a] text-[#efebe4]"
                                  : "border-[#4a3a2a]/20 text-[#4a3a2a] hover:border-[#4a3a2a]/60"
                              }`}
                            >
                              <option value="" className="text-[#4a3a2a]">6+</option>
                              {[6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                                <option key={num} value={num} className="text-[#4a3a2a]">
                                  {num} Guests
                                </option>
                              ))}
                            </select> */}
                          </div>
                        </div>

                        {/* Date Picker */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#4a3a2a]/70" />
                            Choose Date & Day
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              min={getTodayString()}
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              onClick={(e) => {
                                try {
                                  e.currentTarget.showPicker?.();
                                } catch (err) {}
                              }}
                              onFocus={(e) => {
                                try {
                                  e.currentTarget.showPicker?.();
                                } catch (err) {}
                              }}
                              required
                              className="w-full px-5 py-4 rounded-[14px] bg-[#efebe4]/30 border border-[#4a3a2a]/20 text-sm font-medium text-[#4a3a2a] focus:border-[#4a3a2a] focus:bg-transparent outline-none transition-all cursor-pointer"
                            />
                            {date && (
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4a3a2a]/10 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]">
                                {getWeekdayName(date)}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Time Slots Selector */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#4a3a2a]/70" />
                            Select Time Slot
                          </label>

                          <div className="space-y-4">
                            {/* Lunch Slots */}
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]/60 block mb-2">
                                Lunch Slots
                              </span>
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {timeSlots.lunch.map((time) => {
                                  const passed = isSlotPassed(date, time);
                                  return (
                                    <button
                                      key={time}
                                      type="button"
                                      onClick={() => setSelectedTimeSlot(time)}
                                      disabled={passed}
                                      className={`py-2.5 rounded-[10px] text-xs font-semibold transition-all border cursor-pointer ${
                                        passed
                                          ? "opacity-25 bg-[#efebe4]/20 border-dashed border-[#4a3a2a]/20 cursor-not-allowed pointer-events-none text-[#4a3a2a]/40"
                                          : selectedTimeSlot === time
                                            ? "bg-[#4a3a2a] border-[#4a3a2a] text-[#efebe4]"
                                            : "border-[#4a3a2a]/10 text-[#4a3a2a]/80 hover:border-[#4a3a2a]/40"
                                      }`}>
                                      {time}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Dinner Slots */}
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]/60 block mb-2">
                                Dinner Slots
                              </span>
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {timeSlots.dinner.map((time) => {
                                  const passed = isSlotPassed(date, time);
                                  return (
                                    <button
                                      key={time}
                                      type="button"
                                      onClick={() => setSelectedTimeSlot(time)}
                                      disabled={passed}
                                      className={`py-2.5 rounded-[10px] text-xs font-semibold transition-all border cursor-pointer ${
                                        passed
                                          ? "opacity-25 bg-[#efebe4]/20 border-dashed border-[#4a3a2a]/20 cursor-not-allowed pointer-events-none text-[#4a3a2a]/40"
                                          : selectedTimeSlot === time
                                            ? "bg-[#4a3a2a] border-[#4a3a2a] text-[#efebe4]"
                                            : "border-[#4a3a2a]/10 text-[#4a3a2a]/80 hover:border-[#4a3a2a]/40"
                                      }`}>
                                      {time}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Next */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={!date || !selectedTimeSlot}
                            className="w-full py-4 bg-[#4a3a2a] text-[#efebe4] rounded-[14px] text-sm font-medium tracking-wide hover:bg-[#5d4936] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md cursor-pointer select-none">
                            Continue to Contact Details
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* STEP 2 */
                      <div className="space-y-6">
                        <button
                          type="button"
                          onClick={handleBackStep}
                          className="flex items-center gap-1 text-sm font-medium text-[#4a3a2a]/70 hover:text-[#4a3a2a] transition-colors cursor-pointer">
                          <ChevronLeft className="w-4 h-4" />
                          <span>Change Booking details</span>
                        </button>

                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-2 flex items-center gap-2">
                            <User className="w-4 h-4 text-[#4a3a2a]/70" />
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-5 py-4 rounded-[14px] bg-[#efebe4]/30 border border-[#4a3a2a]/20 text-sm text-[#4a3a2a] focus:border-[#4a3a2a] focus:bg-transparent outline-none transition-all placeholder:text-[#4a3a2a]/40"
                          />
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-2 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#4a3a2a]/70" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="johndoe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-5 py-4 rounded-[14px] bg-[#efebe4]/30 border border-[#4a3a2a]/20 text-sm text-[#4a3a2a] focus:border-[#4a3a2a] focus:bg-transparent outline-none transition-all placeholder:text-[#4a3a2a]/40"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#4a3a2a]/70" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full px-5 py-4 rounded-[14px] bg-[#efebe4]/30 border border-[#4a3a2a]/20 text-sm text-[#4a3a2a] focus:border-[#4a3a2a] focus:bg-transparent outline-none transition-all placeholder:text-[#4a3a2a]/40"
                          />
                        </div>

                        {/* Special Requests */}
                        <div>
                          <label className="block text-sm font-medium tracking-wide text-[#4a3a2a] mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#4a3a2a]/70" />
                            Special Requests (Optional)
                          </label>
                          <textarea
                            placeholder="Allergies, high chair, wheelchair accessibility, window seat request, etc..."
                            rows={3}
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            className="w-full px-5 py-4 rounded-[14px] bg-[#efebe4]/30 border border-[#4a3a2a]/20 text-sm text-[#4a3a2a] focus:border-[#4a3a2a] focus:bg-transparent outline-none transition-all placeholder:text-[#4a3a2a]/40 resize-none"
                          />
                        </div>

                        {/* Submit Action */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={!name || !email || !phone || isSubmitting}
                            className="w-full py-4 bg-[#4a3a2a] text-[#efebe4] rounded-[14px] text-sm font-medium tracking-wide hover:bg-[#5d4936] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md cursor-pointer select-none">
                            {isSubmitting
                              ? "Securing Table..."
                              : "Confirm Reservation"}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>

                {/* Summary Card Side */}
                <div className="lg:col-span-5 bg-[#efebe4]/40 p-8 sm:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]/60">
                      Reservation Summary
                    </h2>

                    <div className="bg-white rounded-2xl p-6 border border-[#4a3a2a]/5 space-y-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#4a3a2a] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs text-[#4a3a2a]/60 block">
                            Location / Store
                          </span>
                          <span className="text-sm font-semibold text-[#4a3a2a]">
                            {store} Store
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 border-t border-[#4a3a2a]/10 pt-4">
                        <Users className="w-5 h-5 text-[#4a3a2a] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs text-[#4a3a2a]/60 block">
                            Party Size
                          </span>
                          <span className="text-sm font-semibold text-[#4a3a2a]">
                            {activePartySize}{" "}
                            {activePartySize === 1 ? "Guest" : "Guests"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 border-t border-[#4a3a2a]/10 pt-4">
                        <Calendar className="w-5 h-5 text-[#4a3a2a] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs text-[#4a3a2a]/60 block">
                            Date & Day
                          </span>
                          <span className="text-sm font-semibold text-[#4a3a2a]">
                            {date
                              ? `${getFormattedDate(date)} (${getWeekdayName(date)})`
                              : "Not selected"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 border-t border-[#4a3a2a]/10 pt-4">
                        <Clock className="w-5 h-5 text-[#4a3a2a] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs text-[#4a3a2a]/60 block">
                            Time Slot
                          </span>
                          <span className="text-sm font-semibold text-[#4a3a2a]">
                            {selectedTimeSlot || "Not selected"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0 text-xs text-[#4a3a2a]/60 border-t border-[#4a3a2a]/10 pt-6">
                    <p className="leading-relaxed">
                      Please note: Table holdings are limited to 15 minutes past
                      the reserved slot time. If you need to cancel or change
                      details, please contact us at least 2 hours in advance.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 sm:p-16 text-center max-w-2xl mx-auto flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                  className="w-20 h-20 bg-[#4a3a2a]/10 rounded-full flex items-center justify-center mb-6 text-[#4a3a2a]">
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>

                <h1 className="font-sans font-light text-3xl sm:text-4xl text-[#4a3a2a] mb-4">
                  Reservation Confirmed!
                </h1>

                <p className="text-[#4a3a2a]/80 mb-8 leading-relaxed max-w-md">
                  Thank you, <span className="font-semibold">{name}</span>. Your
                  table booking at Brussels Brewery is secured. We look forward
                  to hosting you!
                </p>

                <div className="bg-[#efebe4]/60 border border-[#4a3a2a]/10 rounded-2xl p-6 w-full space-y-4 text-left mb-10">
                  <div className="flex justify-between items-center pb-3 border-b border-[#4a3a2a]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#4a3a2a]/60">
                      Booking Reference
                    </span>
                    <span className="text-sm font-mono font-bold text-[#4a3a2a] bg-white px-2 py-0.5 rounded shadow-sm">
                      {bookingRef}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-xs text-[#4a3a2a]/60 block">
                        Store Location
                      </span>
                      <span className="font-semibold text-[#4a3a2a]">
                        {store}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#4a3a2a]/60 block">
                        Guests
                      </span>
                      <span className="font-semibold text-[#4a3a2a]">
                        {activePartySize} Guests
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#4a3a2a]/60 block">
                        Date
                      </span>
                      <span className="font-semibold text-[#4a3a2a]">
                        {getFormattedDate(date)}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#4a3a2a]/60 block">
                        Time
                      </span>
                      <span className="font-semibold text-[#4a3a2a]">
                        {selectedTimeSlot}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  className="inline-block bg-[#4a3a2a] text-[#efebe4] px-10 py-4 rounded-[14px] text-sm font-medium tracking-wide hover:bg-[#5d4936] transition-all duration-200 shadow-md cursor-pointer select-none">
                  Back to Homepage
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
