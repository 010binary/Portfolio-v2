import ProjectGrid from "./ProjectCard";
import Custombtn from "./buttons/Custombtn";

const projects = [
  {
    id: 1,
    projectName: "Personal Smart Learner",
    appType: "Web Application",
    techType: "Frontend",
    date: "Sep 27, 2023",
    description:
      "A multipurpose school management system that bridges the gap in monitoring academic performances.",
    imageUrl:
      "https://res.cloudinary.com/de8rcwztx/image/upload/v1722083610/CarRental_yql3qf.jpg",
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
    imageUrl:
      "https://res.cloudinary.com/de8rcwztx/image/upload/v1722083610/CarRental_yql3qf.jpg",
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
    imageUrl:
      "https://res.cloudinary.com/de8rcwztx/image/upload/v1722083610/CarRental_yql3qf.jpg",
    projectUrl: "/projects/smart-learner",
    imgRatio: 1.5,
  },
];

function PersonalProject() {
  return (
    <div className="mx-auto py-2 space-y-6">
      <h1 className="text-3xl font-semibold mb-8">Personal Projects</h1>
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
