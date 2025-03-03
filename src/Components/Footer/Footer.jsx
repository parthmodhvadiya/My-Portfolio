import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Footer() {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>Harshil's Portfolio</h3>
                        <p>Thank you for visiting my portfolio! I truly appreciate your time and interest in my work. I hope you find it as inspiring and exciting as I did while creating it. Let's connect, collaborate, and turn ideas into impactful realities.<br /> <br />Keep pushing boundaries and stay inspired!</p>
                    </div>

                    <div className="box">
                        <h3>Quick Links</h3>
                        <a href="#home"><i class="fas fa-chevron-circle-right"></i> Home</a>
                        <a href="#about"><i class="fas fa-chevron-circle-right"></i> About</a>
                        <a href="#skills"><i class="fas fa-chevron-circle-right"></i> Skills</a>
                        <a href="#education"><i class="fas fa-chevron-circle-right"></i> Education</a>
                        <a href="#work"><i class="fas fa-chevron-circle-right"></i> Work</a>
                        <a href="#experience"><i class="fas fa-chevron-circle-right"></i> Experience</a>
                    </div>

                    <div className="box">
                        <h3>Contact Info</h3>
                        <p> <i class="fas fa-phone"></i>+91 8469409852</p>
                        <p> <i class="fas fa-envelope"></i>harshilkothiya5@gmail.com</p>
                        <p> <i class="fas fa-map-marked-alt"></i>Surat, India-394107</p>
                        <div className="share">

                            <a href="https://www.linkedin.com/in/harshil-kothiya/" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
                            <a href="https://github.com/Harshilkothiya" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
                            <a href="mailto:harshilkothiya5@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                        </div>
                    </div>
                </div>

                <h1 className="credit">All content © Harshil Kothiya 2025. All rights reserved.</h1>

            </section>
        </>
    )
}

export default Footer;