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
        <div className="experience-card" data-aos="fade-right">
          <div className="experience-header">
            <div className="experience-title">
              <h3>Data Scientist</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Self Employed
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Oct 2023 - Present
            </div>
          </div>
          <p className="experience-description">
            Working as a self-employed Data Scientist, focusing on implementing
            cutting-edge machine learning solutions and data analysis techniques
            to solve complex business problems.
          </p>
          <div className="experience-skills">
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Python
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Machine Learning
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Data Analysis
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Deep Learning
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              AI
            </span>
          </div>
        </div>

        <div className="experience-card" data-aos="fade-left">
          <div className="experience-header">
            <div className="experience-title">
              <h3>DoseHack’24 Hackathon</h3>
              <div className="experience-company">
                <FontAwesomeIcon icon={faBuilding} />
                Charotar University, Gujarat
              </div>
            </div>
            <div className="experience-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              25-26 Sep 2024
            </div>
          </div>
          <p className="experience-description">
            In DoseHack’24, where I developed autonomous warehouse bots to
            enhance operational efficiency and reduce human error. <br />Showcased the potential of AI/ML in revolutionizing warehouse operations.
          </p>

          <div className="experience-skills">
          <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Problem Solving
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              AI
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Machine Learning
            </span>
            <span className="skill-tag">
              <FontAwesomeIcon icon={faCode} />
              Python
            </span>
          </div>
        </div>

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
            Developing a deep learning-based classification model to accurately
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
                CLUMOSS
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
