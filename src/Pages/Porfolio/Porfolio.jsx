import React from 'react'
import { FaHourglassHalf } from 'react-icons/fa'

const Porfolio = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="row h2">
            <h2>Formacion</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row h3">
            <h3>10 años de experiencia</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5rem',
            boxSizing: 'border-box',
          }}
        >
          <p>Sitio en construcción</p>
          <FaHourglassHalf />
        </div>
      </div>
    </>
  )
}

export default Porfolio
