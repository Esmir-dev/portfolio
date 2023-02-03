import React from "react";
import "./About.css";

export default function About(content) {
  console.log(content.content.content);
  return (
    <div className="about">
      <div className="about_card">
        <h1 className="about_title">
          {/* style={{ fontSize: "2.9em" }} */}
          {content.content.content.about.title}
        </h1>

        <p
          className="home-about-body"
          style={{
            fontSize: "1.3em",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          {content.content.content.about.introduce}
        </p>
      </div>
    </div>
  );
}
