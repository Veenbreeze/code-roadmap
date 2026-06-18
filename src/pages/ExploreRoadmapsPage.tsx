import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { roadmaps } from "../data/roadmaps";
import { RoadmapCard } from "../components/RoadmapCard";
import { DashboardPanel } from "../components/DashboardPanel";
import { SectionHeader } from "../components/SectionHeader";
import { SEO } from "../components/SEO";
import { useProgress } from "../hooks/useProgress";
import type { Difficulty } from "../types";

const difficultyOptions: Array<Difficulty | "All"> = ["All", "Beginner", "Intermediate", "Advanced"];

export function ExploreRoadmapsPage() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const { getPercentage } = useProgress();

  const filtered = useMemo(() => {
    return roadmaps.filter((roadmap) => {
      const matchesQuery = `${roadmap.title} ${roadmap.description} ${roadmap.careerOutcomes.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      const matchesDifficulty = difficulty === "All" || roadmap.difficulty === difficulty;
      return matchesQuery && matchesDifficulty;
    });
  }, [difficulty, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO title="Explore Roadmaps" description="Search and filter structured technology roadmaps for frontend, backend, cybersecurity, and data science." />
      <SectionHeader eyebrow="Explore" title="Find the right path for your next role" description="Filter roadmaps by skill level, career outcome, and focus area. Your completion progress is saved locally." />
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <label className="flex min-h-14 items-center gap-3 rounded-full border border-slate-200 bg-white/75 px-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <Search className="h-5 w-5 text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roadmaps, roles, or skills" className="w-full bg-transparent outline-none" />
        </label>
        <div className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/75 p-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <SlidersHorizontal className="ml-2 h-5 w-5 text-slate-400" />
          {difficultyOptions.map((item) => (
            <button key={item} onClick={() => setDifficulty(item)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${difficulty === item ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((roadmap) => <RoadmapCard key={roadmap.id} roadmap={roadmap} progress={getPercentage(roadmap.id)} />)}
        </div>
        <DashboardPanel />
      </div>
    </section>
  );
}
