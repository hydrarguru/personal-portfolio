import IconButton from '../buttons/IconButton';
import ProjectTag from './ProjectTag';
import LinkToolTip from '../buttons/LinkToolTip';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface GridProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  githubLink: string;
  websiteLink: string;
  youtubeLink: string;
}

function GridProjectCard({
  projectTitle,
  projectDescription,
  projectTags,
  githubLink,
  websiteLink,
  youtubeLink,
}: GridProjectCardProps) {
  return (
    <Card className='transition duration-300 ease-in-out hover:border-neutral-50'>
      <CardHeader>
        <CardTitle className='text-2xl'>{projectTitle}</CardTitle>
        <CardDescription className='text-xl'>
            {projectDescription.length > 100
              ? projectDescription.substring(0, 100) + '...'
              : projectDescription}
  </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap items-center gap-2'>
          {projectTags.map((tag) => (
            <ProjectTag key={tag} tagLabel={tag} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex flex-wrap items-center gap-2'>
          {githubLink && (
            <LinkToolTip link={githubLink}>
              <IconButton icon='github' link={githubLink} />
            </LinkToolTip>
          )}
          {websiteLink && (
            <LinkToolTip link={websiteLink}>
              <IconButton icon='globe' link={websiteLink} />
            </LinkToolTip>
          )}
          {youtubeLink && (
            <LinkToolTip link={youtubeLink}>
              <IconButton icon='youtube' link={youtubeLink} />
            </LinkToolTip>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default GridProjectCard;
