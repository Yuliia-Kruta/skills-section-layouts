// Accordion

import { useState } from "react";

const Option4 = () => {

    const accordionSkills = [
        {
          title: "Programming Languages",
          skills: ["Java Core: Java Syntax, Java Collections Framework, Java I/O, Java AWT, Swing, Multithreading", "C# (.NET Core, ASP.NET)", "Python (Matplotlib, NumPy, PyGame libraries)", "C++", "Kotlin"]
        },
        {
          title: "Frameworks and Libraries",
          skills: ["Spring Framework: Spring Boot, Spring MVC, Spring Data JPA, Spring Security", "React", "JQuery", "Thymeleaf", "Bootstrap", "Hibernate"]
        },
        {
          title: "Web Technologies",
          skills: ["HTML5", "CSS3", "JavaScript"]
        },
        {
          title: "Tools and Platforms",
          skills: ["Maven", "Postman", "Git and GitHub", "Unreal Engine"]
        },
        {
          title: "Databases",
          skills: ["SQL", "MySQL", "PostgreSQL"]
        },
        {
          title: "Other Skills",
          skills: ["RESTful APIs", "OOP principles", "Data Structures and Algorithms", "Networking: TCP/IP stack, OSI model", "SDLC", "Agile Methodologies: Kanban, Scrum"]
        },
        {
          title: "Certifications",
          skills: ["Information Technology Specialist in Python Certification"]
        }
      ];
      
    const [openIndex, setOpenIndex] = useState(null);
      
    const toggleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return ( 
        <div className="accordion">
            {accordionSkills.map((item, index) => (
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