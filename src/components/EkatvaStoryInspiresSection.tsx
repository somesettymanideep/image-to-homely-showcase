import {
  GraduationCap,
  HeartHandshake,
  Laptop,
  Library,
  Sparkles,
  Star,
  Trophy,
  Users,
  Building,
} from "lucide-react";
import aboutCampusImage from "@/assets/ekatva-about-campus.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import cultureImage from "@/assets/ekatva-culture.jpg";
import studentImg from "@/assets/admission-student.jpg";
import heroImage from "@/assets/ekatva-hero.jpg";

interface HubFeature {
  id: string;
  title: string;
  icon: typeof Library;
  badgeBg: string;
  image: string;
  positionClass: string;
}

const hubFeatures: HubFeature[] = [
  {
    id: "library",
    title: "Our Library",
    icon: Library,
    badgeBg: "bg-[#0047bb]",
    image: cultureImage,
    positionClass: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    id: "robotics",
    title: "AI-Robotics Class",
    icon: Sparkles,
    badgeBg: "bg-[#e11d48]",
    image: classroomImage,
    positionClass: "top-12 right-2 sm:right-4 md:right-6",
  },
  {
    id: "building",
    title: "School Building",
    icon: Building,
    badgeBg: "bg-[#0047bb]",
    image: aboutCampusImage,
    positionClass: "top-1/2 right-0 sm:right-2 -translate-y-1/2",
  },
  {
    id: "smartclass",
    title: "Smart Classrooms",
    icon: Laptop,
    badgeBg: "bg-[#16a34a]",
    image: classroomImage,
    positionClass: "bottom-12 right-2 sm:right-4 md:right-6",
  },
  {
    id: "computer",
    title: "Computer Lab",
    icon: Laptop,
    badgeBg: "bg-[#0284c7]",
    image: campusImage,
    positionClass: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    id: "activity",
    title: "Activity Classes",
    icon: Trophy,
    badgeBg: "bg-[#e11d48]",
    image: studentImg,
    positionClass: "bottom-12 left-2 sm:left-4 md:left-6",
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    icon: Users,
    badgeBg: "bg-[#16a34a]",
    image: heroImage,
    positionClass: "top-12 left-2 sm:left-4 md:left-6",
  },
];

const pillars = [
  {
    title: "Holistic Education",
    subtitle: "Mind • Body • Character",
    icon: GraduationCap,
    color: "bg-[#0284c7]",
  },
  {
    title: "Experienced Leadership",
    subtitle: "Guidance for a brighter future",
    icon: Users,
    color: "bg-[#16a34a]",
  },
  {
    title: "Modern Infrastructure",
    subtitle: "Smart Classrooms, labs & more",
    icon: Star,
    color: "bg-[#e11d48]",
  },
  {
    title: "Values & Unity",
    subtitle: "Growing together as one",
    icon: HeartHandshake,
    color: "bg-[#0284c7]",
  },
];

export function EkatvaStoryInspiresSection() {
  return (
    <section
      id="ekatva-inspires"
      className="py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#00263f] relative overflow-hidden reveal-section scroll-mt-20 text-white"
      data-reveal
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center reveal-list" data-reveal>
          {/* ================= LEFT COLUMN: STORY CONTENT & PILLARS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center reveal-list" data-reveal>
            {/* Main Heading */}
            <h2 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-black text-white tracking-tight leading-tight mb-4">
              Ekatva EM School,<br />
              Where Learning <span className="text-[#4ade80]">Truly Inspires</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-200 font-medium text-xs sm:text-sm md:text-base leading-relaxed mb-3">
              Ekatva, meaning &ldquo;unity&rdquo;, was born from a vision to go beyond traditional education and nurture well-rounded individuals prepared for life. Our journey began with the question: What if education could inspire children to thrive emotionally, socially, and intellectually?
            </p>

            {/* Paragraph 2 */}
            <p className="text-blue-100/90 font-normal text-xs sm:text-sm leading-relaxed mb-6">
              Under the leadership of Chairman Amaraneni Ramesh garu, a household name for quality through the Chaitanya Group of Institutions, and Directors Amaraneni Manoj and Sindhura, who returned from the US to bring this dream to life, Ekatva stands as a beacon of holistic learning.
            </p>

            {/* 4 Pillars Card Container */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl p-4 sm:p-5 mb-6 text-slate-900">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 reveal-list" data-reveal>
                {pillars.map(({ title, subtitle, icon: Icon, color }, idx) => (
                  <div
                    key={title}
                    className={`flex flex-col items-center text-center p-2 ${
                      idx !== 0 ? "pt-3 md:pt-2 md:pl-2" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center mb-2 shadow-sm`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight mb-1">
                      {title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE RADIAL HUB ================= */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[480px] sm:min-h-[540px] md:min-h-[600px] my-4 px-4 sm:px-8 md:px-12 py-6">
            {/* Center Main Circular Campus Photo */}
            <div className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-white shadow-2xl shadow-black/40">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-200 bg-white">
                <img
                  src={aboutCampusImage}
                  alt="Ekatva EM School Campus Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* SVG Connecting Dotted Radial Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
              viewBox="0 0 600 600"
            >
              <line x1="300" y1="300" x2="300" y2="70" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="490" y2="130" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="520" y2="300" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="470" y2="470" stroke="#4ade80" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="300" y2="530" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="130" y2="470" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="300" y1="300" x2="110" y2="130" stroke="#4ade80" strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>

            {/* 7 Surrounding Satellite Circular Nodes */}
            {hubFeatures.map((node) => {
              const IconComp = node.icon;
              return (
                <div
                  key={node.id}
                  className={`absolute z-30 flex flex-col items-center group cursor-pointer ${node.positionClass}`}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1.5 bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-200 bg-white">
                      <img
                        src={node.image}
                        alt={node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Colored Badge Tagline */}
                  <div
                    className={`-mt-3 z-40 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white font-extrabold text-[10px] sm:text-xs shadow-md border-2 border-white ${node.badgeBg} group-hover:scale-105 transition-transform`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{node.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
