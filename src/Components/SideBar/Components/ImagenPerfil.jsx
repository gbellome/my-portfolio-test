import React from 'react'
import FotoPerfil from '../../../Assets/img/Perfil BN.jpg'
import './../Styles/ImagenPerfilStyle.css'

const ImagenPerfil = () => {
  return (
    <div id='ImagenPerfil'>
      <img src={FotoPerfil} alt="Imagen Perfil" />
      <div>
        <h1>Gabriel Bellome</h1>
      </div>
    </div>
  )
}

export default ImagenPerfil