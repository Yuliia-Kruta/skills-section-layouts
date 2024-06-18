// Bento-styled grid layout

const Option2 = () => {

    const skillsBento = [
        {
          title: "Java Core",
          skills: ["Java Syntax", "Java Collections Framework", "Java I/O", "Java AWT", "Swing", "Multithreading"],
          area: "java-core"
        },
        {
          title: "Spring Framework",
          skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security"],
          area: "spring-framework"
        },
        {
          title: "Web Technologies",
          skills: ["HTML5", "CSS3", "JavaScript", "React", "JQuery", "Thymeleaf", "Bootstrap"],
          area: "web-technologies"
        },
        {
          title: "Programming Languages",
          skills: ["Java", "C# (.NET Core, ASP.NET)", "Python (Matplotlib, NumPy, PyGame libraries)", "C++", "Kotlin", "R"],
          area: "programming-languages"
        },
        {
          title: "ORM",
          skills: ["Hibernate"],
          area: "orm"
        },
        {
          title: "Databases",
          skills: ["SQL", "MySQL", "PostgreSQL", "SQL Server"],
          area: "databases"
        },
        {
          title: "Other Skills",
          skills: ["RESTful APIs", "OOP principles", "Data Structures and Algorithms", "Networking: TCP/IP stack, OSI model", "SDLC", "Agile Methodologies: Kanban, Scrum"],
          area: "other-skills"
        },
        {
          title: "Tools",
          skills: ["Maven", "Postman", "Git and GitHub", "Figma", "Unreal Engine"],
          area: "tools"
        },
        {
          title: "Certifications",
          skills: ["Information Technology Specialist in Python Certification", "Information Technology Specialist in SQL Certification"],
          area: "certifications"
        }
      ];
    
    return ( 
        <div className="skills-bento">
          {skillsBento.map((category) => (
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
