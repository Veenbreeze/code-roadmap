import { Github, Linkedin, Mail, Map } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-blue-500 to-amber-400 text-white">
              <Map className="h-5 w-5" />
            </span>
            <span className="font-black text-slate-950 dark:text-white">SkillMap Africa</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Structured learning roadmaps for African students and developers building globally competitive technology careers.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-slate-950 dark:text-white">Platform</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Link to="/roadmaps">Explore Roadmaps</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-slate-950 dark:text-white">Connect</h3>
          <div className="mt-4 flex gap-3 text-slate-600 dark:text-slate-300">
            <Github className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
            <Mail className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
