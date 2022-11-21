import React from 'react'
import './../Styles/BotonNavegacionStyle.css'

const BotonNavegacion = ({ active, caption }) => {
  return (
    <li className={active ? 'active' : ''}>
      {caption}
    </li>
  )
}

export default BotonNavegacion