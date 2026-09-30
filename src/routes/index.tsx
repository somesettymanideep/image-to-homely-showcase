import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bus,
  CalendarDays,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Quote,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ekatva-hero.jpg";
import campusImage from "@/assets/ekatva-campus.jpg";
import classroomImage from "@/assets/ekatva-classroom.jpg";
import cultureImage from "@/assets/ekatva-culture.jpg";
import logoAsset from "@/assets/ekatva-logo.webp.asset.json";
import heroAsset from "@/assets/ekatva-students-hero.png.asset.json";

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
  ["Academics", "#academics"],
  ["Campus Life", "#campus-life"],
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
  { title: "Smart Classrooms", detail: "Interactive learning", icon: School, tone: "blue" },
  { title: "Science & Computer Labs", detail: "Discover by doing", icon: Microscope, tone: "red" },
  { title: "Library", detail: "A world of stories", icon: Library, tone: "green" },
  { title: "Sports & Recreation", detail: "Move, play, thrive", icon: Trophy, tone: "blue" },
  { title: "Safe & Secure Campus", detail: "Care at every step", icon: ShieldCheck, tone: "red" },
  { title: "Transport Facility", detail: "Reliable daily routes", icon: Bus, tone: "green" },
  { title: "Cafeteria", detail: "Fresh, balanced meals", icon: Utensils, tone: "blue" },
  { title: "Co-curricular Activities", detail: "Every talent matters", icon: Sparkles, tone: "red" },
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

const testimonials = [
  { quote: "Ekatva provides the perfect balance of academics and values. We are truly grateful.", name: "Rajesh Kumar", initials: "RK" },
  { quote: "The teachers are supportive and caring. My child has grown in confidence and creativity.", name: "Priya Sharma", initials: "PS" },
  { quote: "The environment is safe and positive. Ekatva feels like a second home for our child.", name: "Suresh Reddy", initials: "SR" },
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

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

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

  const currentTestimonial = testimonials[testimonial];
  if (!currentTestimonial) return null;

  return (
    <main className="overflow-x-clip bg-background">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="nav-shell">
          <a href="#home" aria-label="Ekatva EM School home" className="brand-logo">
            <img src={logoAsset.url} alt="Ekatva EM School" width="142" height="58" />
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
        <img src={heroAsset.url} alt="Ekatva students walking through the school campus" className="hero-image" width="1365" height="768" />
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
        <div className="hero-dots" aria-hidden="true"><span className="active" /><span /><span /></div>
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
          <img src={campusImage} alt="Modern Ekatva school campus" loading="lazy" width="1408" height="1008" />
          <div className="image-note"><HeartHandshake />A home for<br />lifelong learners</div>
        </div>
      </section>

      <section className="facilities-band reveal-section reveal-delay-1" data-reveal>
        <div className="section-shell facilities-layout reveal-list">
          <div>
            <SectionTitle eyebrow="Our Facilities" title="Modern Infrastructure for Holistic Growth" copy="Thoughtfully designed spaces create a safe, healthy and inspiring environment for every student." />
            <CtaLink>Explore All Facilities</CtaLink>
          </div>
          <div className="facility-grid reveal-list">
            {facilities.map(({ title, detail, icon: Icon, tone }) => (
              <article className="facility-card" key={title}><span className={`icon-box icon-${tone}`}><Icon /></span><div><h3>{title}</h3><p>{detail}</p></div></article>
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

      <section className="testimonials-section reveal-section" data-reveal>
        <div className="section-shell reveal-list">
          <div className="testimonial-heading"><SectionTitle eyebrow="Parent Stories" title="What Our Parents Say" copy="Trusted by families. Loved by students." /></div>
          <div className="testimonial-row">
            <Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)}><ChevronLeft /></Button>
            <article className="testimonial-card"><Quote /><p>“{currentTestimonial.quote}”</p><div><span>{currentTestimonial.initials}</span><p><strong>{currentTestimonial.name}</strong><small>Parent</small></p></div></article>
            <Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ChevronRight /></Button>
          </div>
          <div className="testimonial-dots">{testimonials.map((item, index) => <Button variant="ghost" key={item.name} className={index === testimonial ? "active" : ""} aria-label={`Show testimonial ${index + 1}`} onClick={() => setTestimonial(index)} />)}</div>
        </div>
      </section>

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
          <div className="footer-brand"><img src={logoAsset.url} alt="Ekatva EM School" width="160" height="65" /><p>The genesis of excellence.<br />Nurturing young minds.</p></div>
          <div><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#academics">Academics</a><a href="#campus-life">Campus Life</a><a href="#admissions">Admissions</a></div>
          <div><h3>Explore</h3><a href="#gallery">Gallery</a><a href="#news">News & Events</a><a href="#about">Facilities</a><a href="#contact">Careers</a><a href="#contact">Contact</a></div>
          <div><h3>Contact Us</h3><p><MapPin />Vijayawada, Andhra Pradesh</p><p><Phone />Admissions Office</p><p><Mail />Write to Ekatva</p></div>
        </div>
        <div className="section-shell footer-bottom reveal-list"><p>© 2026 Ekatva EM School. All Rights Reserved.</p><div><a href="#contact">Privacy Policy</a><a href="#contact">Terms & Conditions</a></div></div>
        <div className="brand-stripe"><span /><span /><span /></div>
      </footer>
    </main>
  );
}