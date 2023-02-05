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

export default function Projects(content) {
  return (
    <div className="main_card">
      <div className="a">
        <ProjectCard1
          name={content.content.content.projects.todolist}
          content={content.content.content.description.todolist}
        />
      </div>
      <div className="a">
        <ProjectCard2
          name={content.content.content.projects.weatherApp}
          content={content.content.content.description.weatherApp}
        />
      </div>
      <div className="a">
        <ProjectCard3
          name={content.content.content.projects.videoApp}
          content={content.content.content.description.videoApp}
        />
      </div>
      <div className="a">
        <ProjectCard4
          name={content.content.content.projects.membershipApp}
          content={content.content.content.description.membershipApp}
        />
      </div>
      <div className="a">
        <ProjectCard5
          name={content.content.content.projects.mernTodo}
          content={content.content.content.description.mernTodo}
        />
      </div>{" "}
      <div className="a">
        <ProjectCard6
          name={content.content.content.projects.recommendationApp}
          content={content.content.content.description.recommendationApp}
        />
      </div>
    </div>
  );
}
