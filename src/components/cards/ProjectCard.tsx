import IconButton from "../buttons/IconButton";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  githubLink: string;
  websiteLink: string;
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectTags,
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  return (
    <div className="flex justify-between gap-2 overflow-hidden rounded-xl border p-3">
      <div className="tablet:w-3/5 w-full space-y-2">
        <a className="group/link space-y-2">
          <div className="inline-flex items-center gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-heading text-xl font-semibold">
                {projectTitle}
              </h1>
              {/*
                <span className="rounded bg-secondary px-2 py-1 text-xs">
                  {projectDate}
                </span> 
                */}
            </div>
          </div>
          <p className="max-w-4xl text-sm text-muted-foreground">
            {projectDescription}
          </p>
        </a>
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {projectTags.map((tag) => (
            <p key={tag} className="rounded bg-secondary px-2 py-1 text-xs">
              {tag}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <IconButton icon="github" link={githubLink} />
          <IconButton icon="globe" link={websiteLink} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
