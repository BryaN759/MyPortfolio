import React, { useState } from "react";
import DjangoResume from "../../assets/DjangoResume.pdf";
import MERNResume from "../../assets/MERNResume.pdf";
import "./about.css";
import { FaChevronDown } from "react-icons/fa";

const ResumeModal = ({ closeModal }) => {
  const resumes = {
    Django: DjangoResume,
    MERN: MERNResume,
  };

  const [activeResume, setActiveResume] = useState("Django");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (resume) => {
    setActiveResume(resume);
    setIsOpen(false);
  };

  return (
    <div className="background-blur">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Resume Preview</h2>
            <button onClick={closeModal} className="close-btn">
              ×
            </button>
          </div>
          <div className="selection-header">
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-selected"
                onClick={() => setIsOpen(!isOpen)}
              >
                {activeResume} Resume
                <FaChevronDown className="dropdown-icon" />
              </div>
              {isOpen && (
                <div className="custom-dropdown-options">
                  {Object.keys(resumes).map((resume) => (
                    <div
                      key={resume}
                      className={`custom-dropdown-option ${
                        activeResume === resume ? "active" : ""
                      }`}
                      onClick={() => handleSelection(resume)}
                    >
                      {resume} Resume
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="modal-body">
            <iframe
              src={resumes[activeResume]}
              title="Resume Preview"
              className="resume-preview"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
