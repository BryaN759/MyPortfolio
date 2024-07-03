import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import ProblemSolving from './ProblemSolving';
import Databases from './Databases';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            <ProblemSolving />
            <Databases />
        </div>
    </section>
  );
}

export default Skills;