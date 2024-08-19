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
    imageUrl: "Photos/hvnbhjjdpprrzzu4rrmt.webp",
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
    imageUrl: "Photos/u7nk3vtvhfszzsotikcw.webp",
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
    imageUrl: "Photos/kscvvaoednkurc8uti7t.webp", 
    projectUrl: "/projects/smart-learner",
    imgRatio: 1.5,
  },
];

function FeaturedProject() {
  return (
    <div className="mx-auto py-2">
      <h1 className="text-3xl font-semibold mb-4">Feature Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  );
}

export default FeaturedProject;
