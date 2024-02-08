import React from 'react'
import Etapa from './Components/Etapa'
import Progreso from './Components/Progreso'
import Herramientas from './Components/Herramientas'

const Formacion = () => {
  const Estudios = [
    {
      year: '2023',
      place: 'UNTREF',
      title: 'Especialidad en Gestión de Proyectos',
      description:
        '[En progreso] Carrera postgrado orientada a la gestión total y completa de proyectos tecnológicos',
    },
    {
      year: '2021-2022',
      place: 'UNSAM',
      title: 'Especialidad de diseños de proyectos e innovacion tecnológica',
      description:
        '[Abandonada] Carrera postgrado orientada a la implementación de iniciativas cuyo foco es la innovación.',
    },
    {
      year: '2017-2019',
      place: 'UNLZ',
      title: 'Licenciatura en automatización y robótica',
      description:
        '[Completada] Carrera de grado orientada a la gestión, analisis y estudios previos necesarios para la implementación de procesos automatizados dentro de un sistema.',
    },
    {
      year: '2013-2017',
      place: 'UTN - INSPT',
      title: 'Tecnicatura en automatización y robótica',
      description:
        '[Completada] Carrera de pregrado orientada a la teoria y práctica de la configuración, diseño, implementación y manejo de robots en la industria.',
    },
  ]
  const Experiencias = [
    {
      year: '2020-ACTUALIDAD',
      place: 'PwC Argentina',
      title: 'Specialist Experimented IT Senior',
      description:
        'Líder de equipo de RPA. Logros: Migración de base de datos nivel regional (ARG, CHI, ECU, PER), Plataforma Confirmación de Independencias, Plataforma de circulares.',
    },
    {
      year: '2018-2020',
      place: 'Flexar SRL',
      title: 'Developer Full-Stack',
      description:
        'Desarrollador de plataforma web. Logros: Plataforma de Gestión Integral, Aplicaciones procesos internos.',
    },
    {
      year: '2014-2017',
      place: 'Electro-Dos Materiales Electricos',
      title: 'Technical advisor',
      description:
        'Ventas en mostrador. Logros: Asesoria a instaladores, Capacitaciones a gremio.',
    },
  ]

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="row h2">
            <h2>Formacion</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="row h3">
            <h3>10 años de experiencia</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-8">
          <div className="row">
            <h4>Estudios</h4>
          </div>
          {Estudios.map(({ year, description, place, title }, index) => (
            <Etapa
              year={year}
              place={place}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="row">
            <h4>Habilidades Blandas</h4>
          </div>
          <Progreso tools="Comprensión del negocio" progress={0.73} />
          <Progreso tools="Curiosidad intelectual" progress={0.96} />
          <Progreso tools="Liderazgo integral" progress={0.92} />
          <Progreso tools="Pensamiento crítico" progress={0.86} />
          <Progreso tools="Comunicación efectiva" progress={0.82} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-8">
          <div className="row">
            <h4>Experiencia</h4>
          </div>
          {Experiencias.map(({ year, title, place, description }, index) => (
            <Etapa
              year={year}
              place={place}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="row">
            <h4>Habilidades Duras</h4>
          </div>
          <Progreso tools="Desktop App" progress={0.71} />
          <Progreso tools="Web Developments" progress={0.89} />
          <Progreso tools="Data Science" progress={0.69} />
          <Progreso tools="Data Base Administration" progress={0.53} />
          <Progreso tools="Artificial Intelligence" progress={0.47} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <h4>Herramientas</h4>
          </div>
          <Herramientas />
        </div>
      </div>
    </>
  )
}

export default Formacion
