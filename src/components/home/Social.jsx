import React from "react";
import { FiFacebook, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            
            <a href="https://www.linkedin.com/in/khaled-mushahed-hossain-729632243/" className="home__social-icon" target="_blank" rel='noreferrer'>
                <FiLinkedin />
            </a>
            <a href="https://github.com/BryaN759" className="home__social-icon" target="_blank" rel='noreferrer'>
                <FiGithub />
            </a>
            <a href="https://www.facebook.com/khaledmushahed/" className="home__social-icon" target="_blank" rel='noreferrer'>
                <FiFacebook />
            </a>
            
        </div> 
    ); 
}

export default Social;