import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NavbarMenuProps = {
    projects: React.ReactNode;
    experience: React.ReactNode;
    education: React.ReactNode;
};

function NavbarMenu({ projects, experience, education }: NavbarMenuProps) {
  return (
    <div className="sticky top-0 z-50 inline-flex items-center rounded-lg text-md">
      <Tabs defaultValue="projects" className="w-[600px]">
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
  );
}

export default NavbarMenu;
