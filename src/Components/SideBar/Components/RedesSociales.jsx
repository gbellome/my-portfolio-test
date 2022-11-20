import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './RedesSocialesStyle.css'


const RedesSociales = () => {
    return (
    <div id='RedesSociales'>
        <a href="https://www.facebook.com/Gaaby12.B.J/" id="FacebookIcon">
            <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/gabibellome/" id="InstagramIcon">
            <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-bellome-bb6721112/" id="LinkedInIcon">
            <FaLinkedinIn />
        </a>
        <a href="https://www.twitter.com/GabrielBellome/" id="TwitterIcon">
            <FaTwitter />
        </a>
    </div>
  )
}

export default RedesSociales