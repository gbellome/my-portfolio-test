import React from 'react'
import { Link } from 'react-router-dom'
import './../Styles/BotonNavegacionStyle.css'

const BotonNavegacion = ({active, caption, route }) => { 
  return (
    <Link
      to={`/${route}`}
      className={active ? 'active' : ''}>
      {caption}
    </Link>
  )
}

export default BotonNavegacion