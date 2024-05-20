import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { afterLightBgColor } from "../theme/color";

interface Props {
  github: string;
  live?: string;
}

export default function ProjectLink({ github, live }: Props) {
  return (
    <div className="flex gap-7 justify-center items-center text-xl tracking-widest font-cocogoose">
      <a
        target="_blank"
        href={github}
        className={`flex gap-2 relative ${afterLightBgColor}`}
      >
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
        <span>Code</span>
      </a>
      <a
        target="_blank"
        href={live}
        className={`flex gap-2 relative ${afterLightBgColor}`}
      >
        <FontAwesomeIcon icon={faShareFromSquare} className="w-6 h-6" />
        Live
      </a>
    </div>
  );
}
