import ProjectGrid from "./ProjectCard";

const projects = [
  {
    id: 1,
    projectName: "Smart Learner",
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
    projectName: "medium Learner",
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
    projectName: "fast Learner",
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

function FeaturedProject() {
  return (
    <div className="mx-auto py-2">
      <h1 className="text-3xl font-semibold mb-6">Feature Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}

export default FeaturedProject;
