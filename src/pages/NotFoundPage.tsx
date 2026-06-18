import { Home, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-90px)] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <SEO title="Page Not Found" description="The requested SkillMap Africa page could not be found." />
      <div className="rounded-3xl border border-slate-200/70 bg-white/75 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
        <Map className="mx-auto h-12 w-12 text-teal-500" />
        <h1 className="mt-5 text-5xl font-black text-slate-950 dark:text-white">404</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">This route is not on the current learning map.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white dark:bg-white dark:text-slate-950">
          <Home className="h-5 w-5" /> Go home
        </Link>
      </div>
    </section>
  );
}
