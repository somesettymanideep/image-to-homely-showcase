import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Medal,
  Star,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import campusImage from "@/assets/ekatva-campus.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import cultureImage from "@/assets/ekatva-culture.jpg";
import studentImg from "@/assets/admission-student.jpg";

interface AchieverCard {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  image: string;
  isHero?: boolean;
}

const achieversList: AchieverCard[] = [
  {
    id: "1",
    category: "Swimming Champions",
    categoryColor: "bg-[#0284c7]",
    title: "Ekatva Shines at Bezawada Sports Club Meet 2026",
    description:
      "Our young swimming champions secured 2 Gold, 2 Silver and 2 Bronze medals at the Bezawada Sports Club Meet 2026.",
    image: cultureImage,
    isHero: true,
  },
  {
    id: "2",
    category: "Sports",
    categoryColor: "bg-[#16a34a]",
    title: "A Satya Sai Kumar",
    description:
      "Proudly participated in the Krishna District Level Yoga Sports Competition.",
    image: classroomImage,
  },
  {
    id: "3",
    category: "Chess",
    categoryColor: "bg-[#e11d48]",
    title: "P Jashwanth",
    description:
      "Proudly Participated in Prestigious Under-15 Chess Tournament.",
    image: studentImg,
  },
  {
    id: "4",
    category: "Sports",
    categoryColor: "bg-[#7c3aed]",
    title: "TEAM EKATVA",
    description:
      "Our young talents continue to make us proud with their sportsmanship and dedication.",
    image: campusImage,
  },
];

const stats = [
  {
    number: "50+",
    label: "Students Achieved in Sports",
    icon: Trophy,
    color: "bg-[#0284c7]",
  },
  {
    number: "30+",
    label: "Awards & Recognitions (Last 2 Years)",
    icon: Medal,
    color: "bg-[#16a34a]",
  },
  {
    number: "15+",
    label: "Students Excelled in Competitions",
    icon: User,
    color: "bg-[#e11d48]",
  },
  {
    number: "100%",
    label: "Participation in Co-curricular Activities",
    icon: Star,
    color: "bg-[#7c3aed]",
  },
  {
    number: "6+",
    label: "Years of Building Future Leaders",
    icon: Users,
    color: "bg-[#0284c7]",
  },
];

export function EkatvaAchieversSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleCardClick = (title: string) => {
    toast.info(`Viewing details for: ${title}`);
  };

  return (
    <section
      id="achievers"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f4f9fe] relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      {/* Decorative Top-Left Blob & Dots */}
      <div className="absolute left-0 top-0 w-64 h-64 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-60">
          <path
            d="M 0 0 Q 120 40 80 140 Q 20 200 0 200 Z"
            fill="#38bdf8"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="absolute left-10 top-12 grid grid-cols-6 gap-1.5 opacity-25 pointer-events-none hidden md:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
        ))}
      </div>

      {/* Decorative Bottom-Left Waves */}
      <div className="absolute left-0 bottom-0 w-80 h-44 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <path
            d="M-40 200 C 60 120, 180 180, 240 200 L-40 200 Z"
            fill="#16a34a"
            opacity="0.85"
          />
          <path
            d="M-40 200 C 90 150, 200 160, 320 200 L-40 200 Z"
            fill="#e11d48"
            opacity="0.8"
          />
          <path
            d="M-40 200 C 120 170, 240 175, 400 200 L-40 200 Z"
            fill="#0284c7"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Decorative Bottom-Right Wave & Dots */}
      <div className="absolute right-0 bottom-0 w-80 h-44 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <path
            d="M 400 200 C 300 120, 180 180, 120 200 L 400 200 Z"
            fill="#0284c7"
            opacity="0.75"
          />
          <path
            d="M 400 200 C 270 150, 160 160, 40 200 L 400 200 Z"
            fill="#16a34a"
            opacity="0.65"
          />
        </svg>
      </div>

      <div className="absolute right-12 bottom-12 grid grid-cols-6 gap-1.5 opacity-25 pointer-events-none hidden md:grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative text-center mb-10 sm:mb-14 reveal-list" data-reveal>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#16a34a] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#0284c7]">
              EKATVA'S
            </span>
            <span className="w-8 h-1 bg-[#e11d48] rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003494] tracking-tight leading-none mb-3">
            Achieve<span className="text-[#e11d48]">v</span>ers
          </h2>

          <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The snapshots highlight our students' remarkable journey in various fields, showcasing their passion and dedication.
          </p>

          {/* Top Right Handwritten Tagline */}
          <div className="absolute right-0 top-0 hidden lg:block text-right font-display transform rotate-[-4deg]">
            <p className="text-[#0047bb] font-extrabold text-base leading-tight italic">
              Talent Today,
            </p>
            <p className="text-[#0047bb] font-extrabold text-base leading-tight italic">
              Leaders Tomorrow
            </p>
            <div className="flex justify-end gap-1 mt-1">
              <span className="w-4 h-0.5 bg-[#16a34a] rounded-full" />
              <span className="w-4 h-0.5 bg-[#e11d48] rounded-full" />
              <span className="w-4 h-0.5 bg-[#0047bb] rounded-full" />
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous achiever"
            className={`absolute left-[-12px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[#0284c7] transition-all cursor-pointer ${
              !canScrollPrev ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-50 hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next achiever"
            className={`absolute right-[-12px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[#0284c7] transition-all cursor-pointer ${
              !canScrollNext ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-50 hover:scale-105"
            }`}
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden p-1.5" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6 reveal-list" data-reveal>
              {/* Achievers Cards */}
              {achieversList.map((item) => {
                if (item.isHero) {
                  return (
                    <div
                      key={item.id}
                      className="flex-[0_0_100%] lg:flex-[0_0_52%] min-w-0 pl-4 sm:pl-6"
                    >
                      <div
                        onClick={() => handleCardClick(item.title)}
                        className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group cursor-pointer h-full min-h-[380px] bg-slate-900 flex flex-col justify-end"
                      >
                        {/* Background Image */}
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Dark Left Overlay Gradient Banner */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#071d33] via-[#071d33]/90 to-transparent w-full md:w-[68%]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071d33] via-transparent to-transparent md:hidden" />

                        {/* Banner Content */}
                        <div className="relative z-10 p-6 sm:p-8 max-w-md text-white flex flex-col justify-between h-full">
                          <div>
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0284c7] text-white mb-4 shadow-sm">
                              <Trophy className="w-3.5 h-3.5" />
                              <span>{item.category}</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug mb-3">
                              {item.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mb-6 line-clamp-3">
                              {item.description}
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-400 group-hover:gap-3 transition-all">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_24%] min-w-0 pl-4 sm:pl-6"
                  >
                    <div
                      onClick={() => handleCardClick(item.title)}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden flex flex-col justify-between h-full group hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                    >
                      {/* Top Photo */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                        <div>
                          {/* Category Badge */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold ${item.categoryColor} text-white mb-3 shadow-xs`}
                          >
                            <Trophy className="w-3 h-3" />
                            <span>{item.category}</span>
                          </div>

                          <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#0047bb] transition-colors leading-snug mb-2">
                            {item.title}
                          </h3>

                          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        </div>

                        {/* View Details Link */}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0284c7] group-hover:gap-2.5 transition-all">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {achieversList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === selectedIndex
                    ? "w-6 bg-[#0284c7]"
                    : "w-2.5 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Bar Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-8 mb-10 reveal-list" data-reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 reveal-list" data-reveal>
            {stats.map(({ number, label, icon: Icon, color }, idx) => (
              <div
                key={label}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? "pt-4 md:pt-0 md:pl-4 lg:pl-6" : ""
                }`}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${color} text-white flex items-center justify-center shrink-0 shadow-md`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#003494] tracking-tight leading-none mb-1">
                    {number}
                  </h4>
                  <p className="text-slate-600 font-bold text-[11px] sm:text-xs leading-tight">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div className="text-center reveal-list" data-reveal>
          <button
            type="button"
            onClick={() => toast.info("Navigating to all student achievers")}
            className="inline-flex items-center justify-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View All Achievers</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
