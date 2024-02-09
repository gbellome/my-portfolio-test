import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import './../Styles/RedesSocialesStyle.css'

const RedesSociales = () => {
  return (
    <div id="RedesSociales">
      <a
        href="https://www.facebook.com/Gaaby12.B.J/"
        id="FacebookIcon"
        target="_blank"
        rel="noreferrer"
        aria-label="Perfil Gabriel Bellome Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/gabibellome/"
        id="InstagramIcon"
        target="_blank"
        rel="noreferrer"
        aria-label="Perfil Gabriel Bellome Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-bellome-bb6721112/"
        id="LinkedInIcon"
        target="_blank"
        rel="noreferrer"
        aria-label="Perfil Gabriel Bellome Linkedin"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/gbellome"
        id="GithubIcon"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default RedesSociales
