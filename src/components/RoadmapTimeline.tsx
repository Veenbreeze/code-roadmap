import { CheckCircle2, Circle, Clock, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import type { Roadmap } from "../types";

interface RoadmapTimelineProps {
  roadmap: Roadmap;
  completed: string[];
  onToggle: (nodeId: string) => void;
}

export function RoadmapTimeline({ roadmap, completed, onToggle }: RoadmapTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-400 via-blue-400 to-amber-400 md:block" />
      <div className="grid gap-5">
        {roadmap.nodes.map((node, index) => {
          const isComplete = completed.includes(node.id);
          return (
            <motion.article
              key={node.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(index * 0.03, 0.25) }}
              className="relative rounded-3xl border border-slate-200/70 bg-white/75 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
            >
              <button
                onClick={() => onToggle(node.id)}
                className={`absolute -left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 shadow-sm transition md:flex dark:border-slate-950 ${
                  isComplete ? "bg-teal-500 text-white" : "bg-white text-slate-400 dark:bg-slate-900"
                }`}
                aria-label={`Mark ${node.title} ${isComplete ? "incomplete" : "complete"}`}
              >
                {isComplete ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              </button>
              <div className="md:pl-12">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Step {index + 1}</p>
                    <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white">{node.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{node.description}</p>
                  </div>
                  <button
                    onClick={() => onToggle(node.id)}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
                      isComplete ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
                    }`}
                  >
                    {isComplete ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                    {isComplete ? "Completed" : "Mark complete"}
                  </button>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10">
                    <p className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><Clock className="h-4 w-4 text-amber-500" />Estimated time</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{node.estimatedTime}</p>
                    <p className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-950 dark:text-slate-300">{node.difficulty}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10">
                    <p className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><GraduationCap className="h-4 w-4 text-teal-500" />Outcomes</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      {node.outcomes.map((outcome) => <li key={outcome}>• {outcome}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-100/80 p-4 dark:bg-white/10">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Recommended resources</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      {node.resources.map((resource) => <li key={resource}>• {resource}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
