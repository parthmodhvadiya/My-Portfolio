import React, { useEffect, useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTrophy, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import leetcode from "../../assets/leetcode.png";
import codechef from "../../assets/codechef.png";
import gfg from "../../assets/gfg.png";
import "aos/dist/aos.css";

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillsData = [
            { name: "C Language", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
            { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
            { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
            { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
            { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
            { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/128/6911/6911893.png" },
            
            { name: " Machine Learning", icon: "https://cdn-icons-png.flaticon.com/128/4616/4616734.png" },
            { name: " Deep Learning", icon: "https://cdn-icons-png.flaticon.com/128/10817/10817404.png" },
            { name: "Data Science", icon: "https://cdn-icons-png.flaticon.com/128/1449/1449312.png" },
            { name: "Data Analysis", icon: "https://cdn-icons-png.flaticon.com/128/2041/2041643.png" },

            { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/919/919847.png" },
            { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
            
            { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
            { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
            { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/825/825529.png" },
            { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
            { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
            { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
            
        ];

        setSkills(skillsData);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <>
            <section className="skills" id="skills">
                <h2 className="heading">
                    <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span>
                </h2>

                <div data-aos="fade-down" className="container">
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="bar" key={index}>
                                <div className="info">
                                    <img src={skill.icon} alt={skill.name} />
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coding Achievements Section */}
                <div className="coding-achievements">
                    <h2 className="heading">
                        <FontAwesomeIcon icon={faTrophy} /> Competitive Programming <span>Stats</span>
                    </h2>
                    <div className="coding-container">
                        <div className="coding-box" data-aos="zoom-in">
                        <img id="leetcode" src={leetcode} alt="leetcode"></img>
                            <h3>LeetCode</h3>
                            <p><span>400+</span> Problems Solved</p>
                            <a href="https://leetcode.com/u/harshilkothiya/" target="_blank">
                            <button className="profilebtn"> View Profile <FontAwesomeIcon id="eye" icon={faArrowRight} /></button></a>
                        </div>
                        <div className="coding-box" data-aos="zoom-in">
                        <img id="codechef" src={codechef} alt="leetcode"></img>
                            <h3>CodeChef</h3>
                            <p><span>100+</span> Problems Solved</p>
                            <a href="https://www.codechef.com/users/harshilkothiya" target="_blank">
                            <button className="profilebtn"> View Profile <FontAwesomeIcon id="eye" icon={faArrowRight} /></button></a>
                        </div>
                        <div className="coding-box" data-aos="zoom-in">
                            <img src={gfg} alt="leetcode"></img>
                            <h3>GeeksforGeeks</h3>
                            <p><span>40+</span> Problems Solved</p>
                            <a href="https://www.geeksforgeeks.org/user/harshilkhg17/" target="_blank">
                            <button className="profilebtn"> View Profile <FontAwesomeIcon id="eye" icon={faArrowRight} /></button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;