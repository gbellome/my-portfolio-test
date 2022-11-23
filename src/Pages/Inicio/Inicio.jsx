import React from 'react'
import FotoPerfil from './../../Assets/img/Perfil BN.jpg'
import Button from './../../Components/General/Components/Button'
import Funciones from './Components/Funciones'
import { FaRobot } from "react-icons/fa"

import './Styles/InicioStyle.css'

const Inicio = () => {
  return (
    <>
      <div id="Resumen">
        <div id="ImagenPortada">
          <img src={FotoPerfil} alt="Imagen Perfil" />
        </div>
        <div id="Descripcion">
          <h5>Desarrollador Web</h5>
          <h1>Gabriel Bellome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi, deleniti hic magnam doloribus asperiores aperiam corporis nulla ducimus. Aspernatur repellat error quod ipsam doloribus suscipit odio? Voluptas ullam quasi molestiae architecto totam odit saepe fuga, placeat cum?</p>
          <Button caption='Descargar CV' outline={true} />
        </div>
      </div>
      <div id="Funciones">
        <h4>¿Qué hago?</h4>
        <div id="ListadoFunciones">
          <div className="LineaFunciones">
            <Funciones title='RPA' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaRobot />} />
            <Funciones title='WebApp' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaRobot />} />
          </div>
          <div className="LineaFunciones">
            <Funciones title='Mobile' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaRobot />} />
            <Funciones title='Futbol' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaRobot />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio