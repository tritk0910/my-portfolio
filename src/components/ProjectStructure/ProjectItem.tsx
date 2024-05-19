import React from "react";
import ProjectImage from "../shared/ProjectImage";
import { ProjectList } from "../experiences/projectList";

export default function ProjectItem() {
  return (
    <div className="flex flex-col gap-40">
      {ProjectList.map((project, index) => (
        <div className="grid grid-cols-2 gap-32" key={index}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold block relative after:absolute after:-bottom-1 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-400 after:to-red-500">
              {project.title}
            </h1>
            <span>{project.description}</span>
          </div>
          <ProjectImage img={project.img} imgMobile={project.imgMobile} />
        </div>
      ))}
    </div>
  );
}
