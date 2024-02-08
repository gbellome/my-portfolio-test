import React from 'react'
import './../Styles/FuncionesStyle.css'

const Funciones = ({ description, icon, title, index }) => {
  return (
    <div className="Funcion col-12 col-lg-6 col-sm-12" key={index}>
      <div>{icon}</div>
      <div className="DescripcionFuncion">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Funciones
