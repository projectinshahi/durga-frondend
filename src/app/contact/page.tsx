"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Build WhatsApp message as fallback (no backend contact endpoint)
    const msg = `Hi DINORAH,%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(`https://wa.me/917034995428?text=${msg}`, "_blank");
      setSending(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-primary">

      {/* Page Hero */}
      <section className="relative py-36 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1110]/88 to-[#1a1110]/75" />
        <div className="relative z-10 text-white px-4">
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-[14px] text-white/70">
            <Link href="/" className="text-gold-light hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">

            {/* Left — Info */}
            <div>
              <span className="inline-block px-5 py-2 rounded-full text-dinorah-primary font-bold tracking-[2px] text-xs uppercase border border-dinorah-primary/30 mb-5 bg-dinorah-primary/5">
                Get In Touch
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-4">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-br from-dinorah-primary to-gold">Conversation</span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
                Whether you're a boutique owner, D2C brand, designer, or international buyer — we'd love to hear about your requirements and explore how we can work together.
              </p>

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-5 items-start p-5 bg-bg-secondary rounded-xl hover:translate-x-2 hover:shadow-md transition-all">
                  <div className="w-[50px] h-[50px] min-w-[50px] bg-gradient-to-br from-dinorah-primary to-gold rounded-full flex items-center justify-center text-white text-lg shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[15px] mb-1">Our Location</h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed">
                      9/110-2, Mulloor, Punnathura West<br />Kottayam, Kerala - 686631
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start p-5 bg-bg-secondary rounded-xl hover:translate-x-2 hover:shadow-md transition-all">
                  <div className="w-[50px] h-[50px] min-w-[50px] bg-gradient-to-br from-dinorah-primary to-gold rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.707 10.293a12.051 12.051 0 007.994 7.993l1.83-1.83a.996.996 0 011.02-.243c1.12.336 2.31.516 3.535.516a1 1 0 011 1v3.536a1 1 0 01-1 1C10.518 22.265 1.734 13.483 1.734 2.5a1 1 0 011-1h3.535a1 1 0 011 1c0 1.226.18 2.415.515 3.535a.996.996 0 01-.242 1.02l-1.83 1.83z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[15px] mb-1">Phone</h4>
                    <a href="tel:+917034995428" className="text-dinorah-primary font-medium text-[14px] hover:text-dinorah-dark transition-colors">
                      +91 7034995428
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 items-start p-5 bg-bg-secondary rounded-xl hover:translate-x-2 hover:shadow-md transition-all">
                  <div className="w-[50px] h-[50px] min-w-[50px] bg-gradient-to-br from-dinorah-primary to-gold rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[15px] mb-1">Email</h4>
                    <a href="mailto:dinorah.work2025@gmail.com" className="text-dinorah-primary font-medium text-[14px] hover:text-dinorah-dark transition-colors">
                      dinorah.work2025@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-5 items-start p-5 bg-bg-secondary rounded-xl hover:translate-x-2 hover:shadow-md transition-all">
                  <div className="w-[50px] h-[50px] min-w-[50px] bg-gradient-to-br from-[#25d366] to-[#128c7e] rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[15px] mb-1">WhatsApp</h4>
                    <a href="https://wa.me/917034995428" target="_blank" rel="noreferrer" className="text-[#25d366] font-medium text-[14px] hover:underline">
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-text-light text-[11px] mt-0.5">Quick responses during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[rgba(184,134,11,0.1)]">
              <h3 className="font-serif font-bold text-2xl text-dinorah-primary mb-8 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-[13px] text-text-primary mb-2">Full Name</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <input
                        required type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full pl-11 pr-4 py-3.5 bg-bg-secondary border-2 border-[rgba(184,134,11,0.1)] rounded-lg text-[14px] text-text-primary outline-none focus:border-dinorah-primary focus:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-[13px] text-text-primary mb-2">Email Address</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <input
                        required type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-bg-secondary border-2 border-[rgba(184,134,11,0.1)] rounded-lg text-[14px] text-text-primary outline-none focus:border-dinorah-primary focus:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone + Service row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-[13px] text-text-primary mb-2">Phone Number</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-11 pr-4 py-3.5 bg-bg-secondary border-2 border-[rgba(184,134,11,0.1)] rounded-lg text-[14px] text-text-primary outline-none focus:border-dinorah-primary focus:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-[13px] text-text-primary mb-2">Service Interested In</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3.5 bg-bg-secondary border-2 border-[rgba(184,134,11,0.1)] rounded-lg text-[14px] text-text-primary outline-none focus:border-dinorah-primary focus:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option>Boutique-Grade Stitching</option>
                        <option>End-to-End Manufacturing</option>
                        <option>Pattern-Making & Sampling</option>
                        <option>Quality-Controlled Production</option>
                        <option>Custom & Private-Label</option>
                        <option>Export-Ready Apparel</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-[13px] text-text-primary mb-2">Your Message</label>
                  <div className="relative">
                    <svg className="absolute left-4 top-5 w-4 h-4 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    <textarea
                      required name="message" value={form.message} onChange={handleChange}
                      rows={5} placeholder="Tell us about your requirements, quantities, timeline..."
                      className="w-full pl-11 pr-4 py-3.5 bg-bg-secondary border-2 border-[rgba(184,134,11,0.1)] rounded-lg text-[14px] text-text-primary outline-none focus:border-dinorah-primary focus:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] focus:bg-white transition-all resize-y min-h-[120px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-dinorah-primary to-gold text-white font-bold text-[14px] py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(184,134,11,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                >
                  {sending ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  )}
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.5!2d76.5!3d9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DINORAH LLP Location"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-16 bg-bg-secondary border-t border-[rgba(184,134,11,0.1)]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.707 10.293a12.051 12.051 0 007.994 7.993l1.83-1.83a.996.996 0 011.02-.243c1.12.336 2.31.516 3.535.516a1 1 0 011 1v3.536a1 1 0 01-1 1C10.518 22.265 1.734 13.483 1.734 2.5a1 1 0 011-1h3.535a1 1 0 011 1c0 1.226.18 2.415.515 3.535a.996.996 0 01-.242 1.02l-1.83 1.83z"/>
                </svg>
              ),
              label: "Call Us", value: "+91 7034995428", href: "tel:+917034995428", color: "from-dinorah-primary to-gold",
            },
            {
              icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              ),
              label: "WhatsApp", value: "Chat Instantly", href: "https://wa.me/917034995428", color: "from-[#25d366] to-[#128c7e]",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              ),
              label: "Email", value: "dinorah.work2025@gmail.com", href: "mailto:dinorah.work2025@gmail.com", color: "from-dinorah-primary to-gold",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-[rgba(184,134,11,0.08)] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                {item.icon}
              </div>
              <span className="font-bold text-text-primary text-[14px]">{item.label}</span>
              <span className="text-text-secondary text-[12px] font-medium">{item.value}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
