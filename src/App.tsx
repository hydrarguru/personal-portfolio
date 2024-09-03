import PersonalSection from "./components/PersonalSection";
import NavbarMenu from "./components/NavigationMenu";
import ProjectTab from "./components/tabs/ProjectTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import EducationTab from "./components/tabs/EducationTab";

function App() {
  return (
    <main className="relative w-full p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="w-full p-2 mx-4 md:p-8 lg:h-full lg:w-2/5 lg:overflow-y-scroll">
          <PersonalSection />
        </div>
        <div className="relative mx-auto mt-3 w-full max-w-4xl p-2 md:p-8 lg:mt-0 lg:h-full lg:w-3/5 lg:overflow-y-scroll">
          <NavbarMenu
            projectSection={<ProjectTab />}
            experienceSection={<ExperienceTab />}
            educationSection={<EducationTab />}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
