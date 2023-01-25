import React from "react";
import "./About.css";
// import { getContent } from "../../content/content";

export default function About(content) {
  console.log(content.content.content);
  return (
    <div className="about">
      <div className="about_card">
        <h1 style={{ fontSize: "2.9em" }}>
          {/* {content.content.content?.about.first || ""}{" "} */}
          LET ME
          <span className="blue"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body" style={{ fontSize: "20px" }}>
          I am Junior Software Developer. <br />
          <br /> I fell in love with programming and I have at least learnt
          something through IT education and self-study.
          <br />
          <br />
          I've been learning programming for over a year and a half, especially
          the MERN stack technology{" "}
          <i>
            <b className="blue">
              Javascript, ReactJS, NodeJS, Express, MongoDb.{" "}
            </b>
          </i>
          <br />
          <br />I also use{" "}
          <i>
            <b className="blue">Html, Css</b>
          </i>{" "}
          and css frameworks like{" "}
          <i>
            <b className="blue">Material-UI, Bootstrap, React-Bootstrap...</b>
          </i>
          <br />
          <br />
          My field of Interest's are building new &nbsp;
          <i>
            <b className="blue">Web Applications and Products </b> and also in
            areas related to{" "}
            <b className="blue">
              Deeper Research Into the Work Of These And New Technologies
            </b>
          </i>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <b className="blue">Node.js and MongoDB</b>
          <br />
          <br />I am looking for an{" "}
          <i>
            <b className="blue">Opportunity</b>
          </i>{" "}
          to start my IT career and show my{" "}
          <i>
            <b className="blue">Passion For Programming.</b>
          </i>{" "}
          <br />
          <br /> I wish for a{" "}
          <i>
            <b className="blue">Good Environment And Mentoring,</b>
          </i>{" "}
          so that I could develop as quickly and better as possible, because
          independent learning can sometimes be quite difficult.
          <br />
          <br />
          You can find more information about me, my education and skills in the
          <i>
            <b className="blue"> CV section.</b>
          </i>
        </p>
      </div>
    </div>
  );
}
