import React from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Contact(content) {
  return (
    <div className="contact_main">
      <div className="contact_card">
        <h1 style={{ fontSize: "1.5em", textTransform: "uppercase" }}>
          {content.content.content.contact.contactMe}
        </h1>
        <ul>
          <li>
            <a
              href="https://github.com/Esmir-dev"
              target="blanc"
              className="github_icon"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100008616545249"
              target="blanc"
              className="github_icon"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/esmir-neretljak/"
              target="blanc"
              className="github_icon"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="#" target="blanc" className="github_icon">
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
