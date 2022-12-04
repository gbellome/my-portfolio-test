import React from 'react'
import './Styles/RootStyle.css'

import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'
import Sections from './Components/Sections/Sections'


const App = () => {
  return (
    <Router>
      <SideBar />
      <Sections />
    </Router>
  )
}

export default App