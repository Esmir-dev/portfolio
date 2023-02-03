import React, { useState, useEffect } from "react";
import { defaultOption } from "../../../components/util/util";
import Menu from "../menu/Menu";
import "./Header.css";

export default function Header({ setLanguage, content }) {
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLanguage(lang);
    defaultOption();
  }, [lang]);

  const changeHandler = (e) => {
    setLang(e.target.value);
  };

  return (
    <header>
      <div className="menu">
        <Menu content={content} />
        <select
          name="languages"
          id="languages"
          onChange={changeHandler}
          className="translate"
        >
          <option id="en" value="en">
            English
          </option>
          <option id="bh" value="bh">
            Bosnian
          </option>
        </select>
      </div>
    </header>
  );
}
