import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
import { useProgress } from "../hooks/useProgress";
import { RoadmapCard } from "../components/RoadmapCard";
import { SectionHeader } from "../components/SectionHeader";
import { Footer } from "../components/Footer";
import { DashboardPanel } from "../components/DashboardPanel";
import { SEO } from "../components/SEO";

const stats = [
  ["4", "Roadmaps"],
  ["45+", "Learning Topics"],
  ["20+", "Resources"],
  ["12", "Career Paths"],
];

const testimonials = [
  ["Amina K.", "Frontend learner", "SkillMap Africa helped me stop jumping between tutorials and build a clear weekly plan."],
  ["David M.", "Backend developer", "The roadmap nodes made it easy to track fundamentals, APIs, databases, and deployment in one place."],
  ["Nia O.", "Cybersecurity student", "I like that the platform connects security theory with practical labs and readiness milestones."],
];

const faqs = [
  ["Is SkillMap Africa free?", "Yes. This version is frontend-only and stores your learning progress locally in your browser."],
  ["Can I follow more than one roadmap?", "Yes. You can make progress across all roadmaps and the dashboard combines your progress."],
  ["Will progress sync across devices?", "Not yet. The architecture is prepared for future authentication and backend integration."],
];

export function LandingPage() {
  const { getPercentage } = useProgress();

  return (
    <>
      <SEO title="Master Technology Skills" description="Follow structured learning roadmaps for frontend, backend, cybersecurity, and data science careers." />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-bold text-teal-700 dark:text-teal-200">
              <Sparkles className="h-4 w-4" /> Built for Africa's next technology leaders
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Master Technology Skills with Structured Learning Roadmaps
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              SkillMap Africa turns overwhelming tech career advice into guided, measurable learning paths with progress tracking, curated resources, achievements, and career readiness signals.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/roadmaps/frontend" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white shadow-xl transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
                <Play className="h-5 w-5" /> Start Learning
              </Link>
              <Link to="/roadmaps" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-bold text-slate-800 backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white">
                Explore Roadmaps <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-3xl font-black text-slate-950 dark:text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <DashboardPanel />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Featured roadmaps" title="Choose a career path and start moving" description="Each path combines foundations, practical skills, resources, milestones, and a completion reward loop." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roadmaps.map((roadmap) => <RoadmapCard key={roadmap.id} roadmap={roadmap} progress={getPercentage(roadmap.id)} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Proof" title="Designed for focused learners" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([name, role, quote]) => (
            <motion.article whileHover={{ y: -4 }} key={name} className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-slate-700 dark:text-slate-200">"{quote}"</p>
              <p className="mt-5 font-bold text-slate-950 dark:text-white">{name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="FAQ" title="Questions before you start" />
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                <summary className="cursor-pointer font-bold text-slate-950 dark:text-white">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="self-start rounded-3xl border border-slate-200/70 bg-white/75 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <CheckCircle2 className="h-10 w-10 text-teal-500" />
          <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white">Get weekly learning signals</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A clean subscription UI ready for future backend integration.</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="you@example.com" className="min-h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 outline-none focus:border-teal-400 dark:border-white/10 dark:bg-slate-950" />
            <button className="rounded-full bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">Subscribe</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
