import Header from "./components/shared/header/Header";
import MainRouter from "./MainRouter";
import React, { useEffect, useState } from "react";
import { getContent } from "./content/content";
// import background from "../src/assets/images/homepage.jpg";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("");
  const [content, setContent] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let lang = localStorage.getItem("lang");

    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage("en");
    }

    console.log(lang);

    let content = getContent(lang);
    setContent(content);
    setLoad(false);
  }, []);

  useEffect(() => {
    if (language === "") return;

    localStorage.setItem("lang", language);

    let content = getContent(language);
    setContent(content);
    console.log(content);
  }, [language]);

  return (
    <>
      {load && <div className="loading">Loading...</div>}
      {!load && (
        <div>
          <Header setLanguage={setLanguage} content={content} />
          <MainRouter content={content} />
        </div>
      )}
    </>
  );
}

export default App;
