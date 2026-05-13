"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Eye, 
  Target, 
  MessageSquare, 
  Ruler, 
  Scissors, 
  PackageCheck,
  User,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const testimonials = [
  {
    quote: "DINORAH LLP has been an outstanding manufacturing partner for our boutique brand. Their attention to detail, precision stitching, and consistent quality give us the confidence to deliver premium garments to our customers.",
    author: "Priya Menon",
    role: "Boutique Brand Owner, Bangalore",
    initial: "P"
  },
  {
    quote: "The team at Dinorah is exceptional. Their ability to handle low MOQs without compromising on quality is exactly what our D2C brand needed to scale effectively.",
    author: "Rahul Sharma",
    role: "D2C Brand Founder, Mumbai",
    initial: "R"
  },
  {
    quote: "Expert craftsmanship and reliable timelines. We've been working with them for over two years now, and their export-ready standards are truly world-class.",
    author: "Sarah Jenkins",
    role: "International Designer, London",
    initial: "S"
  }
];

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#fefcf8]">

      {/* 1. Who We Are Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Badge */}
          <div className="relative animate-fadeInLeft">
            <div className="rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <img
                src="/images/uhhf.jpeg"
                alt="Boutique Craftsmanship"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlapping Badge */}
            <div className="absolute bottom-10 -right-4 md:-right-8 bg-[#c99f2b] text-white p-8 rounded-3xl shadow-2xl w-52 text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="font-serif text-5xl font-bold mb-1">B2B</h3>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-90">Export Ready</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8 animate-fadeInRight">
            <span className="inline-block px-6 py-2 rounded-full bg-[#fdf3e7] text-[#b8860b] text-[11px] font-bold uppercase tracking-[0.2em] mb-10 border border-[#b8860b]/10">
              Who We Are
            </span>
            <h1 className="font-serif text-[48px] md:text-[64px] leading-[1.1] text-[#2d1810] mb-10">
              Boutique <br />
              Craftsmanship. <br />
              <span className="text-[#c99f2b]">Global Standards.</span>
            </h1>
            <div className="space-y-8 text-[#5a4a42] text-[15px] leading-[1.8] mb-12 max-w-xl opacity-90">
              <p>
                DINORAH LLP is a boutique-led garment manufacturing and apparel export company specialising in premium stitched garments, designer collections, private-label production, and small-batch export-ready apparel for global fashion brands.
              </p>
              <p>
                With deep expertise in craftsmanship, pattern making, and high-detail finishing, we deliver consistent quality, premium detailing, and reliable timelines for boutique stores, D2C brands, designers, and international buyers.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-12">
              {[
                "Boutique-Grade Stitching & Finishing",
                "Low MOQ — High Flexibility",
                "Integrated Sampling & Pattern Making",
                "Multi-Stage QC & Inspection",
                "Export-Ready Packaging & Documentation",
                "Transparent Pricing — No Hidden Costs",
              ].map((item) => (
                <div key={item} className="group flex items-center gap-4 transition-transform hover:translate-x-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c99f2b] flex items-center justify-center shadow-lg shadow-[#c99f2b]/20 group-hover:rotate-[360deg] transition-transform duration-500">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[13px] font-bold text-[#2d1810] tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-[#c99f2b] text-white px-8 py-4 rounded-full font-bold text-[13px] overflow-hidden transition-all duration-500 hover:bg-[#b8860b] hover:shadow-[0_10px_30px_rgba(201,159,43,0.4)] active:bg-[#1a1110] active:text-white"
            >
              <div className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full transition-transform duration-500 group-hover:translate-x-1 group-hover:bg-white/30">
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="relative z-10 uppercase tracking-widest">Get in Touch</span>
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Section */}
      <section className="py-24 bg-[#fdfaf5] overflow-hidden animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-6 py-2 rounded-full bg-[#fdf3e7] text-[#b8860b] text-[11px] font-bold uppercase tracking-widest mb-6">
            Vision & Mission
          </span>
          <h2 className="font-serif text-[42px] md:text-[48px] text-[#2d1810] mb-16">
            What <span className="text-[#c99f2b]">Drives Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="group bg-white p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2">
              <div className="relative w-16 h-16 rounded-full bg-[#c99f2b] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(201,159,43,0.3)]">
                <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                <Eye className="relative z-10 w-8 h-8 text-white transition-all duration-500 group-hover:rotate-[360deg]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2d1810] mb-6 transition-colors duration-300 group-hover:text-[#c99f2b]">Our Vision</h3>
              <p className="text-[#5a4a42] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                To become a leading boutique-grade, export-ready apparel manufacturing company recognised for craftsmanship, trust, and innovation — building a scalable, globally compliant apparel ecosystem that supports designers, emerging brands, and international fashion labels.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group bg-white p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2">
              <div className="relative w-16 h-16 rounded-full bg-[#c99f2b] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(201,159,43,0.3)]">
                <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                <Target className="relative z-10 w-8 h-8 text-white transition-all duration-500 group-hover:rotate-[360deg]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2d1810] mb-6 transition-colors duration-300 group-hover:text-[#c99f2b]">Our Mission</h3>
              <p className="text-[#5a4a42] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                To deliver premium-quality, boutique-grade apparel through skilled craftsmanship, precision stitching, and export-standard finishing — empowering designers, boutique stores, and D2C brands with low-MOQ manufacturing, reliable timelines, and transparent operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20 animate-fadeInUp">
          <span className="inline-block px-6 py-2 rounded-full bg-[#fdf3e7] text-[#b8860b] text-[11px] font-bold uppercase tracking-widest mb-6">
            Our Approach
          </span>
          <h2 className="font-serif text-[42px] md:text-[48px] text-[#2d1810]">
            How We <span className="text-[#c99f2b]">Deliver</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Lines (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-[#f0d78c]" />
          
          {[
            { 
              step: "01", 
              icon: <MessageSquare className="w-6 h-6 text-white" />, 
              title: "Consultation & Brief", 
              desc: "We understand your brand requirements, design references, fabric preferences, and production targets to craft a precise plan." 
            },
            { 
              step: "02", 
              icon: <Ruler className="w-6 h-6 text-white" />, 
              title: "Sampling & Pattern Making", 
              desc: "Expert pattern-making, digital spec sheets, and structured sampling ensure accurate fits and minimal rework before production." 
            },
            { 
              step: "03", 
              icon: <Scissors className="w-6 h-6 text-white" />, 
              title: "Boutique Manufacturing", 
              desc: "Skilled artisans craft every garment with precision stitching, clean finishing, and designer-level attention to detail." 
            },
            { 
              step: "04", 
              icon: <PackageCheck className="w-6 h-6 text-white" />, 
              title: "QC & Export Delivery", 
              desc: "Multi-stage quality checks, proper documentation, and export-ready packing — delivered on the promised date, every time." 
            },
          ].map((item, idx) => (
            <div key={item.step} className="group relative z-10 flex flex-col items-center text-center">
              <div className="font-serif text-[60px] font-black text-[#fdf3e7] mb-[-25px] select-none transition-all duration-500 group-hover:text-[#f0d78c]/30 group-hover:-translate-y-2">
                {item.step}
              </div>
              <div className="relative w-16 h-16 rounded-full bg-[#c99f2b] flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(201,159,43,0.2)] transition-all duration-500 cursor-pointer group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(201,159,43,0.4)]">
                {/* Inner Glow/Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                <div className="relative z-10 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-bold text-[#2d1810] mb-4 text-base transition-colors duration-300 group-hover:text-[#c99f2b]">{item.title}</h4>
              <p className="text-[#5a4a42] text-xs leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-24 bg-[#fdfaf5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center animate-fadeInUp">
          <span className="inline-block px-6 py-2 rounded-full bg-[#fdf3e7] text-[#b8860b] text-[11px] font-bold uppercase tracking-widest mb-6">
            Leadership
          </span>
          <h2 className="font-serif text-[42px] md:text-[48px] text-[#2d1810] mb-16">
            The People <span className="text-[#c99f2b]">Behind DINORAH</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Prabithavilasam Raveendran Arjun",
                role: "Partner — Operations & Strategy",
                desc: "Oversees production strategy, quality standards, and operational efficiency. With strong expertise in garment craftsmanship and boutique-level manufacturing, he ensures every product meets DINORAH'S premium quality benchmarks."
              },
              {
                name: "Durga Suresh",
                role: "Partner — Design & Production",
                desc: "Leads sampling, pattern-making, and design interpretation — ensuring every client brief translates into a high-quality finished product. Plays a crucial role in team management, skill development, and maintaining boutique-grade detailing across all categories."
              }
            ].map((leader) => (
              <div key={leader.name} className="group bg-white p-10 md:p-14 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                <div className="relative w-20 h-20 rounded-full bg-[#c99f2b] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(201,159,43,0.3)]">
                  <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                  <User className="relative z-10 w-10 h-10 text-white transition-all duration-500 group-hover:rotate-[360deg]" />
                </div>
                <h3 className="font-bold text-[#2d1810] text-xl mb-2 transition-colors duration-300 group-hover:text-[#c99f2b]">{leader.name}</h3>
                <p className="text-[#b8860b] text-[13px] font-bold uppercase tracking-widest mb-6">{leader.role}</p>
                <p className="text-[#5a4a42] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Feedback Section */}
      <section className="py-24 bg-[#1a1110] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center animate-fadeInUp">
          <span className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#c99f2b] text-[11px] font-bold uppercase tracking-widest mb-6">
            Client Feedback
          </span>
          <h2 className="font-serif text-[42px] md:text-[48px] mb-20">
            Trusted by <span className="text-[#c99f2b]">Brands & Designers</span>
          </h2>

          <div className="max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-[#c99f2b]/30 mx-auto mb-10" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90 mb-12 transition-all duration-500">
              "{testimonials[currentTestimonial].quote}"
            </p>
            
            <div className="flex justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[#c99f2b] text-[#c99f2b]" />
              ))}
            </div>

            <div className="flex flex-col items-center transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#c99f2b] flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-[#c99f2b]/20">
                {testimonials[currentTestimonial].initial}
              </div>
              <h4 className="font-bold text-lg">{testimonials[currentTestimonial].author}</h4>
              <p className="text-white/50 text-sm">{testimonials[currentTestimonial].role}</p>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-6 mt-16">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#c99f2b] transition-all group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:text-[#c99f2b]" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial ? "w-10 bg-[#c99f2b]" : "w-3 bg-white/10 hover:bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#c99f2b] transition-all group"
              >
                <ChevronRight className="w-5 h-5 group-hover:text-[#c99f2b]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
