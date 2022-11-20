import React from 'react'
import './BotonNavegacionStyle.css'

const BotonNavegacion = ({caption, active}) => {
  return (
    <li className={active ? 'active' : ''}>
        {caption}
    </li>
  )
}

export default BotonNavegacion