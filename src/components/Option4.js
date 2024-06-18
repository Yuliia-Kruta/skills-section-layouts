// Accordion

import { useState } from "react";
import { skills } from "../data/skills";

const Option4 = () => {
      
    const [openIndex, setOpenIndex] = useState(null);
      
    const toggleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return ( 
        <div className="accordion">
            {skills.map((item, index) => (
              <div key={index} className="accordion-item">
                <button className="accordion-header" onClick={() => toggleOpen(index)}>
                  {item.title}
                </button>
                {openIndex === index && (
                  <div className="accordion-content">
                    <ul>
                      {item.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
     );
}
 
export default Option4;