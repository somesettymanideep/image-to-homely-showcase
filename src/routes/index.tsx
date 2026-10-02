import { createFileRoute } from "@tanstack/react-router";
import { NoticeBoardEnquiry } from "@/components/NoticeBoardEnquiry";
import { EventsCelebrationsCarousel } from "@/components/EventsCelebrationsCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TeachersAchievementSection } from "@/components/TeachersAchievementSection";
import { EkatvaAchieversSection } from "@/components/EkatvaAchieversSection";
import {
  ArrowRight,
  BookOpen,
  Bus,
  CalendarDays,
  Camera,
  Check,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ekatva-hero.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import aboutCampusImage from "@/assets/ekatva-about-campus.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import cultureImage from "@/assets/ekatva-culture.jpg";
import logoUrl from "@/assets/ekatva-logo.webp";
import heroUrl from "@/assets/ekatva-students-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ekatva EM School | Learn, Grow, Achieve" },
      {
        name: "description",
        content:
          "Discover Ekatva EM School in Vijayawada—holistic English-medium education, modern facilities and values-led learning.",
      },
      { property: "og:title", content: "Ekatva EM School | Learn, Grow, Achieve" },
      {
        property: "og:description",
        content: "A joyful, values-led learning community where every child can thrive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Leadership", "#leadership"],
  ["Campus Life", "#campus-life"],
  ["Events & Celebrations", "#events"],
  ["Admissions", "#admissions"],
  ["Gallery", "#gallery"],
  ["News & Events", "#news"],
  ["Contact", "#contact"],
] as const;

const stats = [
  { value: "800+", label: "Happy Students", icon: Users },
  { value: "45+", label: "Experienced Faculty", icon: GraduationCap },
  { value: "16:1", label: "Student–Teacher Ratio", icon: BookOpen },
  { value: "12", label: "Years of Excellence", icon: Trophy },
  { value: "10+", label: "Co-curricular Activities", icon: Sparkles },
  { value: "6.5+", label: "Years of Trust", icon: ShieldCheck },
];

const facilities = [
  { title: "Smart Classrooms", detail: "Interactive learning with modern technology.", icon: School, tone: "blue", image: classroomImage, position: "object-[45%_center]" },
  { title: "Science & Computer Labs", detail: "Hands-on learning for a brighter future.", icon: Microscope, tone: "green", image: classroomImage, position: "object-[80%_center]" },
  { title: "Library", detail: "A world of knowledge at your fingertips.", icon: Library, tone: "red", image: cultureImage, position: "object-[30%_center]" },
  { title: "Sports & Recreation", detail: "Building healthier, stronger students.", icon: Trophy, tone: "violet", image: campusImage, position: "object-[65%_center]" },
  { title: "Safe & Secure Campus", detail: "A protected environment for worry-free learning.", icon: ShieldCheck, tone: "cyan", image: campusImage, position: "object-[22%_center]" },
  { title: "Transport Facility", detail: "Safe and reliable school transportation.", icon: Bus, tone: "orange", image: campusImage, position: "object-[82%_center]" },
  { title: "Cafeteria", detail: "Nutritious meals for healthy minds and bodies.", icon: Utensils, tone: "pink", image: cultureImage, position: "object-[62%_center]" },
  { title: "Co-Curricular Activities", detail: "Explore talents, build skills, discover passions.", icon: Sparkles, tone: "navy", image: cultureImage, position: "object-[82%_center]" },
];

const benefits = [
  "Experienced & Dedicated Faculty",
  "Modern Learning Infrastructure",
  "Focus on Academic Excellence",
  "Holistic Development Programs",
  "Safe and Supportive Environment",
  "Strong Parent-School Partnership",
];

const academics = [
  { name: "Pre Primary", grades: "Play Group – UKG", image: cultureImage, position: "object-[40%_35%]" },
  { name: "Primary", grades: "Grades 1 – 5", image: classroomImage, position: "object-center" },
  { name: "Middle School", grades: "Grades 6 – 8", image: heroImage, position: "object-[68%_center]" },
  { name: "High School", grades: "Grades 9 – 10", image: campusImage, position: "object-[25%_center]" },
];

const news = [
  { day: "28", month: "AUG", title: "Annual Sports Day 2026", category: "Campus Life", image: campusImage },
  { day: "15", month: "AUG", title: "Teacher Training Program", category: "Learning", image: classroomImage },
  { day: "10", month: "AUG", title: "Cultural Fest", category: "Celebrations", image: cultureImage },
];

const announcements = [
  "Admissions Open · 2026–27",
  "Annual Sports Day · Aug 28",
  "Teacher Training Program · Aug 15",
  "Cultural Fest · Aug 10",
  "Smart Classrooms & Safe Transport",
];

function SectionTitle({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={light ? "text-primary-foreground" : "text-foreground"}>
      <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className={`section-copy ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{copy}</p> : null}
    </div>
  );
}

function CtaLink({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <Button asChild size="lg" className={inverse ? "cta-button cta-inverse" : "cta-button"}>
      <a href="#admissions">{children}<ArrowRight /></a>
    </Button>
  );
}

const heroImages = [
  { src: heroUrl, alt: "Ekatva students walking through the school campus" },
  { src: aboutCampusImage, alt: "Ekatva EM School campus aerial view" },
  { src: campusImage, alt: "Modern Ekatva school campus" },
  { src: classroomImage, alt: "Interactive classroom learning at Ekatva" },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceHeroSlide = useCallback(() => {
    setHeroSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    heroTimerRef.current = setInterval(advanceHeroSlide, 5000);
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, [advanceHeroSlide]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-clip bg-background">
      <div className="top-marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              {announcements.map((item) => <span className="marquee-item" key={item}><Sparkles />{item}</span>)}
            </div>
          ))}
        </div>
      </div>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="nav-shell">
          <a href="#home" aria-label="Ekatva EM School home" className="brand-logo">
            <img src={logoUrl} alt="Ekatva EM School" width="142" height="58" />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <Button asChild className="nav-apply"><a href="#admissions">Apply Now <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight /></a>)}
            <Button asChild className="cta-button"><a href="#admissions" onClick={() => setMenuOpen(false)}>Apply Now <ArrowRight /></a></Button>
          </nav>
        ) : null}
      </header>

      <section id="home" className="hero-section reveal-section" data-reveal>
        {heroImages.map((img, i) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={`hero-image hero-slide ${i === heroSlide ? "hero-slide-active" : ""}`}
            width="1365"
            height="768"
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-content reveal-list">
          <p className="hero-eyebrow"><span /> LEARN <i /> GROW <i /> ACHIEVE</p>
          <h1>The Genesis of<br /><strong>Ekatva EM School</strong></h1>
          <p className="hero-copy">Nurturing young minds with values, knowledge and confidence for a brighter future.</p>
          <div className="hero-actions">
            <CtaLink>Explore Our School</CtaLink>
            <a className="text-link" href="#campus-life">Discover Campus <ArrowRight /></a>
          </div>
        </div>
        <p className="hero-note">Small steps<br />create big dreams!<span /></p>
        <div className="hero-dots" aria-hidden="true">
          {heroImages.map((_, i) => (
            <span
              key={i}
              className={i === heroSlide ? "active" : ""}
              onClick={() => {
                setHeroSlide(i);
                if (heroTimerRef.current) clearInterval(heroTimerRef.current);
                heroTimerRef.current = setInterval(advanceHeroSlide, 5000);
              }}
            />
          ))}
        </div>
      </section>

      <section className="stats-wrap reveal-section reveal-delay-1" data-reveal aria-label="School achievements">
        <div className="stats-bar reveal-list">
          {stats.map(({ value, label, icon: Icon }) => (
            <article className="stat" key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell about-section reveal-section reveal-list" data-reveal>
        <div className="about-copy">
          <SectionTitle eyebrow="About Ekatva EM School" title="Building Bright Futures with the Right Values" />
          <p className="section-copy text-muted-foreground">Ekatva is a place where learning goes beyond books. Our student-centred approach nurtures curiosity, confidence and character through academic excellence, modern infrastructure and a dedicated faculty.</p>
          <CtaLink>Know More About Us</CtaLink>
        </div>
        <div className="editorial-image">
          <div className="organic-shape" />
          <img src={aboutCampusImage} alt="Modern Ekatva EM School campus view with sports ground and swimming pool" loading="lazy" width="1408" height="1008" />
          <div className="image-note"><HeartHandshake />A home for<br />lifelong learners</div>
        </div>
      </section>

      <NoticeBoardEnquiry />

      <section id="facilities" className="facilities-band reveal-section reveal-delay-1" data-reveal>
        <div className="section-shell facilities-layout reveal-list">
          <div className="facilities-intro">
            <SectionTitle eyebrow="Our Facilities" title="World-Class Facilities for Holistic Growth" copy="We provide modern infrastructure and a safe, conducive environment to support every child's academic, physical, emotional and creative growth." />
            <CtaLink>Explore All Facilities</CtaLink>
            <p className="facilities-note"><span>Learn</span><i /> <span>Play</span><i /> <span>Grow</span></p>
          </div>
          <div className="facility-grid reveal-list">
            {facilities.map(({ title, detail, icon: Icon, tone, image, position }) => (
              <article className="facility-card" key={title}>
                <div className="facility-card-copy">
                  <span className={`icon-box icon-${tone}`}><Icon /></span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <ArrowRight className="facility-arrow" aria-hidden="true" />
                </div>
                <img src={image} alt={`${title} at Ekatva EM School`} loading="lazy" width="360" height="300" className={position} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell why-layout reveal-section reveal-list" data-reveal>
        <div>
          <SectionTitle eyebrow="Why Choose Us" title="Why Choose Ekatva EM School?" />
          <ul className="benefits reveal-list">{benefits.map((item) => <li key={item}><span><Check /></span>{item}</li>)}</ul>
          <p className="hand-note">More than just a school,<br />we are a family!</p>
        </div>
        <div className="why-visual">
          <img src={classroomImage} alt="Student enjoying a classroom lesson" loading="lazy" width="1408" height="1008" />
          <div className="values-card reveal-list">
            <p><BookOpen />Learn <span>with Joy</span></p>
            <p><Sparkles />Grow <span>with Values</span></p>
            <p><Users />Succeed <span>Together</span></p>
          </div>
        </div>
      </section>

      <section id="academics" className="academics-band reveal-section reveal-delay-1" data-reveal>
        <div className="section-shell academics-layout reveal-list">
          <div className="academics-intro">
            <SectionTitle light eyebrow="Our Academics" title="Learning for Every Stage" copy="From foundational years to higher grades, our programs build strong concepts and future-ready skills." />
            <CtaLink inverse>Explore Academics</CtaLink>
          </div>
          <div className="academic-grid reveal-list">
            {academics.map((item) => (
              <article className="academic-card" key={item.name}>
                <img src={item.image} alt={`${item.name} students at Ekatva`} loading="lazy" className={item.position} width="600" height="520" />
                <div><span>{item.grades}</span><h3>{item.name}</h3><Button variant="ghost" size="icon" aria-label={`Learn about ${item.name}`}><ArrowRight /></Button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campus-life" className="section-shell gallery-section reveal-section" data-reveal>
        <div className="gallery-intro reveal-list">
          <SectionTitle eyebrow="Campus Life" title="Moments That Inspire" copy="From cultural celebrations to sports events, every moment builds confidence, creativity and lasting memories." />
          <CtaLink>View Gallery</CtaLink>
        </div>
        <div id="gallery" className="masonry-gallery reveal-list">
          <figure className="gallery-feature"><img src={cultureImage} alt="Students performing at the cultural festival" loading="lazy" width="1600" height="1200" /><figcaption>Cultural Celebrations <ArrowRight /></figcaption></figure>
          <figure><img src={campusImage} alt="Students enjoying campus life" loading="lazy" width="1408" height="1008" /><figcaption>Campus Life <ArrowRight /></figcaption></figure>
          <figure><img src={classroomImage} alt="Creative classroom learning" loading="lazy" width="1408" height="1008" /><figcaption>Classroom Joy <ArrowRight /></figcaption></figure>
          <aside className="gallery-stats"><Camera /><strong>100+</strong><span>Events Each Year</span><hr /><strong>5000+</strong><span>Happy Moments</span></aside>
        </div>
      </section>

      <EventsCelebrationsCarousel />

      <EkatvaAchieversSection />

      <TeachersAchievementSection />

      <LeadershipSection />

      <section id="news" className="news-band reveal-section reveal-delay-1" data-reveal>
        <div className="section-shell news-layout reveal-list">
          <div><SectionTitle eyebrow="Latest News & Events" title="Stay Updated with Our School Activities" /><CtaLink>View All News</CtaLink></div>
          <div className="news-grid reveal-list">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-image"><img src={item.image} alt="" loading="lazy" width="500" height="320" /><span><strong>{item.day}</strong>{item.month}</span></div>
                <div className="news-body"><p>{item.category}</p><h3>{item.title}</h3><a href="#contact">Read story <ArrowRight /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section id="admissions" className="admissions-banner reveal-section reveal-delay-1" data-reveal>
        <img src={heroImage} alt="" loading="lazy" width="1920" height="1088" />
        <div className="admissions-overlay" />
        <div className="section-shell admissions-content reveal-list">
          <div><p className="eyebrow eyebrow-light"><span />Admissions Open · 2026–27</p><h2>Give Your Child the Best<br />Learning Experience</h2><p>Join Ekatva EM School and open the door to a brighter future.</p></div>
          <CtaLink inverse>Apply Now</CtaLink>
        </div>
      </section>

      <footer id="contact" className="site-footer reveal-section" data-reveal>
        <div className="section-shell footer-grid reveal-list">
          <div className="footer-brand"><img src={logoUrl} alt="Ekatva EM School" width="160" height="65" /><p>The genesis of excellence.<br />Nurturing young minds.</p></div>
          <div><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#academics">Academics</a><a href="#campus-life">Campus Life</a><a href="#admissions">Admissions</a></div>
          <div><h3>Explore</h3><a href="#gallery">Gallery</a><a href="#news">News & Events</a><a href="#about">Facilities</a><a href="#contact">Careers</a><a href="#contact">Contact</a></div>
          <div><h3>Contact Us</h3><p><MapPin />Kanchikacharla, NTR Dist, Andhra Pradesh, 521180</p><p><Phone /><a href="tel:+919908818550">+91 9908818550</a></p><p><Mail /><a href="mailto:info@ekatvaedu.in">info@ekatvaedu.in</a></p></div>
        </div>
        <div className="section-shell footer-bottom reveal-list"><p>© 2026 Ekatva EM School. All Rights Reserved.</p><div><a href="#contact">Privacy Policy</a><a href="#contact">Terms & Conditions</a></div></div>
        <div className="brand-stripe"><span /><span /><span /></div>
      </footer>
    </main>
  );
}