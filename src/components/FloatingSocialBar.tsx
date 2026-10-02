import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: typeof Instagram;
  brandBg: string;
  brandText: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    brandBg: "bg-gradient-to-tr from-[#fa7e1e] via-[#d62976] to-[#962fbf]",
    brandText: "text-[#d62976]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
    brandBg: "bg-[#FF0000]",
    brandText: "text-[#FF0000]",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    brandBg: "bg-[#1877F2]",
    brandText: "text-[#1877F2]",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    brandBg: "bg-[#0A66C2]",
    brandText: "text-[#0A66C2]",
  },
];

export function FloatingSocialBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar only after scrolling past the hero section (~350px)
      const heroThreshold = 350;
      setIsVisible(window.scrollY > heroThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Social Media Links"
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-2.5 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 pointer-events-auto translate-x-0"
          : "opacity-0 pointer-events-none -translate-x-full"
      }`}
    >
      {socialLinks.map(({ name, href, icon: Icon, brandBg, brandText }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group inline-flex items-center bg-white/95 backdrop-blur-sm border border-l-0 border-slate-200/90 rounded-r-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-fit"
        >
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 text-white shadow-xs ${brandBg}`}
          >
            <Icon className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span
            className={`max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100 group-hover:px-3.5 whitespace-nowrap text-xs sm:text-sm font-extrabold ${brandText} transition-all duration-300 ease-out select-none pointer-events-none`}
          >
            {name}
          </span>
        </a>
      ))}
    </aside>
  );
}
