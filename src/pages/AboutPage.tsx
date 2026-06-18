import { Globe2, Layers3, LockKeyhole, Rocket } from "lucide-react";
import { SEO } from "../components/SEO";
import { SectionHeader } from "../components/SectionHeader";
import type { LucideIcon } from "lucide-react";

const principles: Array<[string, string, LucideIcon]> = [
  ["Structured", "Clear paths, visible milestones, and practical outcomes replace random tutorial hopping.", Layers3],
  ["Local first", "Progress is stored in local storage today, with clean boundaries for future backend sync.", LockKeyhole],
  ["Career aware", "Each roadmap maps topics to roles, readiness signals, and portfolio-ready capabilities.", Rocket],
  ["Africa centered", "Built for learners who need focused guidance, strong fundamentals, and global readiness.", Globe2],
];

export function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO title="About" description="Learn about SkillMap Africa's mission to help students and developers follow structured technology career roadmaps." />
      <SectionHeader eyebrow="About" title="A focused roadmap platform for serious learners" description="SkillMap Africa is designed as a production-ready frontend foundation for a learning platform that can grow into accounts, API-backed content, cohorts, and mentor workflows." />
      <div className="grid gap-5 md:grid-cols-2">
        {principles.map(([title, description, Icon]) => (
          <article key={title as string} className="rounded-3xl border border-slate-200/70 bg-white/75 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
            <Icon className="h-8 w-8 text-teal-500" />
            <h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-slate-200/70 bg-slate-950 p-8 text-white shadow-glow dark:border-white/10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Future ready</p>
        <h2 className="mt-3 text-3xl font-black">Prepared for authentication, APIs, analytics, and cohorts</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          The current app uses reusable data modules and local-storage hooks so a backend can later replace mock data without rewriting the interface. Authentication, cloud sync, and cohort dashboards can plug into the same roadmap and progress contracts.
        </p>
      </div>
    </section>
  );
}
