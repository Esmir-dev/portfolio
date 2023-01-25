import React from "react";
import "./ProjectsCard.css";
import weather from "../../assets/images/weather-app.jpg";
import videoBrowser from "../../assets/images/video-browser.jpg";
import todo from "../../assets/images/todo.jpg";
import membership from "../../assets/images/membership.jpg";
import todoB from "../../assets/images/todo0.jpg";
import { FaGithub } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const ProjectCard1 = (content) => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={todoB} alt="bla" width="350" height="180" />
      </div>
      <div className="card_title">
        <b>{content.content}</b>
      </div>
      <div className="card_content">
        {content.content.description}
        {/* Simple Todo application. Basic frontend application made in javascript
        framework; React. There are input and button. User can add item, and the
        same one can edit and delete. Data is saved in localStorage. The newest
        item is set at the top of list. Application is good for everyday use. */}
      </div>
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
        <img src={weather} alt="bla" width="350" height="180" />
      </div>
      <div className="card_title">
        <b>{content.content}</b>
      </div>
      <div className="card_content">
        Weather app is an application that provide users with the current
        weather conditions, including temperature in Celzius, weather conditions
        as well, as wind speed and direction, day or night. If enter non-exist
        city-name, there will show an error. Check the weather in your city.
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
        <img src={videoBrowser} alt="bla" width="350" height="180" />
      </div>
      <div className="card_title">
        <b>{content.content}</b>
      </div>
      <div className="card_content">
        Frontend app where you can search youtube videos. After you enter the
        name of the video, it will show you 5 videos, in order like on youtube
        platform. Application built in React js, using axios librery to connect
        to youtube platform. Also used css frameworks.
      </div>
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
        <img src={membership} alt="bla" width="350" height="180" />
      </div>
      <div className="card_title">
        <b>{content.content}</b>
      </div>
      <div className="card_content">
        Membership App is a basic full stack MERN application. We built this
        part of app with CRUD operations and authentication-authorization (AUTH)
        capabilities. Also we created frontend side of application. We added
        interactive user interface to the basic user and auth features.
      </div>
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
        <img src={todo} alt="bla" width="350" height="180" />
      </div>
      <div className="card_title">
        <b>{content.content}</b>
      </div>
      <div className="card_content">
        The app contains signup and login/out inputs (author/authent). There are
        4 todo categories where we can manually move items from one category to
        another using drag & drop method. We can also add a new category or a
        new task, and we can edit or delete a task or category.
      </div>
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

const ProjectCard6 = () => {
  return (
    <div className="card_project">
      <div className="card_image">
        <img src={weather} alt="bla" width="250" height="180" />
      </div>
      <div className="card_title">
        <b>Weather App</b>
      </div>
      <div className="card_content">
        Weather application is an application that provide users with the
        current weather conditions, including temperature in Celzius, weather
        conditions as well, as wind speed and direction.
      </div>
      <button
        onClick={() => window.open("https://github.com/Esmir-dev/weather-app2")}
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
