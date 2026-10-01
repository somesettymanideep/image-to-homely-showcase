import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import cultureImage from "@/assets/ekatva-culture.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import heroImage from "@/assets/ekatva-hero.jpg";
import studentImg from "@/assets/admission-student.jpg";
import { toast } from "sonner";

interface EventItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

const defaultEvents: EventItem[] = [
  {
    id: "1",
    title: "Annual Day Celebration",
    image: cultureImage,
    category: "Cultural",
  },
  {
    id: "2",
    title: "Science Exhibition",
    image: classroomImage,
    category: "Exhibition",
  },
  {
    id: "3",
    title: "Sports Day",
    image: campusImage,
    category: "Sports",
  },
  {
    id: "4",
    title: "Children's Day",
    image: heroImage,
    category: "Celebration",
  },
  {
    id: "5",
    title: "Art & Craft Workshop",
    image: studentImg,
    category: "Creative",
  },
  {
    id: "6",
    title: "Independence Day Fest",
    image: cultureImage,
    category: "National",
  },
];

export function EventsCelebrationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay loop mechanism
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // 3 seconds interval for smooth autoplay

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section
      id="events"
      className="py-12 sm:py-16 md:py-20 bg-slate-50/70 relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      {/* Decorative Confetti Background Graphics (Left & Right) */}
      <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none opacity-80 z-0 hidden xs:flex">
        {/* Confetti shapes */}
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <div className="w-3 h-3 rotate-45 bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
        <div className="w-3.5 h-3.5 rotate-12 bg-purple-500 rounded-sm" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>

      <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none opacity-80 z-0 hidden xs:flex">
        <div className="w-3 h-3 rotate-45 bg-purple-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="w-3.5 h-3.5 rotate-45 bg-blue-500" />
        <div className="w-3 h-3 rotate-12 bg-amber-400 rounded-sm" />
      </div>

      <div className="section-shell relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 reveal-list">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003494] tracking-tight font-display italic">
            Events &amp; Celebrations
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-bold mt-2 tracking-wide">
            Fun, Learning and Togetherness
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-1 sm:px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls Overlay on hover/desktop */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-[-12px] sm:left-[-18px] top-[40%] -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0047bb] hover:bg-blue-50 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-[-12px] sm:right-[-18px] top-[40%] -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#0047bb] hover:bg-blue-50 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla Carousel viewport */}
          <div className="overflow-hidden rounded-2xl p-1" ref={emblaRef}>
            <div className="flex -ml-4">
              {defaultEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 pl-4"
                >
                  <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/50 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col h-full cursor-pointer">
                    {/* Event Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Event Banner Footer */}
                    <div className="p-4 sm:p-4.5 flex items-center justify-between gap-2 bg-white mt-auto">
                      <h3 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-[#0047bb] transition-colors line-clamp-1">
                        {event.title}
                      </h3>
                      <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight className="w-4 h-4 text-[#0047bb] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {defaultEvents.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => emblaApi?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIndex % defaultEvents.length === idx
                    ? "w-6 bg-[#0047bb]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Events Green Button */}
        <div className="mt-8 text-center reveal-list">
          <button
            type="button"
            onClick={() => toast.info("Viewing all school events & celebrations")}
            className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-green-900/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
