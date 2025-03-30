import React from "react";
import "./Exp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBriefcase, 
    faCalendarAlt, 
    faBuilding,
    faCode,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const Exp = () => {
    return (
        <section className="experience" id="experience">
            <h2 className="heading">
                <FontAwesomeIcon icon={faBriefcase} /> Work <span>Experience</span>
            </h2>
            
            <p className="quote">
                "Every experience makes you grow"
            </p>

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
                        Working as a self-employed Data Scientist, focusing on implementing cutting-edge machine learning solutions
                        and data analysis techniques to solve complex business problems.
                    </p>
                    <div className="experience-skills">
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Python</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Machine Learning</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Data Analysis</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Deep Learning</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />AI</span>
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
                        Completed an intensive web development internship, working on real-world projects
                        and gaining hands-on experience with modern web technologies.
                    </p>
                    <div className="experience-skills">
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />React.js</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Node.js</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />MongoDB</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Express</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />JavaScript</span>
                    </div>
                </div>

                <div className="experience-card" data-aos="fade-right">
                    <div className="experience-header">
                        <div className="experience-title">
                            <h3>Web Developer</h3>
                            <div className="experience-company">
                                <FontAwesomeIcon icon={faBuilding} />
                                Bharat Intern
                            </div>
                        </div>
                        <div className="experience-date">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            Feb 2024 - March 2024
                        </div>
                    </div>
                    <p className="experience-description">
                        Participated in an enriching internship program focused on web development,
                        contributing to various projects and enhancing technical skills.
                    </p>
                    <div className="experience-skills">
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />HTML/CSS</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />JavaScript</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />React</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Bootstrap</span>
                        <span className="skill-tag"><FontAwesomeIcon icon={faCode} />Git</span>
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
