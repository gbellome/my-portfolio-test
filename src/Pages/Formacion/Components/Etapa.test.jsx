import React from 'react'
import './../Styles/EtapaStyle.test.css'

const Etapa = ({ description, place, title, year, index, skills }) => {
  console.log(`${title} - ${skills}`)
  return (
    <div className="Etapa row" key={index}>
      <div className="Tiempo col-3">
        <div className="row">
          <h5>{year}</h5>
        </div>
        <div className="row">
          <p>{place}</p>
        </div>
      </div>
      <div className="Separador col-1"></div>
      <div className="Descripcion col-8">
        <div className="row">
          <h5 className="TituloDescripcion">{title}</h5>
        </div>
        <div className="row">
          <p className="CuerpoDescripcion">{description}</p>
        </div>
        <div className="row Skills">
          {skills &&
            skills.map((skill) => <span className="skill">{skill}</span>)}
        </div>
      </div>
    </div>
  )
}

export default Etapa
