"use client";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { CldImage } from "next-cloudinary";
import { MoveRight } from "lucide-react";

const ProjectCard = ({
  projectName,
  appType,
  techType,
  date,
  description,
  imageUrl,
  projectUrl,
  imgRatio = 1.5,
}) => {
  return (
    <Link href={projectUrl} className="block group">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: `${100 / imgRatio}%` }}
        >
          <CldImage
            src={imageUrl}
            alt={projectName}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
        <div className="py-2 space-y-1">
          <div className=" flex justify-between items-center">
            <h3 className="text-lg font-semibold text-main capitalize">
              {projectName}
            </h3>

            <MoveRight
              className="opacity-0 group-hover:opacity-100 transition-opacity text-main -translate-x-2 duration-300 w-5 h-5 ease-in-out"
              strokeWidth={1}
            />
            <MoveRight
              className="opacity-0 group-hover:opacity-100 transition-opacity text-main -translate-x-3 duration-300 w-5 h-5 ease-in-out"
              strokeWidth={1}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-mygray">
              {appType} - {techType}
            </p>
            <p className="text-xs text-mygray/80">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  appType: PropTypes.string.isRequired,
  techType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  imgRatio: PropTypes.number,
};

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectName: PropTypes.string.isRequired,
      appType: PropTypes.string.isRequired,
      techType: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      projectUrl: PropTypes.string.isRequired,
      imgRatio: PropTypes.number,
    })
  ).isRequired,
};
