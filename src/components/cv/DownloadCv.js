import React from "react";
import resume from "../../assets/pdf/resume_EN.pdf";
import "./Download.css";
import { BsDownload } from "react-icons/bs";

const DownloadCv = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  //   const onButtonClick = () => {
  //     // using Java Script method to get PDF file
  //     fetch("resume").then((response) => {
  //       response.blob().then((blob) => {
  //         // Creating new object of PDF file
  //         const fileURL = window.URL.createObjectURL(blob);
  //         // Setting various property values
  //         let alink = document.createElement("a");
  //         alink.href = fileURL;
  //         alink.download = "resume";
  //         alink.click();
  //       });
  //     });
  //   };
  //   return (
  //     <>
  //       <center>
  //         <button onClick={onButtonClick}>Download CV</button>
  //       </center>
  //     </>
  //   );

  return (
    <div className="download_main">
      <a href={resume} download>
        <button className="download_btn">
          Download <BsDownload />
        </button>
      </a>
    </div>
  );
};

export default DownloadCv;
