import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { CgMediaLive } from "react-icons/cg";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <div className="project__buttons">
        <a
          href={item.link}
          className="project__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        {item.url && (
          <a
            href={item.url}
            className="project__demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <CgMediaLive className="project__demo-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
