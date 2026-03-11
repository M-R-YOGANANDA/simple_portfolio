// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Vite will automatically find Header.jsx
import Hero from './components/Hero';
import ProjectsStack from './components/ProjectsStack';
import TechStack from './components/TechStack';
import Contact from './components/Contact'; 
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectsStack />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;