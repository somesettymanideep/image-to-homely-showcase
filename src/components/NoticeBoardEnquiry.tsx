import { useState } from "react";
import { ArrowRight, ChevronRight, Megaphone, ChevronDown, CheckCircle2, Sparkles, User, Phone, Mail, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import studentImg from "@/assets/admission-student.jpg";

interface NoticeItem {
  id: string;
  day: string;
  month: string;
  title: string;
  category?: string;
}

const defaultNotices: NoticeItem[] = [
  { id: "1", day: "22", month: "JUL", title: "Summer Camp Registrations Open!", category: "Events" },
  { id: "2", day: "18", month: "JUL", title: "Parent-Teacher Meeting on 25th July", category: "Academic" },
  { id: "3", day: "15", month: "JUL", title: "Inter-House Sports Competition", category: "Sports" },
  { id: "4", day: "10", month: "JUL", title: "School Reopens After Holidays", category: "Notice" },
  { id: "5", day: "05", month: "JUL", title: "Science Exhibition – Young Innovators", category: "Exhibition" },
];

export function NoticeBoardEnquiry() {
  const [formData, setFormData] = useState({
    parentName: "",
    mobileNumber: "",
    emailAddress: "",
    grade: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.mobileNumber) {
      toast.error("Please fill in your parent name and mobile number.");
      return;
    }
    setSubmitted(true);
    toast.success("Enquiry Submitted Successfully! Our admissions team will get in touch with you shortly.");
  };

  const handleSelectNotice = (notice: NoticeItem) => {
    setActiveNotice(notice.id);
    toast.info(`Notice: "${notice.title}"`);
  };

  return (
    <section id="notice-board" className="py-0 sm:py-2 bg-slate-50/60 scroll-mt-20 reveal-section" data-reveal>
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch reveal-list">
          {/* ================= LEFT SIDE: NOTICE BOARD ================= */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-between transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center text-[#0047bb] shadow-sm shrink-0">
                    <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                      <span className="text-[#0047bb]">Notice </span>
                      <span className="text-[#16a34a]">Board</span>
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium hidden xs:block">
                      Latest announcements & updates
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0047bb] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/80 shrink-0">
                  5 New
                </span>
              </div>

              {/* List of Notices */}
              <div className="space-y-2.5 sm:space-y-3.5">
                {defaultNotices.map((notice) => {
                  const isSelected = activeNotice === notice.id;
                  return (
                    <div
                      key={notice.id}
                      onClick={() => handleSelectNotice(notice)}
                      className={`group bg-white rounded-xl sm:rounded-2xl border p-2.5 sm:p-3.5 flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer active:scale-[0.99] ${
                        isSelected
                          ? "border-[#0047bb] ring-2 ring-blue-100 shadow-md bg-blue-50/20"
                          : "border-slate-200/90 hover:border-blue-400 hover:shadow-md hover:bg-slate-50/50"
                      }`}
                    >
                      {/* Date Badge */}
                      <div className="bg-[#0047bb] text-white rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:py-2 flex flex-col items-center justify-center min-w-[48px] sm:min-w-[52px] h-[48px] sm:h-[52px] shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <span className="font-extrabold text-sm sm:text-base leading-none mb-0.5 sm:mb-1">
                          {notice.day}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider opacity-90 uppercase leading-none">
                          {notice.month}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {notice.category && (
                          <span className="inline-block text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                            {notice.category}
                          </span>
                        )}
                        <p className="font-semibold text-slate-800 text-xs sm:text-sm group-hover:text-[#0047bb] transition-colors line-clamp-2 leading-snug">
                          {notice.title}
                        </p>
                      </div>

                      {/* Action Chevron */}
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0047bb] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* View All Button */}
            <div className="mt-6 sm:mt-8 pt-2">
              <button
                type="button"
                onClick={() => toast.info("Navigating to all school notices")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0047bb] hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-blue-700/20 transition-all hover:gap-3 cursor-pointer"
              >
                <span>View All Notices</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE: ADMISSION ENQUIRY ================= */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0047bb] via-[#0042b3] to-[#003494] rounded-2xl sm:rounded-3xl px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-white relative overflow-hidden shadow-2xl shadow-blue-950/25 flex flex-col justify-between">
            {/* Ambient Lighting FX */}
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center h-full">
              {/* Form & Text Column */}
              <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center">
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full text-[#16a34a] font-black text-[11px] sm:text-xs tracking-wide uppercase mb-2 shadow-sm border border-white">
                    <Sparkles className="w-3.5 h-3.5 fill-[#16a34a] text-[#16a34a]" />
                    <span>Admissions Open 2026-27</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                    Admission Enquiry
                  </h2>
                  <p className="text-blue-100/90 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Take the first step towards your child's bright future. Fill out the form below to connect with us.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-white/20 my-2 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#16a34a]/20 border border-[#cbfb33]/40 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-8 h-8 text-[#cbfb33]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1.5">Enquiry Submitted!</h3>
                    <p className="text-blue-100 text-xs sm:text-sm mb-5 leading-relaxed">
                      Thank you for your interest in Ekatva EM School. Our admissions counselor will contact you shortly on your provided mobile number.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ parentName: "", mobileNumber: "", emailAddress: "", grade: "" });
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#cbfb33] bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-[#cbfb33]/30 transition-all cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                    {/* Parent Name */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="Parent Name *"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                      />
                    </div>

                    {/* Grade Selection */}
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full bg-white text-slate-800 pl-10 pr-10 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Grade
                        </option>
                        <option value="playgroup">Play Group / Nursery</option>
                        <option value="kg">LKG / UKG</option>
                        <option value="primary">Primary (Grade 1 – 5)</option>
                        <option value="middle">Middle School (Grade 6 – 8)</option>
                        <option value="high">High School (Grade 9 – 10)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg shadow-green-950/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Student Cutout Photo Column (Visible on Tablet & Desktop) */}
              <div className="md:col-span-5 lg:col-span-5 flex items-end justify-center relative mt-4 md:mt-0 pt-2 md:pt-0">
                <div className="relative w-full max-w-[260px] md:max-w-[280px] lg:max-w-[320px] mx-auto flex items-end justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#003494] via-blue-900/40 to-transparent rounded-b-3xl opacity-50 pointer-events-none" />
                  <img
                    src={studentImg}
                    alt="Ekatva EM School Student"
                    loading="lazy"
                    className="relative z-10 w-full max-h-[260px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[380px] object-cover object-top rounded-2xl shadow-2xl border-2 border-white/20 transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
