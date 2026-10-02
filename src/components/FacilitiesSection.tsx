import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  Dumbbell,
  FlaskConical,
  Home,
  Laptop,
  Palette,
  Sparkles,
  Trophy,
  Utensils,
} from "lucide-react";
import { toast } from "sonner";
import aboutCampusImage from "@/assets/ekatva-about-campus.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import cultureImage from "@/assets/ekatva-culture.jpg";
import studentImg from "@/assets/admission-student.jpg";
import heroImage from "@/assets/ekatva-hero.jpg";

interface Facility {
  id: string;
  title: string;
  icon: typeof Laptop;
  iconBg: string;
  image: string;
}

const facilityList: Facility[] = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    icon: Laptop,
    iconBg: "bg-[#f97316]",
    image: classroomImage,
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    icon: Laptop,
    iconBg: "bg-[#0284c7]",
    image: campusImage,
  },
  {
    id: "science-labs",
    title: "Science Labs",
    icon: FlaskConical,
    iconBg: "bg-[#7c3aed]",
    image: cultureImage,
  },
  {
    id: "library",
    title: "Library",
    icon: BookOpen,
    iconBg: "bg-[#e11d48]",
    image: heroImage,
  },
  {
    id: "sports-ground",
    title: "Sports Ground",
    icon: Dumbbell,
    iconBg: "bg-[#16a34a]",
    image: aboutCampusImage,
  },
  {
    id: "activity-rooms",
    title: "Activity Rooms",
    icon: Palette,
    iconBg: "bg-[#e11d48]",
    image: studentImg,
  },
  {
    id: "hostel",
    title: "Hostel (Boys & Girls)",
    icon: Home,
    iconBg: "bg-[#0047bb]",
    image: aboutCampusImage,
  },
  {
    id: "cafeteria",
    title: "Cafeteria",
    icon: Utensils,
    iconBg: "bg-[#ea580c]",
    image: cultureImage,
  },
];

export function FacilitiesSection() {
  const handleFacilityClick = (title: string) => {
    toast.info(`Facility: ${title}`);
  };

  return (
    <section
      id="facilities"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-r from-[#eef7ff] via-[#f4f9ff] to-[#eef7ff] relative overflow-hidden reveal-section scroll-mt-20"
      data-reveal
    >
      {/* Background Subtle Accent */}
      <div className="absolute left-0 bottom-0 w-72 h-36 pointer-events-none opacity-40">
        <svg viewBox="0 0 300 150" fill="none" className="w-full h-full">
          <path
            d="M 0 150 C 100 80, 200 120, 300 150 Z"
            fill="#38bdf8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN: INTRO & CTA ================= */}
          <div className="lg:col-span-4 flex flex-col justify-center reveal-list">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#16a34a] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#16a34a]">
                WORLD-CLASS FACILITIES
              </span>
              <span className="w-8 h-1 bg-[#e11d48] rounded-full" />
            </div>

            <h2 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-black text-[#003494] tracking-tight leading-tight mb-3">
              Facilities for Holistic Growth
            </h2>

            <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Modern infrastructure, innovative learning spaces and a safe environment for every child&apos;s development.
            </p>

            <div>
              <button
                type="button"
                onClick={() => toast.info("Exploring all school facilities...")}
                className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore All Facilities</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 8 FACILITIES CARDS GRID ================= */}
          <div className="lg:col-span-8 reveal-list">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              {facilityList.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={facility.id}
                    onClick={() => handleFacilityClick(facility.title)}
                    className="bg-white rounded-[7px] border border-slate-200/90 shadow-md overflow-hidden group hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Top Image */}
                    <div className="relative aspect-[4/2.6] overflow-hidden bg-slate-100">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Bottom Title Bar with Icon Badge */}
                    <div className="p-2.5 sm:p-3 bg-white flex items-center gap-2 shrink-0 border-t border-slate-100">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${facility.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-[11px] sm:text-xs leading-tight truncate">
                        {facility.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
