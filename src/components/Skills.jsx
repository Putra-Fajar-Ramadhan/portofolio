import React from 'react';
import { FaReact, FaLaravel, FaGithub, FaJava, FaPhp, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiCplusplus, SiKotlin } from 'react-icons/si';
import './Skills.css'; // Neon styling

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'NextJS', icon: <SiNextdotjs /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  return (
    <section
      id="skills"
      className="py-5 neon-section"
    >
      <div className="container animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 neon-title">Skills</h2>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center"
            >
              <div className="skill-icon neon-circle">
                <div className="skill-inner">{skill.icon}</div>
              </div>
              <p className="mt-2 fw-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
