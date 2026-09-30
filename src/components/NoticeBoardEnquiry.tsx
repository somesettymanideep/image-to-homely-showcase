import { useState } from "react";
import { ArrowRight, ChevronRight, Megaphone, ChevronDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import studentImg from "@/assets/admission-student.jpg";

interface NoticeItem {
  id: string;
  day: string;
  month: string;
  title: string;
}

const defaultNotices: NoticeItem[] = [
  { id: "1", day: "22", month: "JUL", title: "Summer Camp Registrations Open!" },
  { id: "2", day: "18", month: "JUL", title: "Parent-Teacher Meeting on 25th July" },
  { id: "3", day: "15", month: "JUL", title: "Inter-House Sports Competition" },
  { id: "4", day: "10", month: "JUL", title: "School Reopens After Holidays" },
  { id: "5", day: "05", month: "JUL", title: "Science Exhibition – Young Innovators" },
];

export function NoticeBoardEnquiry() {
  const [formData, setFormData] = useState({
    parentName: "",
    mobileNumber: "",
    emailAddress: "",
    grade: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.mobileNumber) {
      toast.error("Please fill in your name and mobile number.");
      return;
    }
    setSubmitted(true);
    toast.success("Enquiry Submitted! We will contact you soon.");
  };

  const handleSelectNotice = (title: string) => {
    toast.info(`Notice: ${title}`);
  };

  return (
    <section id="notice-board" className="py-12 sm:py-16 md:py-20 bg-slate-50/50">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Notice Board */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
            <div>
              {/* Notice Board Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                  <Megaphone className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  <span className="text-[#0047bb]">Notice </span>
                  <span className="text-[#16a34a]">Board</span>
                </h2>
              </div>

              {/* Notice Items List */}
              <div className="space-y-3.5">
                {defaultNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => handleSelectNotice(notice.title)}
                    className="group bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-3.5 flex items-center justify-between gap-3 sm:gap-4 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="bg-[#0047bb] text-white rounded-xl px-3 py-2 flex flex-col items-center justify-center min-w-[52px] h-[52px] shrink-0 shadow-sm">
                      <span className="font-extrabold text-base leading-none mb-1">
                        {notice.day}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase leading-none">
                        {notice.month}
                      </span>
                    </div>
                    <p className="font-semibold text-slate-800 text-xs sm:text-sm group-hover:text-[#0047bb] transition-colors line-clamp-2 leading-snug flex-1">
                      {notice.title}
                    </p>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-[#0047bb] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-2">
              <button
                type="button"
                onClick={() => toast.info("Viewing all notices")}
                className="inline-flex items-center gap-2 bg-[#0047bb] hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md shadow-blue-700/20 transition-all hover:gap-3 cursor-pointer"
              >
                <span>View All Notices</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Admission Enquiry */}
          <div className="lg:col-span-7 bg-[#0047bb] rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/30 flex flex-col justify-between">
            {/* Background Decorative Accents */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Form Side */}
              <div className="md:col-span-7 lg:col-span-7 flex flex-col">
                <div className="mb-5">
                  <p className="text-[#cbfb33] font-bold text-xs sm:text-sm tracking-wide uppercase mb-1">
                    Admissions Open 2026-27
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Admission Enquiry
                  </h2>
                  <p className="text-blue-100/90 text-xs sm:text-sm mt-2 leading-relaxed">
                    Take the first step towards your child's bright future.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 my-4">
                    <CheckCircle2 className="w-12 h-12 text-[#cbfb33] mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Your enquiry has been received. Our counselor will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#cbfb33] underline font-semibold cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Parent Name"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, mobileNumber: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, emailAddress: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm transition-all"
                      />
                    </div>

                    <div className="relative">
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full bg-white text-slate-800 px-4 py-3 rounded-xl border-0 outline-none focus:ring-2 focus:ring-[#cbfb33] font-medium text-xs sm:text-sm shadow-sm appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled>
                          Select Grade
                        </option>
                        <option value="playgroup">Play Group / Nursery</option>
                        <option value="kg">LKG / UKG</option>
                        <option value="primary">Primary (Grade 1 - 5)</option>
                        <option value="middle">Middle School (Grade 6 - 8)</option>
                        <option value="high">High School (Grade 9 - 10)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-green-950/20 transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Student Image Side */}
              <div className="md:col-span-5 lg:col-span-5 hidden md:flex items-end justify-center relative min-h-[340px]">
                <div className="relative w-full h-full max-w-[280px] flex items-end justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003da5] via-transparent to-transparent rounded-full opacity-30 blur-xl" />
                  <img
                    src={studentImg}
                    alt="Ekatva School Student"
                    className="relative z-10 w-full h-[360px] object-cover object-top rounded-2xl shadow-2xl border-2 border-white/20 transform hover:scale-[1.02] transition-transform duration-300"
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
