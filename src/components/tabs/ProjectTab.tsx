import { useEffect, useState } from "react";

import { Project } from "../../types/types";
import { projects } from "@/assets/projects";

import ProjectCard from "../cards/ProjectCard";
import GridProjectCard from "../cards/GridProjectCard";
import SearchBar from "../nav/SearchBar";
import IconButton from "../buttons/IconButton";

type ViewType = "rows" | "grid";

interface ProjectTabProps {
  projectData: Project[];
}

function ListProjectView({ projectData }: ProjectTabProps) {
  return (
    projectData.map((project) => (
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
  );
}

function GridProjectView({ projectData }: ProjectTabProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {
        projectData.map((project) => (
          <GridProjectCard
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
    </div>
  );
}


function ProjectTab() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [viewType, setViewType] = useState<string>("rows");

  useEffect(() => {
    localStorage.setItem("projectTabView", viewType);
    setProjectData(projects);
    setSearchResults(projects);
  }, [viewType]);

  function filterProjects(searchTerm: string) {
    const results = projectData.filter((project) => {
      return project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }

  function setProjectTabView(view: ViewType) {
    setViewType(view);
    const fetchedView = localStorage.getItem("projectTabView");
    if (fetchedView) {
      if(fetchedView === "grid") {
        localStorage.setItem("projectTabView", "rows");
      }
      else {
        localStorage.setItem("projectTabView", "grid");
      }
    }
    else {
      console.error("Error: Local storage not available");
    }
  }

  function handleViewChange(view: ViewType) {
    setProjectTabView(view);
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
    <section className="w-full mt-5 space-y-6">
      <div className='flex gap-2'>
        <SearchBar onSearch={handleSearch}/>
        {
          viewType === "rows" ? (
            <IconButton icon="grid" handleClick={()=> handleViewChange("grid")} />
          ) : (
            <IconButton icon="rows" handleClick={()=> handleViewChange("rows")} />
          )
        }
      </div>
      {
        viewType === "rows" ? 
          <ListProjectView projectData={searchResults} /> :
          <GridProjectView projectData={searchResults} />
      }
    </section>
  );
}

export default ProjectTab;
