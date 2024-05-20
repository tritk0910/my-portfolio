import ProjectLink from "./ProjectLink";
import { afterBgColor } from "../theme/color";

type Props = {
  project: {
    title: string;
    description: string;
    github: string;
    live?: string;
  };
};

export default function ProjectDescription({ project }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[550px]">
      <h1
        className={`font-heavitas tracking-widest text-4xl relative ${afterBgColor}`}
      >
        {project.title}
      </h1>
      <p className="text-[rgb(255,255,255,0.75)]">{project.description}</p>
      <ProjectLink github={project.github} live={project.live} />
    </div>
  );
}
