import React from "react";
import "./Exp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faBuilding,
  faCode,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Exp = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <FontAwesomeIcon icon={faBriefcase} /> Work <span>Experience</span>
      </h2>

      <p className="quote">"Every experience makes you grow"</p>

      <div className="experience-container"> 
        <div className="experience-card" data-aos="fade-left">
          <div className="experience-header">
            <div className="experience-title">
              <h3>IMMunoQuest: Kaggle Competition</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Charotar University, Gujarat
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              15 feb 2024
            </div>
          </div>
          <p className="experience-description">
            Developed a deep learning-based classification model to accurately
            categorize white blood cells (WBCs) into five critical types
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              CNN
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Deep Learning
            </span>
          </div>
        </div>

        <div className="experience-card" data-aos="fade-left">
          <div className="experience-header">
            <div className="experience-title">
              <h3>Web Developer</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Infonium Technologies
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              May 2024 - June 2024
            </div>
          </div>
          <p className="experience-description">
            Completed an intensive web development internship, working on
            real-world projects and gaining hands-on experience with modern web
            technologies.
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              React.js
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Node.js
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              MongoDB
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Express
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              JavaScript
            </span>
          </div>
        </div>

      </div>

      <div className="back-btn" data-aos="fade-up">
        <a href="/#home">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  );
};

export default Exp;
