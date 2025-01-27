import IconButton from "../buttons/IconButton";
import ProjectTag from "./ProjectTag";
import LinkToolTip from "../buttons/LinkToolTip";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  githubLink: string;
  websiteLink: string;
  youtubeLink: string;
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectTags,
  githubLink,
  websiteLink,
  youtubeLink,
}: ProjectCardProps) {
  return (
    <div className="flex justify-between gap-2 p-3 overflow-hidden transition duration-300 ease-in-out border rounded-xl hover:border-neutral-50">
      <div className="w-full space-y-2 tablet:w-3/5">
        <a className="space-y-2 group/link">
          <div className="inline-flex items-center gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold font-heading">
                {projectTitle}
              </h1>
            </div>
          </div>
          <p className="max-w-4xl text-md text-muted-foreground">
            {projectDescription}
          </p>
        </a>
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {projectTags.map((tag) => (
            <ProjectTag key={tag} tagLabel={tag} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {githubLink && (
            <LinkToolTip link={githubLink}>
              <IconButton icon="github" link={githubLink} />
            </LinkToolTip>
          )}
          {websiteLink && (
            <LinkToolTip link={websiteLink}>
              <IconButton icon="globe" link={websiteLink} />
            </LinkToolTip>
          )}
          {youtubeLink && (
            <LinkToolTip link={youtubeLink}>
              <IconButton icon="youtube" link={youtubeLink} />
            </LinkToolTip>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
