import React from 'react'
import ImagenPerfil from './Components/ImagenPerfil'
import BotonNavegacion from './Components/BotonNavegacion'
import RedesSociales from './Components/RedesSociales'
import Firma from './Components/Firma'
import './SideBarStyle.css'

const SideBar = () => {
  return (
    <nav>
      <ImagenPerfil />
      <ul>
        <BotonNavegacion caption='inicio' active={true} />
        <BotonNavegacion caption='formacion' />
        <BotonNavegacion caption='porfolio' />
        <BotonNavegacion caption='contacto' />
      </ul>
      <RedesSociales />
      <Firma />
    </nav>
  )
}

export default SideBar