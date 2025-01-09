import { useEffect, useState } from "react";

import { Project } from "../../types/types";
import { projects } from "@/assets/projects";

import ProjectCard from "../cards/ProjectCard";
import SearchBar from "../nav/SearchBar";
import IconButton from "../buttons/IconButton";



function ProjectTab() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [viewType, setViewType] = useState<string>("rows");

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

  function handleViewChange() {
    if (viewType === "rows") {
      setViewType("grid");
    }
    else {
      setViewType("rows");
    }
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
      <div className='flex gap-2'>
        <SearchBar onSearch={handleSearch}/>
        {
          viewType === "rows" ? (
            <IconButton icon="grid" handleClick={handleViewChange} />
          ) : (
            <IconButton icon="rows" handleClick={handleViewChange} />
          )
        }
      </div>
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
