import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Recent Projects</span>

      {/* <div className="warning-box">
        <AiOutlineWarning className="warning-icon" />
        <span>
          Note: Projects that are deployed take 2-3 minutes to load if inactive
          for some time, please be patient.
        </span>
      </div> */}

      <Projects />
    </section>
  );
};

export default Portfolio;
