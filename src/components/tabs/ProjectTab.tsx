import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/assets/projects";

function ProjectTab() {
  return (
    <section className="w-full space-y-6 mt-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          projectTags={project.projectTags}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
        />
      ))}
    </section>
  );
}

export default ProjectTab;
