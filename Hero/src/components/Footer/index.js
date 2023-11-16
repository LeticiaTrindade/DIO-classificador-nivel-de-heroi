import React from "react";
import './style.css';
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import youtube from "../../images/youtube.svg";

function Footer() {
    return (
        <footer>
            <div className="footer d-flex flex-row justify-content-around">
                <div className="icons d-flex flex-row justify-content-around">
                    <a
                        href="https://github.com/LeticiaTrindade"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={github} alt="Github"></img>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/leticiatrindadett/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={linkedin} alt="Linkedin"></img>
                    </a>

                    <a
                        href="https://www.instagram.com/lellycoder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={youtube} alt="YouTube"></img>
                    </a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;