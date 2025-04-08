import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Typed from "typed.js"
// import mine from "../../assets/mine.png";
// import ParticlesComponent from "../Particles/Particles";
// import mine1 from "../../assets/mine1.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

    const [showScrollButton, setShowScrollButton] = useState(false);

// Show button when user scrolls down
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section");
      let scrollPos = window.scrollY + 200; // Adding offset for better accuracy

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= offset && scrollPos < offset + height) {
          setActiveSection(`#${id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: [
        "Full stack Development",
        "Frontend Development",
        "Backend Development",
        "Python Developer",
        "Data Science",
        "Data Analysis",
        "Machine Learning",
        "Deep Learning",
        "NLP",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });
  
    return () => {
      typed.destroy(); // Cleanup to avoid memory leaks
    };
  }, []);

  // Background Animation Logic
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    if (bgAnimation) {
      const numberOfColorBoxes = 400;
      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        bgAnimation.append(colorBox);
      }
    }
  }, []);

  

  return (
    <>
      {/* Background Animation */}
      {/* <div className="bgAnimation" id="bgAnimation">
        <div className="backgroundAmim"></div>
      </div> */}
      {/* Navbar */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <a href="/" className="logo">
        Parth Modhvadiya
        </a>
        <FontAwesomeIcon
          id="menu"
          icon={menuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={toggleMenu}
        />
        <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
          <ul>
            <li>
              <a className={activeSection === `#home` ? "active" : ""} href="#home">
                Home
              </a>
            </li>
            <li>
              <a className={activeSection === "#about" ? "active" : ""} href="#about">About</a>
            </li>
            <li>
              <a className={activeSection === "#skills" ? "active" : ""} href="#skills">Skills</a>
            </li>
            <li>
              <a className={activeSection === "#education" ? "active" : ""} href="#education">Education</a>
            </li>
            <li>
              <a className={activeSection === "#project" ? "active" : ""} href="#project">Work</a>
            </li>
            <li>
              <a className={activeSection=== "#experience" ? "active" : ""} href="#experience">Experience</a>
            </li>
            <li>
              <a className={activeSection === "#contact" ? "active" : ""} href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home" id="home">
        
        <div className="content">
          <div className="text-content">
            <h2>
              Hello, <br /> I'm Parth <span>Modhvadiya</span>
            </h2>
            <p>
              I am into <span className="typing-text"></span>
            </p>
            <a href="#about" className="btn">
              <span>About Me</span>
              <FontAwesomeIcon id="button" icon={faArrowDown} />
            </a>
            <div className="socials">
              <ul className="social-icons">
                <li>
                  <a
                    className="linkedin"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/parth-modhvadiya/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    aria-label="GitHub"
                    href="https://github.com/parthmodhvadiya"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    className="leetcode"
                    aria-label="Leetcode"
                    href="https://leetcode.com/u/Parth1197/"
                    target="_blank"
                  >
                    {/* <FontAwesomeIcon icon={faLeetco} /> */}
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=avif&w=30" alt="#leetcode" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="animated-shape"></div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
