"use client";

import { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector(".progress-bar");
            const percentage = progressBar.getAttribute("data-percentage");
            progressBar.style.width = `${percentage}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillsRef.current.forEach((skill) => {
      observer.observe(skill);
    });

    return () => {
      skillsRef.current.forEach((skill) => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  const skills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "JavaScript", percentage: 70 },
    { name: "React", percentage: 90 },
    { name: "React Native", percentage: 60 },
    { name: "Java", percentage: 40 },
    { name: "MongoDB", percentage: 50 },
    { name: "Spring Boot", percentage: 40 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content animate-on-scroll">
          <div className="skills-text">
            <h3>What I Bring to the Table</h3>
            <p>
              With a solid foundation in web development and a passion for
              crafting seamless user experiences, I specialize in front-end
              development while also exploring back-end technologies like Spring
              Boot. My skill set enables me to build responsive, scalable, and
              visually engaging web applications that deliver results.
            </p>
            <p>
              I'm constantly learning and expanding my knowledge to stay current
              with the latest industry trends and technologies.
            </p>
          </div>
          <div className="skills-bars">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                ref={(el) => (skillsRef.current[index] = el)}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
