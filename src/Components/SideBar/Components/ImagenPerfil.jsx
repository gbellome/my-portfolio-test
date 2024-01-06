import React from 'react'
import FotoPerfil from '../../../Assets/img/Perfil BN.jpg'
import './../Styles/ImagenPerfilStyle.css'

const ImagenPerfil = () => {
  return (
    <div id="ImagenPerfil">
      <img src={FotoPerfil} alt="Imagen Perfil" />
      <div>
        <h4>GABRIEL BELLOME</h4>
      </div>
    </div>
  )
}

export default ImagenPerfil
