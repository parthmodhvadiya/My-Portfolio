import React from "react";
import "./Project.css";
import datavis from "../../assets/datavis.png"
import e_commerce from "../../assets/e-commerce.png"
import hotel1 from "../../assets/hotel1.png"
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
    image:e_commerce,
    description:
      "A modern and responsive e-commerce website built with React, offering seamless shopping, secure authentication, and smooth user experience.",
    link: "https://github.com/parthmodhvadiya/E-commerce-website/tree/master",
    title: "E-commerce Website",
  },
  // {
  //   image:carrer_guide,
  //   description:
  //     "An AI-powered career guidance system that provides personalized career paths, skill gap analysis, and learning recommendations based on user aspirations and abilities.",
  //   link: "https://github.com/parthmodhvadiya/career_guide_system",
  //   title: "career_guide_system",
  // }
  ,
  {
    image:hotel1,
    description: "A MERN stack project for Hotel Booking in Internship.",
    link: "https://github.com/Harshilkothiya/My-Hotel",
    title: "Hotel Bookling App",
  },
  {
    image:datavis,
    description:
      "Data visualization of Road accident and crime in india on Power BI.",
    link: "https://github.com/parthmodhvadiya/data-visualization",
    title: "Data visualization",
  },
  // {
  //   image:movie_reco,
  //   description:
  //     "Movies_IMDB is a content-based movie recommendation system that uses movie overviews and metadata to suggest personalized film recommendations, leveraging techniques like TF-IDF, cosine similarity, and genre-based filtering for accurate results.",
  //   link: "https://github.com/parthmodhvadiya/Movies_IMDB",
  //   title: "Bangalore Home Price Prediction",
  // }
  
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
