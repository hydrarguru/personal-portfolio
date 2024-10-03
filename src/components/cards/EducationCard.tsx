import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface EducationCardProps {
  educationTitle: string;
  educationDescription: string;
  curriculum: string[];
  associatedProjects: string[];
  startDate: string;
  endDate: string;
}

function EducationCard({
  educationTitle,
  educationDescription,
  curriculum,
  associatedProjects,
  startDate,
  endDate,
}: EducationCardProps) {
  return (
    <div className="flex justify-between gap-2 overflow-hidden rounded-xl border p-3">
      <div className="tablet:w-3/5 w-full space-y-2">
        <a className="group/link space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="font-heading text-xl font-semibold">
              {educationTitle}
            </h1>
            <span className="">{`${startDate} - ${endDate}`}</span>
          </div>
          <p className="text-md max-w-4xl text-muted-foreground">
            {educationDescription}
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Curriculum</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  {curriculum.map((curriculumItem, index) => (
                    <li key={index}>{curriculumItem}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='border-none'>
              <AccordionTrigger>Projects</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  {associatedProjects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </a>
      </div>
    </div>
  );
}

export default EducationCard;
