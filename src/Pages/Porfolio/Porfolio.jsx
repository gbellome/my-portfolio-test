import './Styles/PorfolioStyles.css'
import Proyecto from './Components/Proyecto'

const listadoProyectos = [
  {
    tipo: 'React',
    titulo: 'Login con Firebase',
    descripcion:
      'Diseño funcional desarrollado en React, Firebase, Bootstrap, Vite y StyledComponents',
    link: 'https://test-login-tau.vercel.app/',
    previsualizacion:
      'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_3LxFnfdGygsEcqyQCfVKcKovrCUY%26teamId%3Dgabriel-bellomes-projects%26withStatus%3D1&w=640&q=75&dpl=dpl_AfVvM8WR28aoua7B36V4SY7UEYch',
  },
  {
    tipo: 'React',
    titulo: 'Landing Pege',
    descripcion: 'Diseño propio desarrollado en React, Vite y StyledComponents',
    link: 'https://landing-page-travels.vercel.app/',
    previsualizacion:
      'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_26QEfxZm5j4CHhRUgs9Rz4HzbdvW%26teamId%3Dgabriel-bellomes-projects%26withStatus%3D1&w=640&q=75&dpl=dpl_G2aNXvGC44AQCYPZRk1jKgVyz7bz',
  },
]

const Porfolio = () => {
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
        <div className="galeria col-12">
          {listadoProyectos.map(
            ({ tipo, titulo, descripcion, link, previsualizacion }, index) => (
              <Proyecto
                tipo={tipo}
                titulo={titulo}
                descripcion={descripcion}
                link={link}
                previsualizacion={previsualizacion}
                index={index}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Porfolio
