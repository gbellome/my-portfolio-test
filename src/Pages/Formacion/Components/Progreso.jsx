import React from 'react'
import './../Styles/ProgresoStyle.css'

const Progreso = ({progress, tools}) => {
  return (
    <div className='Progreso'>
        <div className="DetalleProgreso">
            <h5>{tools}</h5>
            <p>{progress*100}%</p>
        </div>
        <div className="BarraProgreso"></div>
    </div>
  )
}

export default Progreso