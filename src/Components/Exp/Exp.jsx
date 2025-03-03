import React from "react";
import "./Exp.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Exp() {
    useEffect(() => {
                AOS.init({ duration: 1000, once: false });
            }, []);
    return (
        <>
            <section className="experience" id="experience">
                <h2 className="heading"><i className="fas fa-briefcase"></i> Experience</h2>
                
                <div className="timeline">

                    <div className="container left">
                        <div data-aos="fade-right" className="content">
                            <div className="tag">
                                <h2>Self Employed</h2>
                            </div>
                            <div className="desc">
                                <h3>Data Scientist</h3>
                                <p>Oct 2023 - present</p>
                            </div>
                        </div>
                    </div>

                    <div className="container right">
                        <div data-aos="fade-left" className="content">
                            <div className="tag">
                                <h2>CLUMOSS</h2>
                            </div>
                            <div className="desc">
                                <h3>Web Developer | Internship</h3>
                                <p>May 2024 - June 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="container left">
                        <div data-aos="fade-right" className="content">
                            <div className="tag">
                                <h2>Bharat Intern</h2>
                            </div>
                            <div className="desc">
                                <h3>Web Developer | Internship</h3>
                                <p>Feb 2024 - March 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>Mapstreak Flyseas</h2>
                            </div>
                            <div className="desc">
                                <h3>Web Developer | Internship</h3>
                                <p>June 2021 - Dec 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>The Spark Foundation</h2>
                            </div>
                            <div className="desc">
                                <h3>Website Developer | Internship</h3>
                                <p>May 2021 - June 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>The Spark Foundation</h2>
                            </div>
                            <div className="desc">
                                <h3>Mobile Application Developer | Internship</h3>
                                <p>April 2021 - May 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>Frshr Technologies</h2>
                            </div>
                            <div className="desc">
                                <h3>WordPress Developer | Internship</h3>
                                <p>April 2021 - April 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>WonderingBlog</h2>
                            </div>
                            <div className="desc">
                                <h3>Web Development & SEO | Internship</h3>
                                <p>March 2021 - April 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>Hacktoberfest 2020</h2>
                            </div>
                            <div className="desc">
                                <h3>Contributor | Open Source Program</h3>
                                <p>October 2020 - November 2020</p>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div data-aos="zoom-in" className="morebtn">
                    <a href="/#home" className="btn">
                        <i className="fas fa-arrow-left"></i>
                        <span>Back to Home</span>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Exp;
