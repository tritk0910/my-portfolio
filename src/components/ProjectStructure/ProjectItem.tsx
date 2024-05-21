import ProjectImage from "../shared/ProjectImage";
import { ProjectList } from "../experiences/projectList";
import ProjectDescription from "../shared/ProjectDescription";

export default function ProjectListStructure() {
  return (
    <div className="flex flex-col gap-20 xl:gap-40">
      {ProjectList.map((project, index) => (
        <div
          className={`flex gap-5 xl:gap-32 flex-col justify-center items-center ${
            project.reverse ? "xl:flex-row-reverse" : "xl:flex-row"
          }`}
          key={index}
        >
          <ProjectDescription project={project} reverse={project.reverse} />
          <ProjectImage
            img={project.img}
            imgMobile={project.imgMobile}
            reverse={project.reverse}
          />
        </div>
      ))}
    </div>
  );
}
