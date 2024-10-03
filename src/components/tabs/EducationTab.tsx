import EducationCard from "../cards/EducationCard";
import { educations } from "@/assets/education";


function EducationTab() {
    return (
      <section className="mt-5 w-full space-y-6">
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            educationTitle={education.educationTitle}
            educationDescription={education.educationDescription}
            curriculum={education.curriculum}
            associatedProjects={education.associatedProjects}
            startDate={education.startDate}
            endDate={education.endDate}
            image={education.image}
          />
        ))}
      </section>
    );
  }
  
  export default EducationTab;