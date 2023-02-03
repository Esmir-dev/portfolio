import React from "react";
import resume from "../../assets/pdf/Neretljak_Esmir.pdf";
import "./Download.css";
import { BsDownload } from "react-icons/bs";

const DownloadCv = () => {
  return (
    <div className="download_main">
      <a href={resume} download>
        <button
          className="download_btn"
          style={{
            width: "200px",
          }}
        >
          Download resume &nbsp;&nbsp;
          <BsDownload />
        </button>
      </a>
    </div>
  );
};

export default DownloadCv;
