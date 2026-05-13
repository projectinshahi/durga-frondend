"use client";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import FeaturedDesigns from '@/components/FeaturedDesigns';
import Image from 'next/image';
import { animate, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Scissors, 
  Ruler, 
  PackageCheck, 
  MessageSquare, 
  Settings, 
  Leaf, 
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

function StatCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-bg-dark text-text-white overflow-hidden pb-10">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center animate-ken-burns" />
        <div className="absolute inset-0 bg-bg-dark/85" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1a1110]/40 to-[#1a1110]" />
        
        {/* Content Wrapper */}
        <div className="relative z-10 w-full text-center px-4 max-w-[1000px] mx-auto mt-20 flex-grow flex flex-col justify-center items-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-[6px] rounded-full border border-[#b8860b]/40 bg-[#1a1110]/50 backdrop-blur-sm text-[10px] tracking-widest uppercase text-white font-bold shadow-sm">
             <span className="text-[#c99f2b] text-[12px]">✦</span> Boutique Craftsmanship. Global Manufacturing Standards.
          </div>
          
          {/* Main Title */}
          <h1 className="flex flex-col items-center justify-center font-serif font-bold mb-8 animate-fadeInUp">
            <span className="block text-white text-[3rem] md:text-[4.2rem] tracking-wide mb-1 drop-shadow-md leading-tight">Precision Crafted.</span>
            <span className="block text-[#c99f2b] text-[3.8rem] md:text-[5.5rem] leading-[0.9] tracking-tight drop-shadow-md">Globally Delivered.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/85 text-[15px] max-w-[700px] mx-auto mb-10 leading-[1.8] font-medium animate-fadeInUp [animation-delay:200ms]">
            DINORAH LLP is a boutique-led garment manufacturing and apparel export company specializing in premium stitched garments, designer collections, private-label production, and small-batch export-ready apparel for global fashion brands.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-2 animate-fadeInUp [animation-delay:400ms]">
            <a href="https://wa.me/917034995428" target="_blank" rel="noreferrer" className="group relative w-[240px] h-[48px] bg-[#c99f2b] text-white font-bold text-[13px] rounded-full flex items-center justify-center gap-2.5 hover:bg-[#b8860b] hover:shadow-[0_8px_20px_rgba(201,159,43,0.3)] hover:-translate-y-0.5 transition-all overflow-hidden">
              <svg className="w-[18px] h-[18px] fill-current relative z-10" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
            </a>
            <Link href="/contact" className="group relative w-[240px] h-[48px] bg-[#1a1110]/20 border border-white/60 text-white font-bold text-[13px] rounded-full flex items-center justify-center gap-2.5 hover:bg-white/10 hover:-translate-y-0.5 transition-all overflow-hidden">
              <svg className="w-[18px] h-[18px] text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
            </Link>
          </div>
          
        </div>

        {/* Bottom Banner Stats */}
        <div className="relative z-10 w-full px-4 mt-auto mb-4">
          <div className="max-w-[1000px] mx-auto flex items-end justify-between min-h-[140px] relative text-center">
            
            {/* Stat 1 */}
            <div className="group flex-1 flex flex-col items-center transition-all duration-500 hover:-translate-y-2">
              <span className="text-[2.5rem] md:text-[3.2rem] font-serif font-bold text-[#c99f2b] tracking-wide leading-none transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(201,159,43,0.4)]">
                <StatCounter value={465} />
              </span>
              <span className="text-[#c99f2b] text-[1.2rem] mt-1 -mb-1 transition-transform duration-500 group-hover:translate-y-1">+</span>
              <span className="text-[10px] text-white/50 uppercase tracking-[2px] mt-2 font-bold whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">Designs Delivered</span>
            </div>
            
            <div className="w-[1px] h-16 bg-white/10 mb-8 blur-[0.5px]"></div>
            
            {/* Stat 2 */}
            <div className="group flex-1 flex flex-col items-center px-4 relative transition-all duration-500 hover:-translate-y-2">
              <span className="text-[2.5rem] md:text-[3.2rem] font-serif font-bold text-[#c99f2b] tracking-wide leading-none transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(201,159,43,0.4)]">
                <StatCounter value={46} />
              </span>
              <span className="text-[#c99f2b] text-[1.2rem] mt-1 -mb-1 transition-transform duration-500 group-hover:translate-y-1">+</span>
              <span className="text-[10px] text-white/50 uppercase tracking-[2px] mt-2 font-bold whitespace-nowrap text-center opacity-70 group-hover:opacity-100 transition-opacity">Brand Partners</span>
            </div>
            
            <div className="w-[1px] h-16 bg-white/10 mb-8 blur-[0.5px]"></div>
            
            {/* Stat 3 */}
            <div className="group flex-1 flex flex-col items-center transition-all duration-500 hover:-translate-y-2">
              <span className="text-[2.5rem] md:text-[3.2rem] font-serif font-bold text-[#c99f2b] tracking-wide leading-none transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(201,159,43,0.4)]">
                <StatCounter value={93} />
              </span>
              <span className="text-[#c99f2b] text-[1.2rem] mt-1 -mb-1 transition-transform duration-500 group-hover:translate-y-1">%</span>
              <span className="text-[10px] text-white/50 uppercase tracking-[2px] mt-2 font-bold whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">Export-Ready QC</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-[#FCFBF8]" id="legacy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 flex flex-col items-center text-center">
             <span className="inline-block px-5 py-2 rounded-full text-dinorah-primary font-bold tracking-[2px] text-xs uppercase border border-dinorah-primary/30 mb-6 bg-dinorah-primary/5 shadow-sm">
                150+ Years of Legacy
             </span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary flex flex-col items-center">
                <span>Our <span className="text-dinorah-primary">Legacy</span></span>
                <span className="w-16 h-0.5 bg-gold mt-6"></span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Left: Image */}
            <div className="relative rounded-[40px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] self-start border border-dinorah-primary/10 animate-fadeInLeft">
               {/* Normally this would be dinorah image, fallback is a high quality square crop */}
               <Image 
                 src="/images/uhhf.jpeg" 
                 alt="Tailoring Craft" 
                 width={500} 
                 height={500} 
                 className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               
               {/* Corner Badge on Image */}
               <div className="absolute bottom-0 right-0 bg-[#c99f2b] text-white w-[120px] h-[120px] rounded-tl-[100%] flex flex-col items-center justify-center pt-8 pl-8 text-center shadow-2xl z-10 transform transition-transform duration-500 hover:scale-110">
                 <span className="text-[2.2rem] font-bold font-serif leading-none text-white tracking-tight -ml-2">150<sup className="text-xs font-bold ml-0.5">+</sup></span>
                 <span className="uppercase text-[7px] tracking-[0.2em] font-bold mt-1 text-white opacity-90 leading-tight -ml-2">Years of<br/>Craftsmanship</span>
               </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center gap-6 animate-fadeInRight">
              <p className="text-[#b8860b] italic font-serif font-bold text-[1.25rem] leading-snug border-l-[3px] border-[#c99f2b] pl-5 py-1">
                A journey of craftsmanship, dedication, and trust — passed down through generations.
              </p>
              
              <p className="text-text-secondary leading-relaxed text-[13px] font-medium">
                Dinorah LLP is built on a legacy that spans over 150 years. What began as a humble family tradition grew through the skilled hands of our forefathers, who carefully handcrafted garments with precision and care, delivering them personally to homes within the community.
              </p>
              <p className="text-text-secondary leading-relaxed text-[13px] font-medium">
                Over time, the business evolved, expanding into traditional attire and becoming a familiar presence in local markets and cultural gatherings. Today, Dinorah LLP carries this rich heritage forward — blending timeless craftsmanship with a modern vision, while staying true to the values that have defined us for generations.
              </p>

              {/* Box of Features */}
              <div className="bg-white/50 backdrop-blur-sm border border-[#f0d78c]/20 rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-8 mt-2">
                 {[
                  { title: "Quality", desc: "Uncompromised in every stitch", icon: <ShieldCheck className="w-5 h-5 text-white" /> },
                  { title: "Authenticity", desc: "True to our roots & heritage", icon: <Award className="w-5 h-5 text-white" /> },
                  { title: "Connection", desc: "Personal bond with every client", icon: <Users className="w-5 h-5 text-white" /> }
                 ].map((item, i) => (
                   <div key={i} className="group flex gap-5 items-center transition-transform hover:translate-x-2 duration-300">
                     <div className="relative w-12 h-12 shrink-0 rounded-full bg-[#c99f2b] flex items-center justify-center shadow-[0_8px_15px_rgba(201,159,43,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_25px_rgba(201,159,43,0.4)]">
                        <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                        <div className="relative z-10 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                          {item.icon}
                        </div>
                     </div>
                     <div>
                       <h4 className="font-bold text-text-primary text-[14px] tracking-wide group-hover:text-[#c99f2b] transition-colors">{item.title}</h4>
                       <span className="text-text-light text-[12px] font-medium opacity-80">{item.desc}</span>
                     </div>
                   </div>
                 ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 items-center mt-2">
                <a href="/about" className="bg-[#b8860b] text-white font-bold text-[13px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2.5">
                   <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>
                   Read Full Story
                </a>
                <a href="/contact" className="border border-[#e5e7eb] bg-[#f9fafb] text-text-primary text-[13px] font-bold px-6 py-3 rounded-full hover:bg-white active:bg-[#1a1110] active:text-white transition-all flex items-center gap-2.5">
                   <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedDesigns />

      {/* Services Section */}
      <section className="py-24 bg-bg-secondary" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block px-6 py-2 rounded-full text-dinorah-primary font-semibold tracking-[3px] text-sm uppercase bg-[rgba(184,134,11,0.1)] border border-[rgba(184,134,11,0.2)] mb-4">Our Solution</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-dinorah-primary to-gold">Services</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Boutique-Grade Stitching", desc: "Premium garment construction powered by skilled artisans, detailed stitching, clean finishing, and designer-level craftsmanship.", icon: <Scissors className="w-7 h-7 text-[#b8860b]" /> },
              { title: "End-to-End Manufacturing", desc: "From fabric sourcing and sampling to stitching, finishing, and packing—every step is executed under one integrated workflow.", icon: <Settings className="w-7 h-7 text-[#b8860b]" /> },
              { title: "Pattern-Making & Sampling", desc: "Accurate fits, shape retention, and improved design execution achieved through pattern-making expertise and digital spec sheets.", icon: <Ruler className="w-7 h-7 text-[#b8860b]" /> },
              { title: "Quality-Controlled Production", desc: "Our QC workflow includes stitch audits, measurement checks, finishing inspection, and packing validation for export-ready output.", icon: <ShieldCheck className="w-7 h-7 text-[#b8860b]" /> },
              { title: "Sustainable Production", desc: "Optimized material usage, reduced wastage, and efficient operations help maintain cost-effective and sustainable production practices.", icon: <Leaf className="w-7 h-7 text-[#b8860b]" /> },
              { title: "Custom & Private-Label", desc: "Tailor-made support for designers, boutique stores, and global brands. Flexible MOQs, quick sampling, and reliable timelines.", icon: <HeartHandshake className="w-7 h-7 text-[#b8860b]" /> }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group p-10 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#f0d78c]/10 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(201,159,43,0.1)] hover:border-[#c99f2b]/30 transition-all duration-500 flex flex-col items-center text-center animate-fadeInUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative w-20 h-20 rounded-full bg-[#fdf3e7] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c99f2b]">
                  <div className="absolute inset-0 rounded-full border-2 border-[#b8860b]/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-90" />
                  <div className="relative z-10 transition-all duration-500 group-hover:text-white group-hover:rotate-[360deg]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-4 text-text-primary group-hover:text-[#c99f2b] transition-colors">{service.title}</h3>
                <p className="text-text-secondary leading-[1.7] text-sm mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                <Link href="/contact" className="group/link text-[#c99f2b] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#b8860b] transition-colors">
                  Enquire Now 
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 bg-bg-dark text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <span className="inline-block px-5 py-1.5 rounded-full text-gold font-bold tracking-[2px] text-[10px] uppercase border border-gold/30 mb-8 bg-gold/5 shadow-sm">
            Client Feedback
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 tracking-wide">
            Trusted by <span className="text-gold">Brands & Designers</span>
          </h2>
          
          <div className="flex flex-col items-center animate-fadeInUp">
            {/* Quote Icon */}
            <svg className="w-12 h-12 text-[#c99f2b] mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-[17px] italic font-medium leading-relaxed text-[#eae8e3] max-w-3xl mb-10 px-4">
              {"We sourced boutique ethnic wear from DINORAH for our store and the quality exceeded our expectations. The finishing is at par with premium designer labels but at competitive manufacturing rates. Highly recommended for boutiques."}
            </p>
            
            {/* Stars */}
            <div className="flex gap-1.5 mb-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Author */}
            <div className="flex items-center gap-5 mb-20 animate-fadeInUp">
              <div className="relative w-16 h-16 shrink-0 rounded-full bg-[#c99f2b] flex items-center justify-center text-white font-bold text-xl shadow-[0_10px_25px_rgba(201,159,43,0.3)]">
                <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-90" />
                A
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white tracking-wide text-base">Aisha Nambiar</h4>
                <p className="text-[12px] text-[#c99f2b] font-bold uppercase tracking-[0.2em] mt-1">Boutique Owner, Kochi</p>
              </div>
            </div>

            {/* Pagination / Controls */}
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition group">
                <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <div className="flex items-center gap-2.5 px-4">
                <span className="w-2 h-2 rounded-full bg-white/20"></span>
                <span className="w-8 h-2 rounded-full bg-gold"></span>
                <span className="w-2 h-2 rounded-full bg-white/20"></span>
              </div>
              <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition group">
                <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#c99f2b] to-[#b8860b]">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTUwIDUwYzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHMtMTAtNC40NzctMTAtMTAgNC40NzctMTAgMTAtMTB6TTEwIDEwYzAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTBjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMFMwIDI1LjUyMyAwIDIwIDQuNDc3IDEwIDEwIDEweiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif font-bold text-4xl text-white mb-5">Let's Grow Together</h2>
          <p className="text-white/90 text-[15px] leading-[1.8] mb-10 max-w-xl mx-auto">
            For collaborations, custom manufacturing, private-label production, or boutique apparel requirements — reach out to begin your next production cycle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+917034995428"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-dinorah-primary font-bold text-[13px] px-8 py-3.5 rounded-full hover:bg-gray-50 active:bg-[#1a1110] active:text-white transition shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M7.707 10.293a12.051 12.051 0 007.994 7.993l1.83-1.83a.996.996 0 011.02-.243c1.12.336 2.31.516 3.535.516a1 1 0 011 1v3.536a1 1 0 01-1 1C10.518 22.265 1.734 13.483 1.734 2.5a1 1 0 011-1h3.535a1 1 0 011 1c0 1.226.18 2.415.515 3.535a.996.996 0 01-.242 1.02l-1.83 1.83z"/>
              </svg>
              Call Us
            </a>
            <a
              href="https://wa.me/917034995428"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent border border-white text-white font-bold text-[13px] px-8 py-3.5 rounded-full hover:bg-white/10 transition shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
