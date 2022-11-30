import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './../Styles/RedesSocialesStyle.css'


const RedesSociales = () => {
    return (
        <div id='RedesSociales'>
            <a
                href="https://www.facebook.com/Gaaby12.B.J/"
                id="FacebookIcon"
                target="_blank"
                rel="noreferrer">
                <FaFacebookF />
            </a>
            <a
                href="https://www.instagram.com/gabibellome/"
                id="InstagramIcon"
                target="_blank"
                rel="noreferrer">
                <FaInstagram />
            </a>
            <a
                href="https://www.linkedin.com/in/gabriel-bellome-bb6721112/"
                id="LinkedInIcon"
                target="_blank"
                rel="noreferrer">
                <FaLinkedinIn />
            </a>
            <a
                href="https://www.twitter.com/GabrielBellome/"
                id="TwitterIcon"
                target="_blank"
                rel="noreferrer">
                <FaTwitter />
            </a>
        </div>
    )
}

export default RedesSociales