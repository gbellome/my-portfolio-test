import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Sections from './Components/Sections/Sections'
import { BrowserRouter as Router } from 'react-router-dom'
import './Components/Sections/Styles/SectionsStyle.css'

const App = () => {
  return (
    <Router>
      <SideBar />
      <Sections />
    </Router>
  )
}

export default App