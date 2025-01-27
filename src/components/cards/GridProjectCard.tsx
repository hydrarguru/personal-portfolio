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
    <Card className='flex flex-col h-full transition duration-300 ease-in-out hover:border-neutral-50'>
      <CardHeader className='flex-grow'>
        <CardTitle className='text-3xl text-center'>{projectTitle}</CardTitle>
        <CardDescription className='text-lg italic'>
          {projectDescription.length > 100
            ? projectDescription.substring(0, 100) + '...'
            : projectDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
        <div className='flex flex-wrap items-center gap-2'>
          {projectTags.map((tag) => (
            <ProjectTag key={tag} tagLabel={tag} />
          ))}
        </div>
      </CardContent>
      <CardFooter className='mt-auto'>
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
