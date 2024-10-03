import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/assets/projects";

function ProjectTab() {
  return (
    <section className="mt-5 w-full space-y-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectTags={project.projectTags}
          githubLink={project.githubLink || ""}
          websiteLink={project.websiteLink || ""}
          youtubeLink={project.youtubeLink || ""}
        />
      ))}
    </section>
  );
}

export default ProjectTab;
