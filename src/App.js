import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Inicio from './Pages/Inicio/Inicio'
import './Components/Sections/Styles/SectionsStyle.css'

const App = () => {
  return (
    <>  
    <SideBar />
    <section>
      <Inicio />
    </section>
    </>
  )
}

export default App