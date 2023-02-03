import React from "react";
import "./ProjectsCard.css";
import weather from "../../assets/images/weather-app.jpg";
import videoBrowser from "../../assets/images/video-browser.jpg";
import todo from "../../assets/images/todo.jpg";
import membership from "../../assets/images/membership.jpg";
import todoB from "../../assets/images/todo0.jpg";
import recommendation from "../../assets/images/recommendation.jpg";
import { FaGithub } from "react-icons/fa";

const ProjectCard1 = (content) => {
  // console.log("test");
  // console.log(content);
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={todoB} alt="todo" width="350" height="170" />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">{content.content}</div>
      <button
        onClick={() => window.open("https://github.com/Esmir-dev/to-do-list")}
      >
        <FaGithub />
        &nbsp; GitHub
      </button>
    </div>
  );
};
const ProjectCard2 = (content) => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={weather} alt="weather" width="350" height="170" />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">
        {content.content}
        {/*  */}
      </div>
      <button
        onClick={() => window.open("https://github.com/Esmir-dev/weather-app2")}
      >
        <FaGithub />
        &nbsp; Git Hub
      </button>
    </div>
  );
};
const ProjectCard3 = (content) => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={videoBrowser} alt="videoBrowser" width="350" height="170" />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">{content.content}</div>
      <button
        onClick={() =>
          window.open("https://github.com/Esmir-dev/video-browser")
        }
      >
        <FaGithub />
        &nbsp; GitHub
      </button>
    </div>
  );
};
const ProjectCard4 = (content) => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={membership} alt="membership" width="350" height="170" />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">{content.content}</div>
      <button
        onClick={() => window.open("https://github.com/Esmir-dev/membership")}
      >
        <FaGithub />
        &nbsp; GitHub
      </button>
    </div>
  );
};
const ProjectCard5 = (content) => {
  console.log(content);
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={todo} alt="todoMern" width="350" height="170" />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">{content.content}</div>
      <button
        onClick={() =>
          window.open("https://github.com/Esmir-dev/task_mern_todo")
        }
      >
        <FaGithub />
        &nbsp; GitHub
      </button>
    </div>
  );
};

const ProjectCard6 = (content) => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img
          src={recommendation}
          alt="recommendation"
          width="350"
          height="170"
        />
      </div>
      <div className="card_title">
        <b>{content.naslov}</b>
      </div>
      <div className="card_content">{content.content}</div>
      <button
        onClick={() =>
          window.open("https://github.com/Esmir-dev/recommendation-app")
        }
      >
        <FaGithub />
        &nbsp; GitHub
      </button>
    </div>
  );
};

export {
  ProjectCard1,
  ProjectCard2,
  ProjectCard3,
  ProjectCard4,
  ProjectCard5,
  ProjectCard6,
};
