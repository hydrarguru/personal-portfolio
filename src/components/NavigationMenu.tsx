import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NavbarMenuProps = {
    projects: React.ReactNode;
    experience: React.ReactNode;
    education: React.ReactNode;
};

function NavbarMenu({ projects, experience, education }: NavbarMenuProps) {
  return (
    <div className="sticky top-0 z-50">
      <div className="container pr-4 pl-4">
        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            {projects}
          </TabsContent>
          <TabsContent value="experience">
            {experience}
          </TabsContent>
          <TabsContent value="education">
            {education}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
//container mx-auto
//lg:w-[780px] md:
export default NavbarMenu;
