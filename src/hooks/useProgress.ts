import { useMemo } from "react";
import { roadmaps } from "../data/roadmaps";
import { useLocalStorage } from "./useLocalStorage";

type ProgressMap = Record<string, string[]>;

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<ProgressMap>("skillmap-progress", {});
  const [activeRoadmap, setActiveRoadmap] = useLocalStorage<string>("skillmap-active-roadmap", "frontend");
  const [lastActive, setLastActive] = useLocalStorage<string>("skillmap-last-active", new Date().toDateString());
  const [streak, setStreak] = useLocalStorage<number>("skillmap-streak", 1);

  const toggleNode = (roadmapId: string, nodeId: string) => {
    setProgress((current) => {
      const completed = new Set(current[roadmapId] ?? []);
      if (completed.has(nodeId)) completed.delete(nodeId);
      else completed.add(nodeId);
      return { ...current, [roadmapId]: Array.from(completed) };
    });
    setActiveRoadmap(roadmapId);

    const today = new Date().toDateString();
    if (lastActive !== today) {
      const previous = new Date(lastActive);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      setStreak(previous.toDateString() === yesterday.toDateString() ? streak + 1 : 1);
      setLastActive(today);
    }
  };

  const metrics = useMemo(() => {
    const totalTopics = roadmaps.reduce((sum, roadmap) => sum + roadmap.nodes.length, 0);
    const completedTopics = roadmaps.reduce((sum, roadmap) => sum + (progress[roadmap.id]?.length ?? 0), 0);
    const overallProgress = totalTopics ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const active = roadmaps.find((roadmap) => roadmap.id === activeRoadmap) ?? roadmaps[0];
    const readinessScore = Math.min(100, Math.round(overallProgress * 0.7 + roadmaps.filter((roadmap) => (progress[roadmap.id]?.length ?? 0) > 0).length * 7.5));
    return { totalTopics, completedTopics, overallProgress, active, readinessScore };
  }, [activeRoadmap, progress]);

  const getCompleted = (roadmapId: string) => progress[roadmapId] ?? [];
  const getPercentage = (roadmapId: string) => {
    const roadmap = roadmaps.find((item) => item.id === roadmapId);
    if (!roadmap) return 0;
    return Math.round(((progress[roadmapId]?.length ?? 0) / roadmap.nodes.length) * 100);
  };

  const achievements = [
    { title: "First Step", description: "Complete your first topic", unlocked: metrics.completedTopics >= 1 },
    { title: "Momentum Builder", description: "Complete 10 learning topics", unlocked: metrics.completedTopics >= 10 },
    { title: "Career Focused", description: "Reach 50% overall progress", unlocked: metrics.overallProgress >= 50 },
    { title: "Roadmap Finisher", description: "Complete a full roadmap", unlocked: roadmaps.some((roadmap) => getPercentage(roadmap.id) === 100) },
  ];

  const nextStep = roadmaps.flatMap((roadmap) => roadmap.nodes.map((node) => ({ roadmap, node }))).find(({ roadmap, node }) => !getCompleted(roadmap.id).includes(node.id));

  return {
    progress,
    toggleNode,
    getCompleted,
    getPercentage,
    activeRoadmap: metrics.active,
    setActiveRoadmap,
    metrics,
    achievements,
    streak,
    nextStep,
  };
}
