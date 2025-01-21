import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "@/assets/experience";

function ExperienceTab() {
    return (
      <section className="mt-5 w-full space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experienceTitle={experience.experienceTitle}
            experienceRole={experience.experienceRole}
            experienceDescription={experience.experienceDescription}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </section>
    );
  }
  
  export default ExperienceTab;