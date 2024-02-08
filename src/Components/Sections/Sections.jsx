import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './../../Pages/Inicio/Inicio'
import Formacion from '../../Pages/Formacion/Formacion'
import Porfolio from '../../Pages/Porfolio/Porfolio'
import Contacto from '../../Pages/Contacto/Contacto'
import './Styles/SectionsStyle.css'

const Sections = () => {
  return (
    <section className="container">
      <Routes>
        <Route index path="" element={<Inicio />} />
        <Route path="Formacion" element={<Formacion />} />
        <Route path="Porfolio" element={<Porfolio />} />
        <Route path="Contacto" element={<Contacto />} />
      </Routes>
    </section>
  )
}

export default Sections
