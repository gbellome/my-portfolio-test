import React, { useState } from 'react'
import './style.scss'

const BB8 = () => {
  const [state, setState] = useState({
    droidX: 0,
    mouseX: 0,
    toTheRight: true,
    speed: 2,
    accelMod: 1,
  })
  const handleMouseMove = (e) => {
    setState({
      mouseX: e.pageX,
    })
  }
  const handleSpeedChange = (e) => {
    if (parseFloat(e.target.value)) {
      setState({
        speed: e.target.value,
      })
    }
  }
  const handleAccelChange = (e) => {
    if (parseFloat(e.target.value)) {
      setState({
        accelMod: e.target.value,
      })
    }
  }

  /* FUNCIONES */
  const movement = () => {
    let { droidX, mouseX, speed, accelMod } = state

    if (Math.abs(Math.round(droidX) - mouseX) !== 1) {
      let distance = mouseX - droidX
      let acceleration = Math.abs(distance * accelMod) / 100

      if (droidX < mouseX) {
        setState({
          droidX: droidX + speed * acceleration,
          toTheRight: true,
        })
      } else {
        setState({
          droidX: droidX - speed * acceleration,
          toTheRight: false,
        })
      }
    }
  }
  const componentWillMount = () => setState({ mouseX: 300 })
  const componentDidMount = () => {
    document.addEventListener('mousemove', (e) => handleMouseMove(e))
    setInterval(this.movement.bind(this), 1)
  }
  const componentWillUnmount = () =>
    document.removeEventListener('mousemove', (e) => handleMouseMove(e))

  return (
    <div>
      <div
        className="bb8"
        style={{ WebkitTransform: `translateX(${state.droidX}px)` }}
      >
        <div
          className={'antennas ' + (state.toTheRight ? 'right' : '')}
          style={{
            WebkitTransform: `translateX(${
              (state.mouseX - state.droidX) / 25
            }px) rotateZ(${(state.mouseX - state.droidX) / 80}deg)`,
          }}
        >
          <div className="antenna short"></div>
          <div className="antenna long"></div>
        </div>
        <div
          className="head"
          style={{
            WebkitTransform: `translateX(${
              (state.mouseX - state.droidX) / 15
            }px) rotateZ(${(state.mouseX - state.droidX) / 25}deg)`,
          }}
        >
          <div className="stripe one"></div>
          <div className="stripe two"></div>
          <div className={'eyes ' + (state.toTheRight ? 'right' : '')}>
            <div className="eye one"></div>
            <div className="eye two"></div>
          </div>
          <div className={'stripe detail ' + (state.toTheRight ? 'right' : '')}>
            <div className="detail zero"></div>
            <div className="detail zero"></div>
            <div className="detail one"></div>
            <div className="detail two"></div>
            <div className="detail three"></div>
            <div className="detail four"></div>
            <div className="detail five"></div>
            <div className="detail five"></div>
          </div>
          <div className="stripe three"></div>
        </div>
        <div
          className="ball"
          style={{ WebkitTransform: `rotateZ(${state.droidX / 2}deg)` }}
        >
          <div className="lines one"></div>
          <div className="lines two"></div>
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
        </div>
        <div className="shadow"></div>
      </div>

      <div className="instructions">
        <p>move your mouse.</p>
      </div>
    </div>
  )
}

export default BB8
