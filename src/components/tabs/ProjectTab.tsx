import { useEffect, useState } from "react";

import { Project } from "../../types/types";
import { projects } from "@/assets/projects";

import ProjectCard from "../cards/ProjectCard";
import SearchBar from "../nav/SearchBar";



function ProjectTab() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [searchResults, setSearchResults] = useState<Project[]>([]);

  useEffect(() => {
    setProjectData(projects);
    setSearchResults(projects);
  }, []);

  function filterProjects(searchTerm: string) {
    const results = projectData.filter((project) => {
      return project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }

  function handleSearch(searchTerm: string) {
    if (searchTerm.length === 0) {
      setSearchResults(projectData);
      return;
    }
    else {
      filterProjects(searchTerm);
    }
  }
  
  return (
    <section className="mt-5 w-full space-y-6">
      <SearchBar onSearch={handleSearch} />
      {
        searchResults.map((project) => (
          <ProjectCard
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectTags={project.projectTags}
            githubLink={project.githubLink || ""}
            websiteLink={project.websiteLink || ""}
            youtubeLink={project.youtubeLink || ""}
          />
        ))
      }
    </section>
  );
}

export default ProjectTab;
