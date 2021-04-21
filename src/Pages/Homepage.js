import React from 'react';
import {faFacebook, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export default function Homepage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text"> 
                    Hi, my name is <span>Ahljun.</span>
                </h1>
                <p className="hero-subtext">
                    I'm a Software Engineer based in Melbourne.
                </p>
                <div className="icons">
                    <a className="icon-wrapper" href="https://www.facebook.com/aciar43/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </a>
                    <a className="icon-wrapper" href="https://www.linkedin.com/in/ahljun-ciar-4a7638138/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lnk"/>
                    </a>
                    <a className="icon-wrapper" href="https://github.com/ahljunC" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a className="icon-wrapper" href="https://www.instagram.com/ahljuuun/?hl=en" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </a>
                </div>
            </header>
        </div>
    )
}
