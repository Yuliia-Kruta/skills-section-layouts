// Horizontal tabs

import { useState } from "react";
import { skills } from "../data/skills";

const Option3 = () => {

    const [activeTab, setActiveTab] = useState(0);
        
    return ( 
        <div>
          <h1>Layout 3: Tabs</h1>
            <div className="tabs">
              {skills.map((tab, index) => (
                <button
                  key={index}
                  className={index === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <ul>
                {skills[activeTab].skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        );
}
 
export default Option3;