import ProjectImage from "../shared/ProjectImage";
import { ProjectList } from "../experiences/projectList";
import ProjectDescription from "../shared/ProjectDescription";
export default function ProjectListStructure() {
  return (
    <div className="flex flex-col gap-40">
      {ProjectList.map((project, index) => (
        <div
          className={`flex gap-32 ${project.reverse && "flex-row-reverse"}`}
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
