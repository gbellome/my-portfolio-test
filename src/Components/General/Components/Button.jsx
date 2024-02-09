import React from 'react'
import '../Styles/ButtonStyle.css'

const Button = ({ caption, disabled, outline }) => {
  return (
    <button
      className={outline ? 'outline' : ''}
      disabled={disabled ? true : false}
    >
      {caption}
    </button>
  )
}

export default Button
