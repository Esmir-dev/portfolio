import React from "react";
import "./Menu.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

export default function Menu({ content }) {
  return (
    <>
      <a href="/" className="menu-link">
        <p className="menu-link">
          <AiOutlineHome />
        </p>

        <p className="menu_links">Home</p>
      </a>
      <a href="/about" className="menu-link">
        <p className="menu-link">
          <BsFillPersonFill />
        </p>
        <p className="menu_links">{content?.header.firstLink || ""}</p>
      </a>
      <a href="/projects" className="menu-link">
        <p className="menu-link">
          <AiOutlineFileDone />
        </p>
        <p className="menu_links">{content?.header.secondLink || ""}</p>
      </a>
      <a href="/cv" className="menu-link">
        <p className="menu-link">
          <FaAddressCard />
        </p>{" "}
        <p className="menu_links">{content?.header.thirdLink || ""}</p>
      </a>
      <a href="/contact" className="menu-link">
        <p className="menu-link">
          <FiPhoneCall />
        </p>{" "}
        <p className="menu_links">{content?.header.fourthLink || ""}</p>
      </a>
    </>
  );
}
