// Bento-styled grid layout

import { skills } from "../data/skills";

const Option2 = () => {

    return ( 
        <div className="skills-bento">
          {skills.map((category) => (
            <div key={category.title} className={`skill-category ${category.area}`}>
              <h4>{category.title}</h4>
              <ul>
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
     );
}
 
export default Option2;
