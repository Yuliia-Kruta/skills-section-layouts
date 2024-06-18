// Categorised list with icons (option 1)

import { skills } from "../data/skills";

const Option1 = () => {
    
    return ( 
            <div>
              <h1>Layout 1: Lists</h1>
              {skills.map((skillCategory) => (
                <div key={skillCategory.title}>
                  <h3>{skillCategory.title}</h3>
                  <ul>
                    {skillCategory.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
}
 
export default Option1;