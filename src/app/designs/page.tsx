"use client";
import { useState, useEffect } from "react";
import api from "@/lib/axios";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Category {
  _id: string;
  name: string;
}

interface Design {
  _id: string;
  name: string;
  image: string;
  description: string;
  isFeatured: boolean;
  category: Category;
}

// Fallback mock data to ensure "live working level" design is always visible
const MOCK_CATEGORIES: Category[] = [
  { _id: "cat1", name: "Kids Lehanga" },
  { _id: "cat2", name: "Kids Dhothi" },
  { _id: "cat3", name: "Custom" },
];

const MOCK_DESIGNS: Design[] = [
  {
    _id: "d1",
    name: "Onam Set",
    image: "/images/design1.png",
    description: "Onam Wear",
    isFeatured: true,
    category: MOCK_CATEGORIES[0],
  },
  {
    _id: "d2",
    name: "Traditional Lehenga",
    image: "/images/design2.png",
    description: "Traditional Wear",
    isFeatured: false,
    category: MOCK_CATEGORIES[0],
  },
  {
    _id: "d3",
    name: "Pattu Pavadai",
    image: "/images/design3.png",
    description: "Traditional Wear",
    isFeatured: false,
    category: MOCK_CATEGORIES[0],
  },
  {
    _id: "d4",
    name: "Butterfly Frock",
    image: "/images/design4.png",
    description: "Kids Wear",
    isFeatured: true,
    category: MOCK_CATEGORIES[1],
  },
];

export default function DesignsPage() {
  const [designs, setDesigns] = useState<Design[]>(MOCK_DESIGNS);
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [designsRes, categoriesRes] = await Promise.all([
          api.get("/api/designs"),
          api.get("/api/categories"),
        ]);
        if (designsRes.data?.length > 0) setDesigns(designsRes.data);
        if (categoriesRes.data?.length > 0) setCategories(categoriesRes.data);
      } catch {
        // silently fail — using mock data
      }
    };
    fetchData();
  }, []);

  const filtered =
    activeCategory === "all"
      ? designs
      : designs.filter((d) => d.category?._id === activeCategory);

  const countFor = (catId: string) =>
    designs.filter((d) => d.category?._id === catId).length;

  return (
    <div className="min-h-screen bg-[#fefcf8]">
      {/* 1. Page Hero */}
      <section className="relative py-32 md:py-48 bg-[#1a1110] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1110]/20 to-[#1a1110]/95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fadeInUp">
          <h1 className="font-serif font-bold text-white text-[48px] md:text-[80px] mb-6 leading-tight">
            Our <span className="text-[#c99f2b]">Designs</span>
          </h1>
          <p className="text-white/80 text-base md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-10 tracking-widest font-light">
            Showcasing our handcrafted traditional wear collections
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[13px] md:text-[15px] text-white/50 font-medium">
            <Link href="/" className="hover:text-[#c99f2b] transition-colors">Home</Link>
            <span className="mx-2 opacity-30">/</span>
            <span className="text-[#c99f2b]">Designs</span>
          </div>
        </div>
      </section>

      {/* 2. Filter/Category Bar */}
      <section className="relative -mt-10 md:-mt-16 z-30 px-3 md:px-6">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl md:rounded-[2.5rem] rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 md:p-6 flex flex-col xl:flex-row items-center gap-4 md:gap-8 border border-[#f0d78c]/30">
          
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] text-[#2d1810]/50 whitespace-nowrap w-full xl:w-auto pb-3 md:pb-0 xl:border-r border-b xl:border-b-0 border-[#f0d78c]/20 xl:pr-8 pt-2 xl:pt-0">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-tr from-[#c99f2b] to-[#e8c66a] rounded-md rotate-45 flex items-center justify-center shadow-[0_4px_12px_rgba(201,159,43,0.3)]">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
            </div>
            <span>Browse <br className="hidden xl:block" />Collection</span>
          </div>

          <div className="flex overflow-x-auto w-full items-center gap-2 md:gap-4 px-1 pb-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* All tab */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 snap-start flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-[13px] md:text-[14px] font-bold transition-all duration-300 border-2 ${
                activeCategory === "all"
                  ? "bg-[#c99f2b] border-[#c99f2b] text-white shadow-[0_8px_15px_rgba(201,159,43,0.25)]"
                  : "bg-transparent border-[#f0d78c]/40 text-[#2d1810]/70 hover:border-[#c99f2b] hover:text-[#c99f2b]"
              }`}
            >
              All <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-[11px] font-black ${activeCategory === "all" ? "bg-white/20 text-white" : "bg-[#2d1810]/5 text-[#2d1810]/50"}`}>{designs.length}</span>
            </button>

            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat._id)}
                className={`flex-shrink-0 snap-start flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-[13px] md:text-[14px] font-bold transition-all duration-300 border-2 ${
                  activeCategory === cat._id
                    ? "bg-[#c99f2b] border-[#c99f2b] text-white shadow-[0_8px_15px_rgba(201,159,43,0.25)]"
                    : "bg-transparent border-[#f0d78c]/40 text-[#2d1810]/70 hover:border-[#c99f2b] hover:text-[#c99f2b]"
                }`}
              >
                {cat.name} <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-[11px] font-black ${activeCategory === cat._id ? "bg-white/20 text-white" : "bg-[#2d1810]/5 text-[#2d1810]/50"}`}>{countFor(cat._id)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Designs Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-[40px] overflow-hidden bg-white shadow-sm animate-pulse">
                <div className="aspect-[4/5] bg-gray-100" />
                <div className="p-10 space-y-4 text-center">
                  <div className="h-7 bg-gray-100 rounded-lg w-3/4 mx-auto" />
                  <div className="h-5 bg-gray-50 rounded-lg w-1/2 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-32 animate-fadeInUp">
            <div className="w-24 h-24 bg-[#fdf3e7] rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="font-serif font-bold text-3xl text-[#2d1810] mb-4">No designs found</h3>
            <p className="text-[#5a4a42] text-sm max-w-sm mx-auto mb-12 opacity-70">
              We are currently updating our collection. Please check back soon or browse other categories.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="bg-[#c99f2b] text-white px-12 py-4 rounded-full font-bold text-[14px] hover:bg-[#b8860b] transition-all shadow-xl shadow-[#c99f2b]/20"
            >
              View All Collection
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {filtered.map((design, idx) => (
                <article
                  key={design._id}
                  className="group bg-white rounded-[40px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-[#f0d78c]/15 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(201,159,43,0.12)] transition-all duration-700 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="relative w-full pt-[125%] overflow-hidden bg-[#fdf3e7]/30">
                    <img
                      src={design.image}
                      alt={design.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    {/* Category Tag */}
                    <div className="absolute top-6 left-6 z-10">
                       <span className="bg-[#c99f2b] text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wide shadow-md">
                        {design.category?.name || "Collection"}
                      </span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#2d1810]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  </div>
                  <div className="p-10 text-center bg-white">
                    <h3 className="font-serif font-bold text-[#2d1810] text-[20px] mb-2 group-hover:text-[#c99f2b] transition-colors duration-300">
                      {design.name}
                    </h3>
                    <p className="text-[#5a4a42] text-[12px] uppercase tracking-wide font-medium">
                      {design.description || "Traditional Wear"}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center animate-fadeInUp opacity-40">
               <p className="text-[14px] font-bold uppercase tracking-widest">
                 Showing <span className="text-[#c99f2b]">{filtered.length}</span> designs
               </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
