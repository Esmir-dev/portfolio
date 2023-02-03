import React from "react";
import profile from "../../assets/images/profile.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="top">
          <img src={profile} alt="esmir" className="top-image" />
        </div>

        <div className="bottom">
          <p className="bottom-text">
            <br />
            <span className="bottom-tittle">Esmir Neretljak</span> <br />
            <span className="bottom-tittle-small">
              MERN Stack Developer
            </span>{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
