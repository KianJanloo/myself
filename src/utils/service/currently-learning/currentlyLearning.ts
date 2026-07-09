export interface LearningItem {
  name: string
  progress: number
  icon: string
  startedDate: string
}

export const currentlyLearning: LearningItem[] = [
  { name: "Rust", progress: 35, icon: "🦀", startedDate: "2026-05" },
  { name: "Kubernetes", progress: 50, icon: "☸️", startedDate: "2026-03" },
  { name: "Machine Learning", progress: 25, icon: "🧠", startedDate: "2026-04" },
  { name: "WebAssembly", progress: 20, icon: "⚡", startedDate: "2026-06" },
]
