import { ChartNoAxesCombined, Code2, ServerCog, ShieldCheck } from "lucide-react";
import type { Roadmap } from "../types";

export const roadmapIcons: Record<Roadmap["iconName"], typeof Code2> = {
  Code2,
  ServerCog,
  ShieldCheck,
  ChartNoAxesCombined,
};
