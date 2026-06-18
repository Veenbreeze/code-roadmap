import { Menu, Moon, Sun, X, Map, Compass, BookOpen, Info } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/roadmaps", icon: Compass },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "About", href: "/about", icon: Info },
];

export function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 bg-mesh-light text-slate-900 transition-colors dark:bg-slate-950 dark:bg-mesh-dark dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="SkillMap Africa home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-blue-500 to-amber-400 text-white shadow-glow">
              <Map className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight text-slate-950 dark:text-white">SkillMap Africa</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Career roadmaps</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">{nav}</nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setOpen((current) => !current)}
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm md:hidden dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
              aria-label="Open navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-200/70 px-4 py-3 dark:border-white/10 md:hidden"
            >
              <div className="flex flex-col gap-2">{nav}</div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
