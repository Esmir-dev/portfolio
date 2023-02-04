import React, { useState } from "react";
import "./Menu.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

export default function Menu({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="main-nav">
      <button className="hamburger-button" onClick={() => toggleOpen()}>
        &#9776;
      </button>
      <div className={`menu-items ${isOpen ? "show" : "hide"}`}>
        <a href="/" className="menu-link">
          <AiOutlineHome />
          <p className="menu_links">Home</p>
        </a>
        <a href="/about" className="menu-link">
          <BsFillPersonFill />
          <p className="menu_links">{content?.header.firstLink || ""}</p>
        </a>
        <a href="/projects" className="menu-link">
          <AiOutlineFileDone />
          <p className="menu_links">{content?.header.secondLink || ""}</p>
        </a>
        <a href="/cv" className="menu-link">
          <FaAddressCard />
          <p className="menu_links">{content?.header.thirdLink || ""}</p>
        </a>

        <a href="/contact" className="menu-link">
          <FiPhoneCall />
          <p className="menu_links">{content?.header.fourthLink || ""}</p>
        </a>
      </div>
    </nav>
  );
}

// import React, { useState } from "react";
// import "./Menu.css";
// import { AiOutlineHome } from "react-icons/ai";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaAddressCard } from "react-icons/fa";
// import { AiOutlineFileDone } from "react-icons/ai";
// import { FiPhoneCall } from "react-icons/fi";

// export default function Menu({ content }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="nesto">
//         <a href="/" className="menu-link">
//           <p className="menu-link">
//             <AiOutlineHome />
//           </p>

//           <p className="menu_links">Home</p>
//         </a>
//         <a href="/about" className="menu-link">
//           <p className="menu-link">
//             <BsFillPersonFill />
//           </p>
//           <p className="menu_links">{content?.header.firstLink || ""}</p>
//         </a>
//         <a href="/projects" className="menu-link">
//           <p className="menu-link">
//             <AiOutlineFileDone />
//           </p>
//           <p className="menu_links">{content?.header.secondLink || ""}</p>
//         </a>
//         <a href="/cv" className="menu-link">
//           <p className="menu-link">
//             <FaAddressCard />
//           </p>{" "}
//           <p className="menu_links">{content?.header.thirdLink || ""}</p>
//         </a>
//         <a href="/contact" className="menu-link">
//           <p className="menu-link">
//             <FiPhoneCall />
//           </p>{" "}
//           <p className="menu_links">{content?.header.fourthLink || ""}</p>
//         </a>
//       </div>
//       {isOpen ? (
//         <div className="main_small_screen">
//           <a href="/" className="menu-link">
//             <p className="menu-link">
//               <AiOutlineHome />
//             </p>

//             <p className="menu_links">Home</p>
//           </a>
//           <a href="/about" className="menu-link">
//             <p className="menu-link">
//               <BsFillPersonFill />
//             </p>
//             <p className="menu_links">{content?.header.firstLink || ""}</p>
//           </a>
//           <a href="/projects" className="menu-link">
//             <p className="menu-link">
//               <AiOutlineFileDone />
//             </p>
//             <p className="menu_links">{content?.header.secondLink || ""}</p>
//           </a>
//           <a href="/cv" className="menu-link">
//             <p className="menu-link">
//               <FaAddressCard />
//             </p>{" "}
//             <p className="menu_links">{content?.header.thirdLink || ""}</p>
//           </a>
//           <a href="/contact" className="menu-link">
//             <p className="menu-link">
//               <FiPhoneCall />
//             </p>{" "}
//             <p className="menu_links">{content?.header.fourthLink || ""}</p>
//           </a>
//         </div>
//       ) : (
//         <div onClick={() => setIsOpen(!isOpen)}>esmir</div>
//       )}
//     </>
//   );
// }
