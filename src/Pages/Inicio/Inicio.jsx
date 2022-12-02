import React from 'react'
import FotoPerfil from './../../Assets/img/Perfil BN.jpg'
import Button from './../../Components/General/Components/Button'
import Funciones from './Components/Funciones'
import PerfilesDinamicos from './Components/PerfilesDinamicos'
import { FaRobot, FaPoll, FaPencilAlt, FaLaptopCode } from "react-icons/fa"

import './Styles/InicioStyle.css'

const Inicio = () => {
  return (
    <>
      <div id="Resumen" className='row'>
        <div id="ImagenPortada" className='col-12 col-lg-6 col-sm-12'>
          <img src={FotoPerfil} alt="Imagen Perfil" />
        </div>
        <div id="Descripcion" className='col-12 col-lg-6 col-sm-12'>
          <div className='row'><PerfilesDinamicos /></div>
          <div className='row'><h1>Gabriel Bellome</h1></div>
          <div className='row'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi, deleniti hic magnam doloribus asperiores aperiam corporis nulla ducimus. Aspernatur repellat error quod ipsam doloribus suscipit odio? Voluptas ullam quasi molestiae architecto totam odit saepe fuga, placeat cum?</p></div>
          <div className='row'><Button caption='Descargar CV' outline={true} /></div>
        </div>
      </div>
      <div id="Funciones" className='row'>
        <div className="row">
          <h4>¿Qué hago?</h4>
        </div>
        <div id="ListadoFunciones" className='row'>
          <div className="LineaFunciones row">
            <Funciones title='RPA' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaRobot />} />
            <Funciones title='Business Inteligent' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaPoll />} />
          </div>
          <div className="LineaFunciones row">
            <Funciones title='Web App' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaLaptopCode />} />
            <Funciones title='Web Design' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi non recusandae nostrum possimus ullam, maxime nihil inventore numquam ab esse modi' icon={<FaPencilAlt />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio