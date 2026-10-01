import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import storyImage from "@/assets/parent-student-story.jpg";
import srideviImage from "@/assets/parent-sridevi.jpg";
import rameshImage from "@/assets/parent-ramesh.jpg";
import lakshmiImage from "@/assets/parent-lakshmi.jpg";

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
    avatar: srideviImage,
  },
  {
    id: "2",
    quote:
      "The teachers are caring, experienced and truly committed to every child's growth.",
    name: "Ramesh Kumar",
    role: "Parent",
    avatar: rameshImage,
  },
  {
    id: "3",
    quote:
      "A perfect blend of academics, activities and values. We are truly happy with our choice!",
    name: "Neha Verma",
    role: "Parent",
    avatar: lakshmiImage,
  },
  {
    id: "4",
    quote:
      "The environment is safe, disciplined, and positive. Ekatva feels like a second home for our child.",
    name: "Suresh Reddy",
    role: "Parent",
    avatar: srideviImage,
  },
  {
    id: "5",
    quote:
      "The foundational learning and interactive smart classroom activities are outstanding!",
    name: "Anitha Rao",
    role: "Parent",
    avatar: lakshmiImage,
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
      className="testimonials-story reveal-section scroll-mt-20"
      data-reveal
    >
      <div className="testimonials-story-shell reveal-list">
        <div className="testimonial-story-image">
          <img src={storyImage} alt="An Ekatva parent with her daughter on campus" loading="lazy" width="1200" height="912" />
        </div>
        <div className="testimonial-story-intro">
          <p className="eyebrow"><span />What Our Parents Say<i /></p>
          <h2>Trusted by Families.<br />Loved by Students.</h2>
          <p>Hear from our parents about their experiences, our values and the positive impact Ekatva EM School has made in their children’s lives.</p>
        </div>
        <div
          className="testimonial-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </Button>

          {/* Right Arrow Button */}
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="testimonial-next"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </Button>

          {/* Embla Viewport */}
          <div className="testimonial-viewport" ref={emblaRef}>
            <div className="testimonial-track">
              {testimonials.map((item) => (
                <div key={item.id} className="testimonial-slide">
                  <article className="testimonial-story-card">
                    <div className="testimonial-avatar">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        loading="lazy"
                        width="816"
                        height="816"
                      />
                    </div>
                    <blockquote>“{item.quote}”</blockquote>
                    <div className="testimonial-author">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" />)}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="testimonial-pagination">
            {testimonials.map((_, idx) => {
              const isActive = selectedIndex % testimonials.length === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={isActive ? "active" : ""}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
