import React from "react";
import "./Cv.css";
import resume from "../../assets/pdf/Neretljak_Esmir.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import DownloadCv from "./DownloadCv";

export default function Cv() {
  return (
    <div className="cv_main" style={{ width: "100%", height: "auto" }}>
      <DownloadCv style={{ height: "30px" }} />
      <Document file={resume} className="pdf_doc">
        <Page
          className="react-pdf_Page"
          pageNumber={1}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
}
