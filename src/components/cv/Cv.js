import React, { useState, useEffect } from "react";
import "./Cv.css";
import resume from "../../assets/pdf/resume_EN.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import DownloadCv from "./DownloadCv";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Cv() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div className="main_cv" style={{ width: "100%", height: "50%" }}>
      <DownloadCv style={{ height: "30px" }} />
      <nav className="navigation_btn">
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
      </nav>

      <Document
        className="pdf_doc"
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          className="react-pdf_Page"
        />
      </Document>
    </div>
  );
}
