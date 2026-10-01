import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Ekatva EM School has given my child the confidence and values needed for life.",
    name: "Priya Sharma",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240&h=240",
  },
  {
    id: "2",
    quote:
      "The teachers are caring, experienced and truly committed to every child's growth.",
    name: "Ramesh Kumar",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=240&h=240",
  },
  {
    id: "3",
    quote:
      "A perfect blend of academics, activities and values. We are truly happy with our choice!",
    name: "Neha Verma",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=240&h=240",
  },
  {
    id: "4",
    quote:
      "The environment is safe, disciplined, and positive. Ekatva feels like a second home for our child.",
    name: "Suresh Reddy",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240&h=240",
  },
  {
    id: "5",
    quote:
      "The foundational learning and interactive smart classroom activities are outstanding!",
    name: "Anitha Rao",
    role: "Parent",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=240&h=240",
  },
];

export function TestimonialsCarousel() {
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
    }, 3500); // 3.5 seconds interval

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-18 md:py-22 bg-gradient-to-b from-blue-50/40 via-slate-50/70 to-blue-50/30 relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      <div className="section-shell">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal-list">
          <p className="text-[#16a34a] font-extrabold text-sm sm:text-base tracking-wide mb-1.5">
            What Parents Say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#003494] tracking-tight">
            Trusted by Families
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-[-10px] sm:left-[-18px] md:left-[-24px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md shadow-slate-300/60 border border-slate-100 flex items-center justify-center text-[#0047bb] hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute right-[-10px] sm:right-[-18px] md:right-[-24px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md shadow-slate-300/60 border border-slate-100 flex items-center justify-center text-[#0047bb] hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden p-1.5" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-6"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-slate-100/90 shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-center gap-4 sm:gap-5 h-full">
                    {/* Left Circular Avatar */}
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-slate-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right Quote & Author Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-3 line-clamp-4">
                        &quot;{item.quote}&quot;
                      </p>
                      <div>
                        <h4 className="font-bold text-[#0047bb] text-xs sm:text-sm leading-snug truncate">
                          - {item.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5 truncate">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, idx) => {
              const isActive = selectedIndex % testimonials.length === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-2.5 h-2.5 bg-[#16a34a]"
                      : "w-2.5 h-2.5 bg-blue-200/80 hover:bg-blue-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
