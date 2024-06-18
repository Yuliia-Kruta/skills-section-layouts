// Horizontal tabs

import { useState } from "react";

const Option3 = () => {

    const skillTabs = [
        {
          label: "Programming Languages",
          skills: ["Java Core: Java Syntax, Java Collections Framework, Java I/O, Java AWT, Swing, Multithreading", "C# (.NET Core, ASP.NET)", "Python (Matplotlib, NumPy, PyGame libraries)", "C++", "Kotlin"]
        },
        {
          label: "Frameworks and Libraries",
          skills: ["Spring Framework: Spring Boot, Spring MVC, Spring Data JPA, Spring Security", "React", "JQuery", "Thymeleaf", "Bootstrap", "Hibernate"]
        },
        {
          label: "Web Technologies",
          skills: ["HTML5", "CSS3", "JavaScript"]
        },
        {
          label: "Tools and Platforms",
          skills: ["Maven", "Postman", "Git and GitHub", "Unreal Engine"]
        },
        {
          label: "Databases",
          skills: ["SQL", "MySQL", "PostgreSQL"]
        },
        {
          label: "Other Skills",
          skills: ["RESTful APIs", "OOP principles", "Data Structures and Algorithms", "Networking: TCP/IP stack, OSI model", "SDLC", "Agile Methodologies: Kanban, Scrum"]
        },
        {
          label: "Certifications",
          skills: ["Information Technology Specialist in Python Certification"]
        }
      ];

    const [activeTab, setActiveTab] = useState(0);
        
    return ( 
        <div>
            <div className="tabs">
              {skillTabs.map((tab, index) => (
                <button
                  key={index}
                  className={index === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <ul>
                {skillTabs[activeTab].skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        );
}
 
export default Option3;