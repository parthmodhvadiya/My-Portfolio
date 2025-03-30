import React, { useEffect, useState } from "react";
import "./Gototop.css";

const Gototop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        const heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <button 
            className={`top-btn ${isVisible ? 'active' : ''}`}
            onClick={goToBtn}
            aria-label="Go to top"
            title="Go to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default Gototop;