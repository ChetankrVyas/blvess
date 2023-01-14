import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social'>
                <a href=''><FaInstagram className="social-icons"></FaInstagram></a>
                <a href=''><FaFacebook className="social-icons"></FaFacebook></a>
                <a href=''><FaFacebook className="social-icons"></FaFacebook></a>
                <a href=''><FaLinkedin className="social-icons"></FaLinkedin></a>
            </div>
            <div>
                <a>Home</a>
                <a>Partners</a>
                <a>Field Visit</a>
                <a>Events</a>
            </div>
            <p></p>
            @2023BLVESS
        </footer>
    )
}

export default Footer
