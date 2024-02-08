import React from 'react'
import Maps from './Components/Maps'
import CardsContact from './Components/CardsContact'
import './Styles/ContactoStyle.css'

const Contacto = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="row h2">
            <h2>Contacto</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row h3">
            <h3>Contesto a la brevedad</h3>
          </div>
        </div>
      </div>
      <div className="row Maps">
        <div className="col-12">
          <Maps />
        </div>
      </div>
      <div className="row Cards">
        <CardsContact
          mail={'bellome.gabriel@gmail.com'}
          lugar={'Buenos Aires - Argentina'}
          telefono={'+54 9 11 5988 0828'}
          check={'Freelance'}
        />
      </div>
    </>
  )
}

export default Contacto
