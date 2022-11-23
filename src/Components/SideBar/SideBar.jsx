import React from 'react'
import ImagenPerfil from './Components/ImagenPerfil'
import BotonNavegacion from './Components/BotonNavegacion'
import RedesSociales from './Components/RedesSociales'
import Firma from './Components/Firma'
import './Styles/SideBarStyle.css'



const SideBar = () => {
  return (
    <nav>
      <ImagenPerfil />
      <ul>
        <BotonNavegacion route='' caption='inicio' active={true} />
        <BotonNavegacion route='Formacion' caption='formacion' />
        <BotonNavegacion route='Porfolio' caption='porfolio' />
        <BotonNavegacion route='Contacto' caption='contacto' />
      </ul>
      <div id="FooterSideBar">
        <RedesSociales />
        <Firma />
      </div>
    </nav>
  )
}

export default SideBar