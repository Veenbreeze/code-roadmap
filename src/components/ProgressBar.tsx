import { motion } from "framer-motion";

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10" aria-label={`${value}% complete`}>
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-amber-400"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
}
