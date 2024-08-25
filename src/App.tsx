import IconButton from "./components/buttons/IconButton";
import LinkButton from "./components/buttons/LinkButton";
import NavbarMenu from "./components/NavigationMenu";
import ProjectTab from "./components/tabs/ProjectTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import EducationTab from "./components/tabs/EducationTab";

function App() {
  return (
    <main className="relative w-full p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="w-full p-2 md:p-8 lg:h-full lg:w-2/5 lg:overflow-y-scroll">
          <section className="flex w-full flex-col lg:min-h-[calc(100vh-7rem)]">
            <div className="mt-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Henrik Engqvist</h1>
            </div>
            <h3 className="mt-2 text-lg">Frontend Developer</h3>
            <p className="my-6 max-w-2xl text-foreground/80">
              Hey 👋 I'm Henrik, a Frontend Developer with a focus around UX &
              accessibility, with previous experience around{" "}
              <span className="font-semibold text-foreground">
                software development
              </span>{" "}
              &{" "}
              <span className="font-semibold text-foreground">
                game development
              </span>
              . I'm currently studying at{" "}
              <span className="font-semibold text-foreground">
                IT-Högskolan
              </span>{" "}
              where I'm sharpening my web dev skills.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <LinkButton link="#" text="Resume" />
              <IconButton icon="github" link="https://github.com/hydrarguru" />
              <IconButton
                icon="linkedin"
                link="https://www.linkedin.com/in/henrik-engqvist/"
              />
              <IconButton icon="email" link="mailto:henrik@engqvist.org" />
            </div>
            <div className="text-md my-7 hidden max-w-2xl flex-col space-y-2 rounded text-foreground/70 md:flex">
              <p>
                <span className="font-semibold text-primary/90">Frontend: </span>
                React.js, Next.js, Vue.js, TailwindCSS.
              </p>

              <p>
                <span className="font-semibold text-primary/90">Backend: </span>
                Express.js, MongoDB, Firebase.
              </p>

              <p>
                <span className="font-semibold text-primary/90">Languages: </span>
                JavaScript/TypeScript, C#, C++, SQL, HTML & CSS.
              </p>

              <p>
                <span className="font-semibold text-primary/90">Game Engines: </span>
                Unity Engine, Unreal Engine.
              </p>

              <p>
                <span className="font-semibold text-primary/90">Tools: </span>
                Git, JIRA, Figma, Node.js, Bun, Docker.
              </p>

              <p>
                <span className="font-semibold text-primary/90">Agile methods: </span>
                Scrum, Kanban.
              </p>
            </div>
          </section>
        </div>
        <div className="relative mx-auto mt-3 w-full max-w-4xl p-2 md:p-8 lg:mt-0 lg:h-full lg:w-3/5 lg:overflow-y-scroll">
          <NavbarMenu
            projects={<ProjectTab />}
            experience={<ExperienceTab />}
            education={<EducationTab />}
            />
        </div>
      </div>
    </main>
  );
}

export default App;
