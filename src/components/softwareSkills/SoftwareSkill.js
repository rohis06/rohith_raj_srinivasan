// import React from "react";
// import "./SoftwareSkill.scss";
// import {skillsSection} from "../../portfolio";

// export default function SoftwareSkill() {
//   return (
//     <div>
//       <div className="software-skills-main-div">
//         <ul className="dev-icons">
//           {skillsSection.softwareSkills.map((skills, i) => {
//             return (
//               <li
//                 key={i}
//                 className="software-skill-inline"
//                 name={skills.skillName}
//               >
//                 <i className={skills.fontAwesomeClassname}></i>
//                 <p>{skills.skillName}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((category, i) => {
          return (
            <div key={i}>
              <h2 className="category-title">{category.category}</h2>
              <div/>
              <ul className="dev-icons">
                {category.skills.map((skill, j) => (
                  <li key={j} className="software-skill-inline">
                    <img
                      src={require(`../../assets/images/skills/svg/${skill.fileName}.svg`)}
                      alt={skill.skillName}
                    />
                    <p className="skill-name">{skill.skillName}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}


