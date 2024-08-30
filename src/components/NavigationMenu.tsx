import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NavbarMenuProps = {
    projectSection: React.ReactNode;
    experienceSection: React.ReactNode;
    educationSection: React.ReactNode;
};

function NavbarMenu({ projectSection, experienceSection, educationSection }: NavbarMenuProps) {
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
            {projectSection}
          </TabsContent>
          <TabsContent value="experience">
            {experienceSection}
          </TabsContent>
          <TabsContent value="education">
            {educationSection}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default NavbarMenu;
