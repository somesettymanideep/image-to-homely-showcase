import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, GraduationCap, User, Quote } from "lucide-react";
import cultureImage from "@/assets/ekatva-culture.jpg";
import studentImg from "@/assets/admission-student.jpg";
import { toast } from "sonner";

interface Leader {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  accentColor: "blue" | "green" | "red";
  icon: typeof User;
}

const leaders: Leader[] = [
  {
    id: "1",
    name: "Amaraneni Ramesh Babu",
    role: "CHAIRMAN",
    description:
      "With a strong vision and unwavering commitment to education, he continues to guide Ekatva EM School towards a brighter future.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=520",
    accentColor: "blue",
    icon: User,
  },
  {
    id: "2",
    name: "Amaraneni Manoj",
    role: "DIRECTOR",
    description:
      "Guided by a strong vision for quality education, he drives innovation, excellence and growth at Ekatva EM School.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&h=520",
    accentColor: "green",
    icon: GraduationCap,
  },
  {
    id: "3",
    name: "Sindhura Amaraneni",
    role: "ACADEMIC DIRECTOR",
    description:
      "With a passion for nurturing young minds, she ensures academic excellence and holistic development for every student.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&h=520",
    accentColor: "red",
    icon: BookOpen,
  },
];

export function LeadershipSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleLeaderClick = (name: string, role: string) => {
    toast.info(`Message from ${name} (${role})`);
  };

  return (
    <section
      id="leadership"
      className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      {/* Wave Accent at Bottom Left */}
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

      <div className="section-shell relative z-10">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-10 sm:mb-14 reveal-list">
          {/* Main Title & Quote Column */}
          <div className="lg:col-span-8">
            {/* Eyebrow badge with green/red side pill lines */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#16a34a] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-slate-700">
                MEET OUR
              </span>
              <span className="w-6 h-0.5 bg-[#e11d48] rounded-full" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#003494] tracking-tight leading-none mb-3">
              Leadership
            </h2>

            <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.
            </p>
          </div>

          {/* Top Right Handwritten Note */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
            <div className="transform rotate-[-3deg] text-right font-display hidden sm:block">
              <p className="text-[#0047bb] font-extrabold text-base sm:text-lg leading-tight italic">
                Guided by Vision
              </p>
              <p className="text-[#0047bb] font-extrabold text-base sm:text-lg leading-tight italic">
                Driven by Values
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
        <div className="relative">
          {/* Navigation Arrows for Mobile/Tablet */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous leadership card"
            className={`absolute left-[-10px] sm:left-[-18px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#0047bb] transition-all cursor-pointer ${
              !canScrollPrev ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-50 hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next leadership card"
            className={`absolute right-[-10px] sm:right-[-18px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#0047bb] transition-all cursor-pointer ${
              !canScrollNext ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-50 hover:scale-105"
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden p-1.5" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {/* Leader Cards */}
              {leaders.map((leader) => {
                const IconComponent = leader.icon;
                const cornerBgClass =
                  leader.accentColor === "blue"
                    ? "bg-[#0047bb]"
                    : leader.accentColor === "green"
                    ? "bg-[#16a34a]"
                    : "bg-[#e11d48]";

                const badgeBgClass =
                  leader.accentColor === "blue"
                    ? "bg-[#0047bb] text-white"
                    : leader.accentColor === "green"
                    ? "bg-[#16a34a] text-white"
                    : "bg-[#e11d48] text-white";

                return (
                  <div
                    key={leader.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_28%] min-w-0 pl-4 sm:pl-6"
                  >
                    <div
                      onClick={() => handleLeaderClick(leader.name, leader.role)}
                      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-lg shadow-slate-200/50 overflow-hidden flex flex-col justify-between h-full group hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                    >
                      {/* Photo Wrapper with Top-Left Accent Tag */}
                      <div className="relative aspect-[4/3.2] overflow-hidden bg-slate-100">
                        {/* Curved Corner Badge */}
                        <div
                          className={`absolute top-0 left-0 w-12 h-12 ${cornerBgClass} rounded-br-2xl z-10`}
                        />
                        <img
                          src={leader.image}
                          alt={leader.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Icon Badge overlapping Image & Content */}
                      <div className="px-5 sm:px-6 relative -mt-5 z-20">
                        <div
                          className={`w-10 h-10 rounded-full ${badgeBgClass} flex items-center justify-center shadow-md border-2 border-white`}
                        >
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6 pt-3 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#0047bb] transition-colors leading-snug">
                            {leader.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs font-black tracking-wider text-slate-400 uppercase mt-0.5">
                            {leader.role}
                          </p>

                          {/* 3-Color Mini Bar */}
                          <div className="flex gap-1 my-2.5">
                            <span className="w-4 h-1 bg-[#16a34a] rounded-full" />
                            <span className="w-4 h-1 bg-[#e11d48] rounded-full" />
                            <span className="w-4 h-1 bg-[#0047bb] rounded-full" />
                          </div>

                          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-2 line-clamp-4">
                            {leader.description}
                          </p>
                        </div>

                        {/* Know More Link */}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0047bb] group-hover:gap-2.5 transition-all">
                          <span>Know More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Inspiration Feature Banner Card (Right Slide) */}
              <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_32%] min-w-0 pl-4 sm:pl-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[380px] shadow-lg border border-slate-200/90 flex flex-col justify-between p-6 sm:p-8 text-slate-900 bg-white group">
                  {/* Background Image with Light Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={studentImg}
                      alt="Students at Ekatva EM School"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/60" />
                  </div>

                  {/* Banner Content */}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#16a34a] flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 fill-[#16a34a]" />
                    </div>

                    <h3 className="font-display italic font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#003494] leading-tight">
                      Better Leaders <br />
                      Build a Brighter <br />
                      Tomorrow
                    </h3>

                    <div className="flex gap-1 mt-3">
                      <span className="w-8 h-1 bg-[#16a34a] rounded-full" />
                      <span className="w-8 h-1 bg-[#e11d48] rounded-full" />
                      <span className="w-8 h-1 bg-[#0047bb] rounded-full" />
                    </div>
                  </div>

                  <div className="relative z-10 pt-6">
                    <p className="text-slate-600 font-bold text-xs sm:text-sm">
                      Ekatva Educational Society
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
