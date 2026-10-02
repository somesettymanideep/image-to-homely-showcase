import { BookOpen, GraduationCap, User } from "lucide-react";
import leaderRameshbabu from "@/assets/leader-rameshbabu.jpg";
import leaderManoj from "@/assets/leader-manoj.jpg";
import leaderSindhura from "@/assets/leader-sindhura.jpg";
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
    image: leaderRameshbabu,
    accentColor: "blue",
    icon: User,
  },
  {
    id: "2",
    name: "Amaraneni Manoj",
    role: "DIRECTOR",
    description:
      "Guided by a strong vision for quality education, he drives innovation, excellence and growth at Ekatva EM School.",
    image: leaderManoj,
    accentColor: "green",
    icon: GraduationCap,
  },
  {
    id: "3",
    name: "Sindhura Amaraneni",
    role: "ACADEMIC DIRECTOR",
    description:
      "With a passion for nurturing young minds, she ensures academic excellence and holistic development for every student.",
    image: leaderSindhura,
    accentColor: "red",
    icon: BookOpen,
  },
];

export function LeadershipSection() {
  const handleLeaderClick = (name: string, role: string) => {
    toast.info(`Message from ${name} (${role})`);
  };

  return (
    <section
      id="leadership"
      className="py-14 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#D4EEFD] relative overflow-hidden reveal-section scroll-mt-20"
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
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 reveal-list">
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

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6">
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
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
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

                          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-2">
                            {leader.description}
                          </p>
                        </div>
                      </div>
                    </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
