import React from 'react'
import './Styles/FormacionStyle.css'
import Etapa from './Components/Etapa'
import Progreso from './Components/Progreso'

const Formacion = () => {
  return (
    <>
      <div className="row">
        <div className="col-12"><div className="row h2"><h2>Formacion</h2></div></div>
        <div className="col-12"><div className="row h3"><h3>10 años de experiencia</h3></div></div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-8">
          <div className="row"><h4>Estudios</h4></div>
          <Etapa year='2020-2022' place='UNSAM' title='Especialidad de diseños de proyectos e innovacion tecnológica' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2018-2019' place='UNLZ' title='Licenciatura en automatización y robótica' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2013-2017' place='UTN - INSPT' title='Tecnicatura en automatización y robótica' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="row"><h4>Habilidades Blandas</h4></div>
          <Progreso tools='Liderazgo' progress={0.67}/>
          <Progreso tools='Trabajo en equipo' progress={0.82}/>
          <Progreso tools='Visión de negocios' progress={0.34}/>
          <Progreso tools='Metodologias agiles' progress={0.72}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-8">
          <div className="row"><h4>Experiencia</h4></div>
          <Etapa year='2022' place='UTN - INSPT' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="row"><h4>Habilidades Duras</h4></div>
          <Progreso tools='JavaScript' progress={0.5}/>
          <Progreso tools='HTML-CSS' progress={0.95}/>
          <Progreso tools='Python' progress={0.43}/>
          <Progreso tools='Figma' progress={0.25}/>
        </div>
      </div>
    </>
  )
}

export default Formacion