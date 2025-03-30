import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Harshil's Portfolio</h3>
                    <p>
                        Thank you for visiting my portfolio! Connect with me to explore opportunities 
                        and turn innovative ideas into reality. Let's create something amazing together!
                    </p>
                    <div className="share">
                        <a href="https://www.linkedin.com/in/harshil-kothiya/" 
                           className="fab fa-linkedin" 
                           aria-label="LinkedIn" 
                           target="_blank"
                           rel="noopener noreferrer">
                        </a>
                        <a href="https://github.com/Harshilkothiya" 
                           className="fab fa-github" 
                           aria-label="GitHub" 
                           target="_blank"
                           rel="noopener noreferrer">
                        </a>
                        <a href="mailto:harshilkothiya5@gmail.com" 
                           className="fas fa-envelope" 
                           aria-label="Mail" 
                           target="_blank"
                           rel="noopener noreferrer">
                        </a>
                        <a href="https://twitter.com" 
                           className="fab fa-twitter" 
                           aria-label="Twitter" 
                           target="_blank"
                           rel="noopener noreferrer">
                        </a>
                    </div>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#home"><i className="fas fa-chevron-right"></i> Home</a>
                    <a href="#about"><i className="fas fa-chevron-right"></i> About</a>
                    <a href="#skills"><i className="fas fa-chevron-right"></i> Skills</a>
                    <a href="#education"><i className="fas fa-chevron-right"></i> Education</a>
                    <a href="#work"><i className="fas fa-chevron-right"></i> Work</a>
                    <a href="#experience"><i className="fas fa-chevron-right"></i> Experience</a>
                </div>

                <div className="box">
                    <h3>Contact Info</h3>
                    <p><i className="fas fa-phone"></i> +91 8469409852</p>
                    <p><i className="fas fa-envelope"></i> harshilkothiya5@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Surat, India-394107</p>
                    <p><i className="fas fa-clock"></i> Available for freelance</p>
                </div>
            </div>

            <div className="credit">
                <p>© {currentYear} Harshil Kothiya. All rights reserved. Built with <i className="fas fa-heart"></i> and React.js</p>
            </div>
        </section>
    );
}

export default Footer;