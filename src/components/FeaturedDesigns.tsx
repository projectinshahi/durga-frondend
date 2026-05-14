"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/axios";

interface Design {
  _id: string;
  name: string;
  image: string;
  description: string;
  isFeatured: boolean;
  category: { _id: string; name: string };
}

export default function FeaturedDesigns() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/designs")
      .then((res) => {
        const featured = (res.data as Design[]).filter((d) => d.isFeatured);
        setDesigns(featured.slice(0, 6));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-bg-primary" id="designs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-end mb-16">
          <div>
            <span className="inline-block px-6 py-2 rounded-full text-dinorah-primary font-semibold tracking-[3px] text-sm uppercase bg-[rgba(184,134,11,0.1)] border border-[rgba(184,134,11,0.2)] mb-4">
              Heritage Lookbook
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-dinorah-primary to-gold">
                Designs
              </span>
            </h2>
          </div>
          {/* <p className="text-text-secondary max-w-md mt-4 md:mt-0 md:text-right text-[14px]">
            A curated showcase of traditional children's wear, thoughtfully
            crafted with elegance, comfort, and timeless detailing.
          </p> */}
        </div>

        {/* Skeleton */}
        {loading && (
          <div className="flex gap-5 overflow-x-auto pb-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-[260px] shrink-0 rounded-[32px] overflow-hidden bg-white animate-pulse shadow-sm"
              >
                <div className="h-[320px] bg-gray-100" />
                <div className="p-8 space-y-3">
                  <div className="h-5 bg-gray-100 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-gray-50 rounded w-1/2 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cards */}
        {!loading && designs.length > 0 && (
          <div
            className="designs-scroll flex gap-5 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >
            {designs.map((d) => (
              <div
                key={d._id}
                className="w-[280px] shrink-0 bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden snap-start group border border-[#f0d78c]/10 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(201,159,43,0.12)] transition-all duration-700"
              >
                {/* Fixed-height image */}
                <div className="relative h-[350px] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  {/* Category pill — bottom of image */}
                  {d.category?.name && (
                    <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#c99f2b] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {d.category.name}
                    </span>
                  )}
                </div>
                <div className="px-6 py-8 text-center bg-white">
                  <h4 className="font-bold font-serif text-text-primary text-[1.1rem] mb-2 group-hover:text-[#c99f2b] transition-colors">{d.name}</h4>
                  <div className="w-8 h-[2px] bg-[#c99f2b]/30 mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                  {d.description && (
                    <span className="text-text-secondary text-[11px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                      {d.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty — no designs yet */}
        {!loading && designs.length === 0 && (
          <div className="text-center py-16 text-text-light">
            <p className="font-serif italic text-lg">No featured designs yet.</p>
          </div>
        )}

        {/* View all link */}
        {!loading && (
          <div className="text-center mt-4">
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 text-dinorah-primary font-bold text-[13px] hover:text-dinorah-dark transition-colors"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
