import React from "react";

const skills = [
  { name: "HTML", description: "Master the structure of web pages." },
  { name: "CSS", description: "Style and design beautiful web pages." },
  { name: "React JS", description: "Build dynamic user interfaces with React." },
  { name: "GitHub", description: "Collaborate and manage your codebase." },
  { name: "Blazor", description: "Build interactive web UIs with C#." },
  { name: "Git", description: "Version control made easy." },
  { name: "Networking", description: "Understand the backbone of connectivity." },
  { name: "Docker", description: "Containerize your applications with ease." },
  { name: "SQL Server", description: "Efficient database management and queries." },
  { name: "Kali Linux", description: "Explore penetration testing tools for security." },
  { name: "Oracle", description: "Manage enterprise-level databases seamlessly." },
  { name: "Jenkins", description: "Automate your CI/CD pipelines effortlessly." },
  { name: "CI/CD", description: "Streamline development workflows." },
  { name: "JavaScript", description: "Add interactivity to your web applications." },
  { name: "MongoDB", description: "Work with NoSQL databases effectively." },
  { name: "Node JS", description: "Create robust back-end applications." },
  { name: "Information Security", description: "Protect your digital assets." },
  { name: "Problem Solving", description: "Tackle challenges with logical solutions." },
  { name: "OOP", description: "Organize your code with object-oriented programming." },
];

const Cards = () => {
  return (
  
    <div className="h-[40%] mb-10 mt-20 ">
<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Skills 
     </h2>
      <div id="cards" className="h-[50%] bg-gradient-to-r overflow-auto flex items-center justify-start flex-nowrap gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-full w-[300px] p-5 rounded-xl shadow-lg ${
              index % 2 === 0 ? "bg-gradient-to-r bg-neutral-500" : "bg-gradient-to-r bg-slate-500"
            }`}
          >
            <div className="flex justify-between">
              <h3 className="py-1 px-3 text-sm bg-white text-gray-800 rounded">Skill Level</h3>
              <h4 className="text-sm">{new Date().toLocaleDateString()}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-bold">{skill.name}</h2>
            <p className="text-sm mt-3">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Cards;
