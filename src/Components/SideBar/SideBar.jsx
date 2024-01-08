import React from 'react'
import { useLocation } from 'react-router-dom'
import ImagenPerfil from './Components/ImagenPerfil'
import BotonNavegacion from './Components/BotonNavegacion'
import RedesSociales from './Components/RedesSociales'
import Firma from './Components/Firma'
import './Styles/SideBarStyle.css'

const SideBar = () => {
  const path = useLocation()
  const esActiva = (rutaRequerida) => {
    return rutaRequerida === path.pathname ? true : false
  }

  return (
    <nav>
      <ImagenPerfil />
      <ul>
        <BotonNavegacion route="" caption="Inicio" active={esActiva('/')} />
        <BotonNavegacion
          route="Formacion"
          caption="Formacion"
          active={esActiva('/Formacion')}
        />
        <BotonNavegacion
          route="Porfolio"
          caption="Porfolio"
          active={esActiva('/Porfolio')}
        />
        <BotonNavegacion
          route="Contacto"
          caption="Contacto"
          active={esActiva('/Contacto')}
        />
      </ul>
      <div id="FooterSideBar">
        <RedesSociales />
        <Firma />
      </div>
    </nav>
  )
}

export default SideBar
