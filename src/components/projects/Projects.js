import React from "react";
import "./Projects.css";
import {
  ProjectCard1,
  ProjectCard2,
  ProjectCard3,
  ProjectCard4,
  ProjectCard5,
  ProjectCard6,
} from "./ProjectsCard";

export default function Projects(content, description) {
  return (
    <div className="main">
      <div className="first">
        <div>
          <ProjectCard1
            content={content.content.content.projects.todolist}
            description={content.content.content.description.todolist}
          />
        </div>
        <div>
          <ProjectCard2 content={content.content.content.projects.weatherApp} />
        </div>
        <div>
          <ProjectCard3 content={content.content.content.projects.videoApp} />
        </div>
      </div>
      <div className="second">
        <div className="a">
          <ProjectCard4
            content={content.content.content.projects.membershipApp}
          />
        </div>
        <div className="a">
          <ProjectCard5 content={content.content.content.projects.mernTodo} />
        </div>
        <div className="a">
          <ProjectCard6
            content={content.content.content.projects.sixthProject}
          />
        </div>
      </div>
    </div>
  );
}
