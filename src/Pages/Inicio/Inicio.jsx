import React from 'react'
import FotoPerfil from './../../Assets/img/Perfil BN.jpg'
import Button from './../../Components/General/Components/Button'
import Funciones from './Components/Funciones'
import PerfilesDinamicos from './Components/PerfilesDinamicos'
import { FaRobot, FaPoll, FaPencilAlt, FaLaptopCode } from 'react-icons/fa'

import './Styles/InicioStyle.css'

const DescripcionPerfil = [
  `Mi versatilidad me permite ser valioso en cualquier tarea, pero mi verdadera fortaleza reside en liderar y gestionar proyectos. Con una sólida formación en robótica y una decisión estratégica de centrar mis habilidades en aptitudes informáticas, he consolidado una experiencia de cuatro años en la robotización de procesos.`,
  `Mi actual involucramiento con el ámbito informático a través de la robotización refleja mi compromiso con la evolución constante. Mi objetivo a corto plazo es ampliar mis conocimientos y habilidades en este campo, explorando nuevas fronteras y contribuyendo al avance de la tecnología.`,
  `Soy consciente de los desafíos que presenta el entorno laboral de una empresa multinacional y estoy seguro de que mi combinación de habilidades técnicas, liderazgo probado y mentalidad orientada al aprendizaje continuo me convierte en un candidato ideal para contribuir al éxito de su equipo.`,
  `Espero tener la oportunidad de discutir en detalle cómo mi experiencia y habilidades pueden aportar significativamente a su organización.`,
]

const DescripcionFunciones = [
  {
    title: 'RPA',
    description:
      'Desarrollador de robotización de procesos con 4 años de experiencia en el rubro, habiendo utilizado tecnologías de vanguardia y con lógica aplicada al negocio.',
    icon: <FaRobot />,
  },
  {
    title: 'Team Leader & Business Inteligent',
    description:
      'Líder de equipo actuando bajo métricas obtenidas y analizadas desde diferentes criterios bajo las normas de metodologías ágiles como SCRUM o KANBAN.',
    icon: <FaPoll />,
  },
  {
    title: 'Web App',
    description:
      'Desarrollador full-stack de plataformas Web, sitios, aplicaciones de escritorios, utilizando diferentes herramientas disponibles y conociendo aún más, con 8 años de experiencia.',
    icon: <FaLaptopCode />,
  },
  {
    title: 'Web Design',
    description:
      'Aficionado al diseño de interfaces y experiencias de usuario. Buscador diario de ideas innovadoras y creativas para la mejora continua de los sitios administrados.',
    icon: <FaPencilAlt />,
  },
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
            <p
              style={{
                marginBottom: '1rem',
                textIndent: '1rem',
                textAlign: 'justify',
              }}
            >
              Soy una persona altamente capacitada con una notable habilidad
              para el aprendizaje rápido y una mente lógica que busca
              constantemente la mejora personal. Mi perfil destaca por ser un
              profesional idóneo para integrarse en equipos, enfrentar desafíos
              significativos y desempeñarme con excelencia como líder. Mi
              enfoque pro activo me impulsa a buscar progresar continuamente,
              aprender constantemente y explorar nuevos conocimientos.
            </p>
            {DescripcionPerfil.map((parrafo, index) => (
              <p
                className="hidden-if-mobile"
                style={{
                  marginBottom: '1rem',
                  textIndent: '1rem',
                  textAlign: 'justify',
                }}
                key={index}
              >
                {parrafo}
              </p>
            ))}
          </div>
          <div className="row">
            <a
              href={
                'https://drive.google.com/uc?export=download&id=1G1X3ds-I4jHlZmNA4qWFo00-_xfCbyNA'
              }
              download="Bellome Gabriel CV"
              target="_blank"
              rel="noreferrer"
            >
              <Button caption="Descargar CV" outline={true} />
            </a>
          </div>
        </div>
      </div>
      <div id="Funciones" className="row">
        <div className="row">
          <h4>¿Qué hago?</h4>
        </div>
        <div id="ListadoFunciones" className="row">
          {DescripcionFunciones.map(({ title, description, icon }, index) => (
            <Funciones
              title={title}
              description={description}
              icon={icon}
              index
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Inicio
