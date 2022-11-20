import React from 'react'
import './../Styles/BotonNavegacionStyle.css'

const BotonNavegacion = ({caption, active}) => {
  return (
    <li className={active ? 'active' : ''}>
        {caption}
    </li>
  )
}

export default BotonNavegacion