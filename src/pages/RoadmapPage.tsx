import { ArrowLeft, Clock, Gauge, Trophy } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getRoadmapBySlug } from "../data/roadmaps";
import { DashboardPanel } from "../components/DashboardPanel";
import { ProgressBar } from "../components/ProgressBar";
import { RoadmapTimeline } from "../components/RoadmapTimeline";
import { SEO } from "../components/SEO";
import { useProgress } from "../hooks/useProgress";
import { roadmapIcons } from "../lib/icons";

export function RoadmapPage() {
  const { slug } = useParams();
  const roadmap = getRoadmapBySlug(slug);
  const { getCompleted, getPercentage, toggleNode } = useProgress();

  if (!roadmap) return <Navigate to="/404" replace />;

  const completed = getCompleted(roadmap.id);
  const percentage = getPercentage(roadmap.id);
  const Icon = roadmapIcons[roadmap.iconName];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SEO title={roadmap.title} description={roadmap.description} />
      <Link to="/roadmaps" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Back to roadmaps
      </Link>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="rounded-3xl border border-slate-200/70 bg-white/75 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${roadmap.accent} text-white shadow-glow`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">{roadmap.title}</h1>
                <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{roadmap.description}</p>
              </div>
              {percentage === 100 && (
                <div className="rounded-2xl bg-amber-400/15 p-4 text-amber-700 dark:text-amber-200">
                  <Trophy className="h-7 w-7" />
                  <p className="mt-2 text-sm font-bold">Completion reward unlocked</p>
                </div>
              )}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10"><Clock className="h-5 w-5 text-teal-500" /><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Duration</p><p className="font-bold">{roadmap.duration}</p></div>
              <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10"><Gauge className="h-5 w-5 text-amber-500" /><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Difficulty</p><p className="font-bold">{roadmap.difficulty}</p></div>
              <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10"><Trophy className="h-5 w-5 text-blue-500" /><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Topics</p><p className="font-bold">{completed.length} of {roadmap.nodes.length}</p></div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm font-bold text-slate-600 dark:text-slate-300"><span>Roadmap progress</span><span>{percentage}%</span></div>
              <ProgressBar value={percentage} />
            </div>
          </div>
          <div className="mt-6">
            <RoadmapTimeline roadmap={roadmap} completed={completed} onToggle={(nodeId) => toggleNode(roadmap.id, nodeId)} />
          </div>
        </div>
        <DashboardPanel />
      </div>
    </section>
  );
}
