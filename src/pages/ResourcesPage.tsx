import { ExternalLink, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { resources } from "../data/resources";
import { SEO } from "../components/SEO";
import { SectionHeader } from "../components/SectionHeader";
import type { Resource } from "../types";

const categories: Array<Resource["category"] | "All"> = ["All", "Documentation", "Free Courses", "YouTube Channels", "Books", "Practice Platforms"];
const roadmaps = ["All", "Frontend", "Backend", "Cybersecurity", "Data Science"];

export function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Resource["category"] | "All">("All");
  const [roadmap, setRoadmap] = useState("All");

  const filtered = useMemo(() => resources.filter((resource) => {
    const haystack = `${resource.title} ${resource.description} ${resource.roadmap} ${resource.category}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "All" || resource.category === category) && (roadmap === "All" || resource.roadmap === roadmap);
  }), [category, query, roadmap]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO title="Resources" description="Curated documentation, free courses, YouTube channels, books, and practice platforms for technology roadmaps." />
      <SectionHeader eyebrow="Resources" title="Curated learning materials" description="Search and filter resources by category and roadmap. Links are structured now and ready for future backend management." />
      <div className="mb-8 grid gap-4">
        <label className="flex min-h-14 items-center gap-3 rounded-full border border-slate-200 bg-white/75 px-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <Search className="h-5 w-5 text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search resources" className="w-full bg-transparent outline-none" />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-bold ${category === item ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "bg-white/70 text-slate-600 dark:bg-white/10 dark:text-slate-300"}`}>{item}</button>)}
        </div>
        <div className="flex flex-wrap gap-2">
          {roadmaps.map((item) => <button key={item} onClick={() => setRoadmap(item)} className={`rounded-full px-4 py-2 text-sm font-bold ${roadmap === item ? "bg-teal-500 text-white" : "bg-white/70 text-slate-600 dark:bg-white/10 dark:text-slate-300"}`}>{item}</button>)}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <article key={resource.id} className="rounded-3xl border border-slate-200/70 bg-white/75 p-6 backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">{resource.category}</p>
                <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{resource.title}</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{resource.level}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{resource.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{resource.roadmap}</span>
              <a href={resource.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-300">Open <ExternalLink className="h-4 w-4" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
