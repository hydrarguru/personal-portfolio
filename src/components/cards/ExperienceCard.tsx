import { Separator } from '../ui/separator';

interface ExperienceCardProps {
  experienceTitle: string;
  experienceRole: string;
  experienceDescription: string[];
  startDate: string;
  endDate: string;
  image?: string;
}

function ExperienceCard({
  experienceTitle,
  experienceRole,
  experienceDescription,
  startDate,
  endDate,
}: ExperienceCardProps) {
  return (
    <div className="flex justify-between gap-2 p-4 overflow-hidden rounded-xl border hover:border-green-700 transition duration-300 ease-in-out">
      <div className="tablet:w-3/5 w-full space-y-2">
        <a className="group/link space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="font-heading ml-2 text-xl font-semibold">
              {experienceTitle}
            </h1>
            <span className="text-xl ml-2 font-semibold">{experienceRole}</span>
            <span className="">{`${startDate} - ${endDate}`}</span>
          </div>
          <Separator />
          <ul className="text-lg max-w-4xl text-muted-foreground">
            {experienceDescription.map((description, index) => (
              <li key={index} className="list-disc ml-4">
                {description}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
