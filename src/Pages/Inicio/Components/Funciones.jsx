import React from 'react'
import './../Styles/FuncionesStyle.css'

const Funciones = ({ description, icon, title }) => {
  return (
      <div className='Funcion col col-lg-6 col-sm-12'>
        <div>{icon}</div>
        <div className="DescripcionFuncion">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default Funciones