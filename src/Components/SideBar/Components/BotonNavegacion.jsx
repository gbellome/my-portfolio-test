import React from 'react'
import { Link } from 'react-router-dom'
import './../Styles/BotonNavegacionStyle.css'

const BotonNavegacion = ({ active, caption, route }) => {
  const scrollToTop = () => {
    document.querySelector('#root').scrollTo(0, 0)
  }
  return (
    <Link
      to={`/${route}`}
      className={active ? 'active' : ''}
      onClick={scrollToTop}
    >
      {caption}
    </Link>
  )
}

export default BotonNavegacion
