import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Palette, Star, Trophy, UserCheck } from "lucide-react";
import cultureImage from "@/assets/ekatva-culture.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import heroImage from "@/assets/ekatva-hero.jpg";
import studentImg from "@/assets/admission-student.jpg";
import { toast } from "sonner";

interface TeacherAchievement {
  id: string;
  name: string;
  organization: string;
  description: string;
  image: string;
  badgeBg: string;
  icon: typeof Trophy;
}

const achievements: TeacherAchievement[] = [
  {
    id: "1",
    name: "Mr. Vemula Amrutha Kumar",
    organization: "STATE TEACHERS, LECTURERS & PROFESSORS UNION",
    description:
      "Felicitated for his remarkable contributions to teaching, academic dedication, and his commitment to student development.",
    image: cultureImage,
    badgeBg: "bg-[#0047bb] text-white",
    icon: Trophy,
  },
  {
    id: "2",
    name: "Mr. Brahmam K",
    organization: "APPSA (Private Teacher Association)",
    description:
      "Felicitated for his outstanding service and dedication as the Best Teacher in the occasion of Teachers' Day 2024.",
    image: classroomImage,
    badgeBg: "bg-[#0284c7] text-white",
    icon: Star,
  },
  {
    id: "3",
    name: "Mrs. Udutha Sushma",
    organization: "APPSA (Private Teacher Association)",
    description:
      "Felicitated for her compassion, creativity and remarkable contribution to nurturing young minds with care and patience.",
    image: studentImg,
    badgeBg: "bg-[#16a34a] text-white",
    icon: BookOpen,
  },
  {
    id: "4",
    name: "Mr. Gogulamdudi Vijay Kumar",
    organization: "APPSA (Private Teacher Association)",
    description:
      "Felicitated for his outstanding dedication in promoting physical education, sportsmanship, and overall student well-being.",
    image: campusImage,
    badgeBg: "bg-[#e11d48] text-white",
    icon: UserCheck,
  },
  {
    id: "5",
    name: "Mrs. Himaja",
    organization: "Sportshi Creative Art, Vijayawada",
    description:
      "Felicitated for her outstanding creativity and exceptional talent in the drawing competition.",
    image: heroImage,
    badgeBg: "bg-[#7c3aed] text-white",
    icon: Palette,
  },
];

export function TeachersAchievementSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay loop mechanism
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500); // 3.5 seconds interval

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section
      id="teacher-achievements"
      className="py-14 sm:py-20 md:py-24 bg-slate-50/80 relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      {/* Top Left Organic Leaf Petals Decoration */}
      <div className="absolute left-4 top-4 flex gap-1 pointer-events-none opacity-80 hidden sm:flex">
        <span className="w-5 h-8 bg-blue-500 rounded-tr-full rounded-bl-full transform -rotate-45" />
        <span className="w-5 h-8 bg-emerald-500 rounded-tr-full rounded-bl-full transform rotate-12" />
        <span className="w-5 h-8 bg-rose-500 rounded-tr-full rounded-bl-full transform rotate-45" />
      </div>

      {/* Dot Matrix Decoration (Left & Bottom) */}
      <div className="absolute left-6 top-24 grid grid-cols-4 gap-1.5 opacity-30 pointer-events-none hidden md:grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      <div className="absolute left-10 bottom-6 grid grid-cols-5 gap-1.5 opacity-30 pointer-events-none hidden md:grid">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      {/* Bottom Left Multi-Color Waves Accent */}
      <div className="absolute left-0 bottom-0 w-80 sm:w-96 h-36 pointer-events-none opacity-90 z-0">
        <svg viewBox="0 0 400 150" fill="none" className="w-full h-full">
          <path
            d="M-50 150 C 50 80, 180 140, 250 150 L-50 150 Z"
            fill="#0284c7"
            opacity="0.85"
          />
          <path
            d="M-50 150 C 80 110, 190 120, 300 150 L-50 150 Z"
            fill="#16a34a"
            opacity="0.8"
          />
          <path
            d="M-50 150 C 100 130, 220 135, 380 150 L-50 150 Z"
            fill="#e11d48"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Bottom Right Leaf Outline */}
      <div className="absolute right-4 bottom-4 pointer-events-none opacity-25 z-0 hidden sm:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#0284c7" strokeWidth="2">
          <path d="M50 90 C 20 60, 20 20, 80 10 C 80 70, 60 80, 50 90 Z" fill="none" />
          <path d="M50 90 L 65 30" />
        </svg>
      </div>

      <div className="section-shell relative z-10">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-10 sm:mb-14 reveal-list">
          {/* Main Title & Subtitle Column */}
          <div className="lg:col-span-8 text-left lg:text-left">
            {/* Eyebrow badge with green & red side lines */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#16a34a] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-slate-700">
                TEACHER&apos;S
              </span>
              <span className="w-6 h-0.5 bg-[#e11d48] rounded-full" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003494] tracking-tight leading-none mb-3">
              Achieve<span className="text-[#e11d48]">m</span>ent
            </h2>

            <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              Our dedicated teachers continue to make a difference through their passion, expertise and unwavering commitment to education.
            </p>
          </div>

          {/* Top Right Handwritten Note */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
            <div className="transform rotate-[3deg] text-right font-display hidden sm:block">
              <p className="text-[#0047bb] font-extrabold text-base sm:text-lg leading-tight italic">
                Inspiring Teachers
              </p>
              <p className="text-[#0047bb] font-extrabold text-base sm:text-lg leading-tight italic">
                Building Brighter Futures
              </p>
              <div className="flex justify-end gap-1 mt-1">
                <span className="w-6 h-0.5 bg-[#16a34a] rounded-full" />
                <span className="w-6 h-0.5 bg-[#e11d48] rounded-full" />
                <span className="w-6 h-0.5 bg-[#0047bb] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-1 sm:px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous teacher achievement"
            className="absolute left-[-10px] sm:left-[-18px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#0047bb] hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next teacher achievement"
            className="absolute right-[-10px] sm:right-[-18px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#0047bb] hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden p-1.5" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-5">
              {achievements.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 pl-4 sm:pl-5"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer overflow-hidden">
                      {/* Event/Felicitation Photo */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Icon Badge Overlapping Photo & Content */}
                      <div className="px-4 relative -mt-4 z-20">
                        <div
                          className={`w-9 h-9 rounded-full ${item.badgeBg} flex items-center justify-center shadow-md border-2 border-white`}
                        >
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-4 pt-2.5 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-[#0047bb] transition-colors leading-tight line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-[10px] font-bold tracking-tight text-slate-400 uppercase mt-0.5 line-clamp-2 min-h-[1.75rem]">
                            {item.organization}
                          </p>
                          <p className="text-slate-600 text-[11px] sm:text-xs font-medium leading-relaxed mt-2 line-clamp-4">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom 3-Color Dash Line */}
                        <div className="flex gap-1 justify-center mt-4 pt-2 border-t border-slate-100">
                          <span className="w-5 h-0.5 bg-[#16a34a] rounded-full" />
                          <span className="w-5 h-0.5 bg-[#0047bb] rounded-full" />
                          <span className="w-5 h-0.5 bg-[#e11d48] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* View Teacher Achievement Action Button */}
        <div className="mt-8 text-center reveal-list">
          <button
            type="button"
            onClick={() => toast.info("Viewing all teacher achievements & awards")}
            className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-green-900/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>View Teacher Achievement</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
