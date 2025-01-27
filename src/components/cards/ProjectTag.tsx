import { TagStyleOption } from "@/types/types";

const Tags: TagStyleOption[] = [
  { tag: "HTML", style: "bg-red-500 text-white" },
  { tag: "CSS", style: "bg-blue-500 text-white" },
  { tag: "React", style: "bg-sky-500 text-white" },
  { tag: "Vue", style: "bg-green-300 text-black" },
  { tag: "TypeScript", style: "bg-blue-500 text-white" },
  { tag: "Firebase", style: "bg-yellow-500 text-black" },
  { tag: "TailwindCSS", style: "bg-sky-400 text-white" },
  { tag: "Bun", style: "bg-pink-500 text-white" },
  { tag: "Express.js", style: "bg-violet-500 text-white" },
  { tag: "MySQL", style: "bg-orange-500 text-white" },
  { tag: "Chart.js", style: "bg-pink-500 text-white" },
  { tag: "C#", style: "bg-violet-900 text-white" },
  { tag: "C++", style: "bg-blue-900 text-white" },
  { tag: "Unity Engine", style: "bg-zinc-600 text-white" },
  { tag: "Unreal Engine", style: "bg-zinc-600 text-white" },
];

interface ProjectTagProps {
  tagLabel: string;
}

function ProjectTag({ tagLabel }: ProjectTagProps) {
  const tagStyle = Tags.find((tag) => tag.tag === tagLabel) || { style: "bg-secondary" };

  return (
    <p className={`rounded px-2 py-1 text-xs ${tagStyle?.style}`}>
      {tagLabel}
    </p>
  );
}

export default ProjectTag;