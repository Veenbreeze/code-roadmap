import type { LucideIcon } from "lucide-react";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  resources: string[];
  outcomes: string[];
  estimatedTime: string;
  difficulty: Difficulty;
}

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  difficulty: Difficulty;
  accent: string;
  iconName: "Code2" | "ServerCog" | "ShieldCheck" | "ChartNoAxesCombined";
  careerOutcomes: string[];
  nodes: RoadmapNode[];
}

export interface Resource {
  id: string;
  title: string;
  category: "Documentation" | "Free Courses" | "YouTube Channels" | "Books" | "Practice Platforms";
  roadmap: string;
  description: string;
  url: string;
  level: Difficulty | "All levels";
}

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}
