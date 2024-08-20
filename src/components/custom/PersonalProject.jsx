import ProjectGrid from "./ProjectCard";
import Custombtn from "./buttons/Custombtn";
import CustomTooltip from "./customtooltip";

const projects = [
  {
    id: 1,
    projectName: "Personal Smart Learner",
    appType: "Web Application",
    techType: "Frontend",
    date: "Sep 27, 2023",
    description:
      "A multipurpose school management system that bridges the gap in monitoring academic performances.",
    imageUrl: "Photos/hvnbhjjdpprrzzu4rrmt.webp",
    projectUrl: "/projects/smart-learner",
    imgRatio: 1.5,
  },
  {
    id: 2,
    projectName: "Personal medium Learner",
    appType: "Web Application",
    techType: "Frontend",
    date: "Sep 27, 2023",
    description:
      "A multipurpose school management system that bridges the gap in monitoring academic performances.",
    imageUrl: "Photos/u7nk3vtvhfszzsotikcw.webp",
    projectUrl: "/projects/smart-learner",
    imgRatio: 1.5,
  },
  {
    id: 3,
    projectName: "Personal fast Learner",
    appType: "Web Application",
    techType: "Frontend",
    date: "Sep 27, 2023",
    description:
      "A multipurpose school management system that bridges the gap in monitoring academic performances.",
    imageUrl: "Photos/kscvvaoednkurc8uti7t.webp",
    projectUrl: "/projects/smart-learner",
    imgRatio: 1.5,
  },
];

function PersonalProject() {
  return (
    <div className="mx-auto py-2 space-y-6">
      <section className=" flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Personal Projects</h1>
        <CustomTooltip
          text="This are project that are for my Client /n
        that i have worked with in the past"
        />
      </section>

      <ProjectGrid projects={projects} />
      <section className="flex">
        {/* Flexible dot separator */}

        <div className="dot-separator py-2 md:pt-8"></div>

        {/* about me btn */}
        <section className="md:w-[20%]">
          <Custombtn hasSvg={true} endpoint={"#"}>
            <span className="capitalize text-sm">View all projects</span>
          </Custombtn>
        </section>
      </section>
    </div>
  );
}

export default PersonalProject;
