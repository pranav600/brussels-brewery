"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.", {
      style: {
        background: "#3a2010",
        color: "#efebe4",
      },
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#efebe4] text-[#4a3a2a] flex flex-col font-sans" suppressHydrationWarning>
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          {/* Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display uppercase text-5xl sm:text-6xl tracking-tight text-[#4a3a2a] mb-4">
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#4a3a2a]/70 font-light leading-relaxed">
              Have a question, feedback, or just want to talk coffee? Drop us a
              line and we’ll get back to you as soon as possible.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 space-y-6">
              {/* Info Card 1: Address */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#4a3a2a]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#4a3a2a]/5 text-[#4a3a2a] flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#4a3a2a] mb-2">
                    Our Roastery
                  </h3>
                  <p className="text-sm text-[#4a3a2a]/70 font-light leading-relaxed">
                    124 Brew Avenue, Coffee District
                    <br />
                    Brussels, 1000, Belgium
                  </p>
                </div>
              </div>

              {/* Info Card 2: Phone & Email */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#4a3a2a]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#4a3a2a]/5 text-[#4a3a2a] flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#4a3a2a] mb-2">
                    Contact Details
                  </h3>
                  <p className="text-sm text-[#4a3a2a]/70 font-light mb-1">
                    Phone:{" "}
                    <a
                      href="tel:+3221234567"
                      className="hover:text-[#4a3a2a] underline">
                      +32 2 123 45 67
                    </a>
                  </p>
                  <p className="text-sm text-[#4a3a2a]/70 font-light">
                    Email:{" "}
                    <a
                      href="mailto:hello@brusselsbrewery.com"
                      className="hover:text-[#4a3a2a] underline">
                      hello@brusselsbrewery.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Info Card 3: Hours */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#4a3a2a]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#4a3a2a]/5 text-[#4a3a2a] flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#4a3a2a] mb-2">
                    Brewing Hours
                  </h3>
                  <div className="text-sm text-[#4a3a2a]/70 font-light space-y-1">
                    <p className="flex justify-between gap-8">
                      <span>Mon – Fri:</span> <span>7:00 AM – 8:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Saturday:</span> <span>8:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Sunday:</span> <span>8:00 AM – 6:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 bg-[#3a2019] text-[#efebe4] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#efebe4]/10">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}>
                    <CheckCircle2 size={64} className="text-amber-400 mb-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold uppercase tracking-wider mb-3">
                    Thank You!
                  </h2>
                  <p className="text-white/60 font-light max-w-sm mx-auto mb-8 leading-relaxed">
                    Your message has been received. Our team will review it and
                    get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-white/20 hover:border-white/50 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs uppercase tracking-wider text-white/50 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#efebe4]/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/20 text-white focus:border-amber-400/50 focus:bg-[#efebe4]/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-wider text-white/50 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#efebe4]/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/20 text-white focus:border-amber-400/50 focus:bg-[#efebe4]/10 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-xs uppercase tracking-wider text-white/50 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-[#efebe4]/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/20 text-white focus:border-amber-400/50 focus:bg-[#efebe4]/10 outline-none transition-all"
                      placeholder="Feedback, Catering request, etc."
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-wider text-white/50 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#efebe4]/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/20 text-white focus:border-amber-400/50 focus:bg-[#efebe4]/10 outline-none transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500/10 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#3a2010] py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer select-none">
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
