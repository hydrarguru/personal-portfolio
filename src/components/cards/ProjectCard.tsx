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
    <div className="flex justify-between gap-2 overflow-hidden rounded-xl border p-3 hover:border-blue-700 transition duration-300 ease-in-out">
      <div className="tablet:w-3/5 w-full space-y-2">
        <a className="group/link space-y-2">
          <div className="inline-flex items-center gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-heading text-xl font-semibold">
                {projectTitle}
              </h1>
            </div>
          </div>
          <p className="text-md max-w-4xl text-muted-foreground">
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
