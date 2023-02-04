import React from "react";
import "./Projects.css";
import {
  ProjectCard1,
  ProjectCard2,
  ProjectCard3,
  ProjectCard4,
  ProjectCard5,
  ProjectCard6,
} from "./ProjectsCard";

export default function Projects(content) {
  return (
    <div className="main-card">
      <div className="a">
        <ProjectCard1
          naslov={content.content.content.projects.todolist}
          content={content.content.content.description.todolist}
        />
      </div>
      <div className="a">
        <ProjectCard2
          naslov={content.content.content.projects.weatherApp}
          content={content.content.content.description.weatherApp}
        />
      </div>
      <div className="a">
        <ProjectCard3
          naslov={content.content.content.projects.videoApp}
          content={content.content.content.description.videoApp}
        />
      </div>
      <div className="a">
        <ProjectCard4
          naslov={content.content.content.projects.membershipApp}
          content={content.content.content.description.membershipApp}
        />
      </div>
      <div className="a">
        <ProjectCard5
          naslov={content.content.content.projects.mernTodo}
          content={content.content.content.description.mernTodo}
        />
      </div>{" "}
      <div className="a">
        <ProjectCard6
          naslov={content.content.content.projects.recommendationApp}
          content={content.content.content.description.recommendationApp}
        />
      </div>
    </div>
  );
}

// import React from "react";
// import "./Projects.css";
// import {
//   ProjectCard1,
//   ProjectCard2,
//   ProjectCard3,
//   ProjectCard4,
//   ProjectCard5,
//   ProjectCard6,
// } from "./ProjectsCard";

// export default function Projects(content) {
//   return (
//     <div className="main">
//       <div className="first">
//         <div>
//           <ProjectCard1
//             naslov={content.content.content.projects.todolist}
//             content={content.content.content.description.todolist}
//           />
//         </div>
//         <div>
//           <ProjectCard2
//             naslov={content.content.content.projects.weatherApp}
//             content={content.content.content.description.weatherApp}
//           />
//         </div>
//         <div>
//           <ProjectCard3
//             naslov={content.content.content.projects.videoApp}
//             content={content.content.content.description.videoApp}
//           />
//         </div>
//       </div>
//       <div className="second">
//         <div className="a">
//           <ProjectCard4
//             naslov={content.content.content.projects.membershipApp}
//             content={content.content.content.description.membershipApp}
//           />
//         </div>
//         <div className="a">
//           <ProjectCard5
//             naslov={content.content.content.projects.mernTodo}
//             content={content.content.content.description.mernTodo}
//           />
//         </div>{" "}
//         <div className="a">
//           <ProjectCard6
//             naslov={content.content.content.projects.recommendationApp}
//             content={content.content.content.description.recommendationApp}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
