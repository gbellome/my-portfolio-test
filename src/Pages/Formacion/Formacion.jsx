import React from 'react'
import './Styles/FormacionStyle.css'
import Etapa from './Components/Etapa'
import Progreso from './Components/Progreso'

const Formacion = () => {
  return (
    <>
      <div className="titulo">
        <h2>Formacion</h2>
        <h3>10 años de experiencia</h3>
      </div>
      <div className="LineaFormacion">
        <div className="LineaDeTiempoFormacion">
          <h4>Estudios</h4>
          <Etapa year='2022' place='UTN - INSPT' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
        </div>
        <div className="ProgresoFormacion">
          <h4>Habilidades Blandas</h4>
          <Progreso tools='JavaScript' progress={0.5}/>
          <Progreso tools='CSS' progress={0.72}/>
          <Progreso tools='HTML' progress={0.98}/>
          <Progreso tools='Figma' progress={0.25}/>
        </div>
      </div>
      <div className="LineaFormacion">
        <div className="LineaDeTiempoFormacion">
          <h4>Experiencia</h4>
          <Etapa year='2022' place='UTN - INSPT' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
          <Etapa year='2020' title='Lorem, ipsum dolor' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ex voluptates dolorum doloremque dicta! Modi.' />
        </div>
        <div className="ProgresoFormacion">
          <h4>Habilidades Duras</h4>
          <Progreso tools='JavaScript' progress={0.5}/>
          <Progreso tools='CSS' progress={0.72}/>
          <Progreso tools='HTML' progress={0.98}/>
          <Progreso tools='Figma' progress={0.25}/>
        </div>
      </div>
    </>
  )
}

export default Formacion