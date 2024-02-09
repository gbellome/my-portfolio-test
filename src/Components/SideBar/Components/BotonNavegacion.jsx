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
      onClick={scrollToTop}
      className={active ? 'active' : ''}
    >
      <li>{caption}</li>
    </Link>
  )
}

export default BotonNavegacion
