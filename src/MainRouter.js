import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Cv from "./components/cv/Cv";
import Contact from "./components/contact/Contact";

export default function MainRouter(content) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About content={content} />} />
          // dodat za projec
          <Route path="/projects" element={<Projects content={content} />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
