import { Award, Flame, Target, Trophy } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { ProgressBar } from "./ProgressBar";

export function DashboardPanel() {
  const { metrics, achievements, streak, nextStep } = useProgress();

  return (
    <aside className="rounded-3xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Personal dashboard</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{metrics.overallProgress}% overall</h2>
        </div>
        <div className="rounded-2xl bg-teal-500/10 p-3 text-teal-600 dark:text-teal-300">
          <Target className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-5">
        <ProgressBar value={metrics.overallProgress} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10">
          <p className="text-xs text-slate-500 dark:text-slate-400">Completed topics</p>
          <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{metrics.completedTopics}</p>
        </div>
        <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10">
          <p className="text-xs text-slate-500 dark:text-slate-400">Readiness score</p>
          <p className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{metrics.readinessScore}</p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-amber-400/10 p-4 text-amber-700 dark:text-amber-200">
        <Flame className="h-5 w-5" />
        <span className="text-sm font-semibold">{streak} day learning streak</span>
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Active roadmap</h3>
        <p className="mt-2 font-semibold text-slate-950 dark:text-white">{metrics.active.title}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Recommended next step</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {nextStep ? `${nextStep.node.title} in ${nextStep.roadmap.shortTitle}` : "All roadmap topics are complete."}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          <Award className="h-4 w-4" /> Badges
        </h3>
        <div className="grid gap-2">
          {achievements.map((badge) => (
            <div key={badge.title} className={`flex items-center gap-3 rounded-2xl p-3 ${badge.unlocked ? "bg-teal-500/10 text-teal-700 dark:text-teal-200" : "bg-slate-100/80 text-slate-500 dark:bg-white/10 dark:text-slate-400"}`}>
              <Trophy className="h-4 w-4" />
              <div>
                <p className="text-sm font-semibold">{badge.title}</p>
                <p className="text-xs opacity-80">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
