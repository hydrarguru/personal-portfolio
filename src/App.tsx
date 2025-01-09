import IconButton from "./components/buttons/IconButton";
import LinkButton from "./components/buttons/LinkButton";
import NavbarMenu from "./components/nav/NavigationMenu";
import ProjectTab from "./components/tabs/ProjectTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import EducationTab from "./components/tabs/EducationTab";
import { ToggleThemeButton } from "./components/buttons/ToggleThemeButton";
import LinkToolTip  from "./components/buttons/LinkToolTip";

function App() {
  return (
    <main className="relative w-full p-0 sm:p-5 lg:h-screen">
      <div className="flex h-full w-full flex-wrap justify-between rounded-2xl sm:border lg:divide-x">
        <div className="w-full p-2 sm:mx-4 sm:mt-4 md:p-8 lg:h-full lg:w-2/5 lg:overflow-y-scroll">
          <section className="flex w-full flex-col lg:min-h-[calc(100vh-7rem)]">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Henrik Engqvist</h1>
            </div>
            <h3 className="mt-2 text-base italic">Frontend Developer, lover of 📜 ancient history and 🗺️ maps, 🖋️ fountain pens & ink.</h3>
            <p className="my-4 max-w-2xl text-foreground/100">
              Hey 👋 I'm Henrik, a Frontend Developer focusing on UX &
              accessibility, with previous experience with{" "}
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
              <LinkToolTip link="Swedish Resume. English version currently unavailable.">
                <LinkButton link="../Henrik_Engqvist_CV_SWE.pdf" text="Resume" />
              </LinkToolTip>
              <LinkToolTip link="https://github.com/hydrarguru">
                <IconButton icon="github" link="https://github.com/hydrarguru" />
              </LinkToolTip>
              <LinkToolTip link="https://www.linkedin.com/in/henrik-engqvist/">
                <IconButton icon="linkedin" link="https://www.linkedin.com/in/henrik-engqvist/" />
              </LinkToolTip>
              <LinkToolTip link="mailto:henrik@engqvist.org">
                <IconButton icon="email" link="mailto:henrik@engqvist.org" />
              </LinkToolTip>
              <ToggleThemeButton />
            </div>
            <div className="text-md my-7 hidden max-w-2xl flex-col space-y-2 rounded text-foreground/100 md:flex">
              <h2 className="text-lg">Currently learning: <span className="font-semibold">{`🦀 Rust 🦀`}</span></h2>
              <p>
                <span className="text-primary/90">
                  Frontend:{" "}
                </span>
                <span className="font-semibold">React</span>, Next.js, Vue, <span className="font-semibold">TailwindCSS</span>.
              </p>

              <p>
                <span className="text-primary/90">Backend: </span>
                Express.js, PostgreSQL, <span className="font-semibold">MySQL</span>, MongoDB, Firebase.
              </p>

              <p>
                <span className="text-primary/90">
                  Languages:{" "}
                </span>
                <span className="font-semibold">JavaScript</span>, <span className="font-semibold">TypeScript</span>, C#, C++, SQL, <span className="font-semibold">HTML & CSS</span>.
              </p>

              <p>
                <span className="text-primary/90">
                  Game Engines:{" "}
                </span>
                Unity Engine, Unreal Engine.
              </p>

              <p>
                <span className="text-primary/90">Tools: </span>
                <span className="font-semibold">Git</span>, JIRA, Figma, <span className="font-semibold">Node.js</span>, GitHub Actions, Bun, Docker.
              </p>

              <p>
                <span className="text-primary/90">
                  Agile methods:{" "}
                </span>
                Scrum, Kanban.
              </p>
            </div>
          </section>
        </div>
        <div className="relative mt-3 w-full max-w-6xl md:max-w-xl xl:max-w-6xl p-2 md:p-8 lg:mt-0 lg:h-full lg:w-3/5 lg:overflow-y-scroll">
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
