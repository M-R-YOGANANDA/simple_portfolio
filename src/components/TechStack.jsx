// src/components/TechStack.jsx
import React from 'react';
import './TechStack.css'; 

const techStack = [
  { name: 'Git', icon: '🔧' },
  { name: 'VS Code', icon: '💻' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'Github', icon: '☁️' },
];

const TechStack = () => {
  return (
    <section className="ts-section" id="stack">
      <div className="ts-container">
        <h2 className="ts-title">TECH STACK</h2>
        <div className="ts-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="ts-card">
              <span className="ts-icon">{tech.icon}</span>
              <span className="ts-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 