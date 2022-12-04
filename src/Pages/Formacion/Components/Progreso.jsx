import React from 'react'
import './../Styles/ProgresoStyle.css'

const Progreso = ({ progress, tools }) => {
  return (
    <div className='Progreso row'>
      <div className="DetalleProgreso row">
        <div className="col-6">
          <h5>{tools}</h5>
        </div>
        <div className="col-6">
          <p>{progress * 100}%</p>
        </div>
      </div>
      <div className="BarraProgreso col-12">
        <div className="NivelProgreso" style={{ width: `${progress * 100}%` }}></div>
      </div>
    </div>
  )
}

export default Progreso