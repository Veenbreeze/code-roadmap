import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | SkillMap Africa`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${title} | SkillMap Africa`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [description, title]);

  return null;
}
