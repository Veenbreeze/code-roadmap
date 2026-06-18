import { ArrowRight, Clock, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Roadmap } from "../types";
import { roadmapIcons } from "../lib/icons";
import { ProgressBar } from "./ProgressBar";

interface RoadmapCardProps {
  roadmap: Roadmap;
  progress: number;
}

export function RoadmapCard({ roadmap, progress }: RoadmapCardProps) {
  const Icon = roadmapIcons[roadmap.iconName];

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition dark:border-white/10 dark:bg-white/[0.06]"
    >
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${roadmap.accent} text-white shadow-glow`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">{roadmap.shortTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{roadmap.description}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
        <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-500" />{roadmap.duration}</span>
        <span className="flex items-center gap-2"><Gauge className="h-4 w-4 text-amber-500" />{roadmap.difficulty}</span>
      </div>
      <div className="mt-5 space-y-2">
        <div className="flex justify-between text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar value={progress} />
      </div>
      <Link
        to={`/roadmaps/${roadmap.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:gap-3 dark:text-teal-300"
      >
        Open roadmap <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
