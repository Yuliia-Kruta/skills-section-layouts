// Data for categorised list with icons (option 1)

const Option1 = () => {
    const skills = [
        {
          category: "Programming Languages",
          skills: ["Java Core: Java Syntax, Java Collections Framework, Java I/O, Java AWT, Swing, Multithreading", "C# (.NET Core, ASP.NET)", "Python (Matplotlib, NumPy, PyGame libraries)", "C++", "Kotlin"]
        },
        {
          category: "Frameworks and Libraries",
          skills: ["Spring Framework: Spring Boot, Spring MVC, Spring Data JPA, Spring Security", "React", "JQuery", "Thymeleaf", "Bootstrap", "Hibernate"]
        },
        {
          category: "Web Technologies",
          skills: ["HTML5", "CSS3", "JavaScript"]
        },
        {
          category: "Tools and Platforms",
          skills: ["Maven", "Postman", "Git and GitHub", "Unreal Engine"]
        },
        {
          category: "Databases",
          skills: ["SQL", "MySQL", "PostgreSQL"]
        },
        {
          category: "Other Skills",
          skills: ["RESTful APIs", "OOP principles", "Data Structures and Algorithms", "Networking: TCP/IP stack, OSI model", "SDLC", "Agile Methodologies: Kanban, Scrum"]
        },
        {
          category: "Certifications",
          skills: ["Information Technology Specialist in Python Certification"]
        }
      ];
    return ( 
            <div>
              {skills.map((skillCategory) => (
                <div key={skillCategory.category}>
                  <h3>{skillCategory.category}</h3>
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