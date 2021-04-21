import React from 'react';
import about from '../img/profilePic.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Hi I'm <span>Ahljun.</span></h4>
                <p className="about-text">
                    I'm a 25 year old Software Engineer based in Melbourne.<br/><br/> 
                    I have experience in the IT infrastruture and automation space 
                    and looking to make the transtion to software development. <br/><br/>
                    I have a strong passion for building and learning all things technology and 
                    in my most recent temp role as a Web Applications Developer I worked on implementing new features and fixing 
                    bugs on the company's custom CRM platform and Customer Control Panel.<br/><br/>
                
                    In my free time I enjoy traveling and spending time with friends and family. I'm also a massive hoops head and footy nut and support the Philadelphia 76ers and Essendon Bombers.
                </p>
                <a href="src\pdf\AhljunCiarResume2021.pdf" download>
                    <button className="resume-download-btn">Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection
