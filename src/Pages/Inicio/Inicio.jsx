import React from 'react'
import FotoPerfil from './../../Assets/img/Perfil BN.jpg'
import Button from './../../Components/General/Components/Button'
import Funciones from './Components/Funciones'
import PerfilesDinamicos from './Components/PerfilesDinamicos'
import { FaRobot, FaPoll, FaPencilAlt, FaLaptopCode } from 'react-icons/fa'

import './Styles/InicioStyle.css'

const DescripcionPerfil = [
  `Soy una persona altamente capacitada con una notable habilidad para el aprendizaje rápido y una mente lógica que busca constantemente la mejora personal. Mi perfil destaca por ser un profesional idóneo para integrarse en equipos, enfrentar desafíos significativos y desempeñarme con excelencia como líder. Mi enfoque pro activo me impulsa a buscar progresar continuamente, aprender constantemente y explorar nuevos conocimientos.`,
  `Mi versatilidad me permite ser valioso en cualquier tarea, pero mi verdadera fortaleza reside en liderar y gestionar proyectos. Con una sólida formación en robótica y una decisión estratégica de centrar mis habilidades en aptitudes informáticas, he consolidado una experiencia de cuatro años en la robotización de procesos.`,
  `Mi actual involucramiento con el ámbito informático a través de la robotización refleja mi compromiso con la evolución constante. Mi objetivo a corto plazo es ampliar mis conocimientos y habilidades en este campo, explorando nuevas fronteras y contribuyendo al avance de la tecnología.`,
  `Soy consciente de los desafíos que presenta el entorno laboral de una empresa multinacional y estoy seguro de que mi combinación de habilidades técnicas, liderazgo probado y mentalidad orientada al aprendizaje continuo me convierte en un candidato ideal para contribuir al éxito de su equipo.`,
  `Espero tener la oportunidad de discutir en detalle cómo mi experiencia y habilidades pueden aportar significativamente a su organización.`,
]

const Inicio = () => {
  return (
    <>
      <div id="Resumen" className="row">
        <div id="ImagenPortada" className="col-12 col-lg-5 col-sm-12">
          <img src={FotoPerfil} alt="Imagen Perfil" />
        </div>
        <div id="Descripcion" className="col-12 col-lg-7 col-sm-12">
          <div className="row">
            <PerfilesDinamicos />
          </div>
          <div className="row">
            <h1>Gabriel Bellome</h1>
          </div>
          <div className="row">
            {DescripcionPerfil.map((parrafo) => (
              <p
                style={{
                  margin: '1rem',
                  textIndent: '1rem',
                  textAlign: 'justify',
                }}
              >
                {parrafo}
              </p>
            ))}
          </div>
          <div className="row">
            <Button caption="Descargar CV" outline={true} />
          </div>
        </div>
      </div>
      <div id="Funciones" className="row">
        <div className="row">
          <h4>¿Qué hago?</h4>
        </div>
        <div id="ListadoFunciones" className="row">
          <div className="LineaFunciones row">
            <Funciones
              title="RPA"
              description="Desarrollador de robotización de procesos con 4 años de experiencia en el rubro, habiendo utilizado tecnologías de vanguardia y con lógica aplicada al negocio."
              icon={<FaRobot />}
            />
            <Funciones
              title="Team Leader & Business Inteligent"
              description="Líder de equipo actuando bajo métricas obtenidas y analizadas desde diferentes criterios bajo las normas de metodologías ágiles como SCRUM o KANBAN."
              icon={<FaPoll />}
            />
          </div>
          <div className="LineaFunciones row">
            <Funciones
              title="Web App"
              description="Desarrollador full-stack de plataformas Web, sitios, aplicaciones de escritorios, utilizando diferentes herramientas disponibles y conociendo aún más, con 8 años de experiencia."
              icon={<FaLaptopCode />}
            />
            <Funciones
              title="Web Design"
              description="Aficionado al diseño de interfaces y experiencias de usuario. Buscador diario de ideas innovadoras y creativas para la mejora continua de los sitios administrados."
              icon={<FaPencilAlt />}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio
