import React from "react";
import "./Project.css";
import ppsu from "../../assets/ppsu.jpg";
import mbv from "../../assets/mbv.jpg";
import hotel from "../../assets/hotel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import realestet from "../../assets/real_estet.png";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description:
      "Deepl learning Project to predict the Remaining Useful Life of Jet Engine.",
    link: "https://github.com/Harshilkothiya/Remaining-Useful-Life-RUL-of-Jet-Engine.git",
    title: "Remaining Useful Life of Jet Engine",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description:
      "An intelligent farming solution optimizing crop management through data-driven insights.",
    link: "https://github.com/Harshilkothiya/FarmSmart-Crop-Recommendation",
    title: "FarmSmart Crop Recommendation",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description:
      "Predict the probability of win of Team based on current state.",
    link: "https://github.com/Harshilkothiya/IPL-win-probability",
    title: "IPL win probability",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description: "Classify the celebrities based on face.",
    link: "https://github.com/Harshilkothiya/Sports-Celebrity-Image-Classification",
    title: "Sports Celebrity Image Classification",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description:
      "Data visualization of Road accident and crime in india on Power BI.",
    link: "https://github.com/Harshilkothiya/Data-visualization",
    title: "Data visualization",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description: "Check the whether the given 2 question are duplicate or not.",
    link: "https://github.com/Harshilkothiya/Duplicate-questions",
    title: "Duplicate questions",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description: "Predict the Next word.",
    link: "https://github.com/Harshilkothiya/Next-Word-Prediction",
    title: "Next Word Prediction",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description:
      " A machine learning model to estimate property prices based on location and features.",
    link: "https://github.com/Harshilkothiya/Bangalore-Home-Price-Prediction",
    title: "Bangalore Home Price Prediction",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description: "Real time chat app using socket-io.",
    link: "https://github.com/Harshilkothiya/ChatApp",
    title: "Chat App",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HAORUOo06nzdHoEfuFzsul1hN2R7vdgsA&s",
    description: "A MERN stack project for Hotel Booking.",
    link: "https://github.com/Harshilkothiya/My-Hotel",
    title: "Hotel Bookling App",
  },
  
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <section className="App" id="project">
      <h1>
        <FontAwesomeIcon id="work" icon={faCheckToSlot} />
        My <span>Work</span>
      </h1>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div data-aos="zoom-in" className="grid-item" key={index}>
            <img src={project.image} alt={project.title} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="project-title">
                {project.title}
                <FontAwesomeIcon id="rightarrow" icon={faArrowRight} />
              </h3>
            </a>
            <div className="overlay">
              <p data-aos="fade-down">{project.description}</p>{" "}
              {/* Description only on hover */}
              <button className="bton">
                <a href={project.link} target="_blank">View
                <FontAwesomeIcon id="eye" icon={faEye} /></a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
