import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import '../Styles/HerramientasStyle.css'

const ListarHerramientas = () => {
  const listaHerramientas = [
    {
      icon: <FaHtml5 />,
      title: 'HTML',
    },
    {
      icon: <FaCss3 />,
      title: 'CSS',
    },
    {
      icon: <FaBootstrap />,
      title: 'Bootstrap',
    },
    {
      icon: <FaFigma />,
      title: 'Figma',
    },
    {
      icon: <FaGithub />,
      title: 'Github',
    },
    {
      icon: <FaPython />,
      title: 'Python',
    },
    {
      icon: <FaNodeJs />,
      title: 'Node JS',
    },
    {
      icon: <FaPhp />,
      title: 'PHP',
    },
    {
      icon: <FaReact />,
      title: 'React',
    },
    {
      icon: <FaSass />,
      title: 'Sass',
    },
    {
      icon: <FaJs />,
      title: 'JavaScripts',
    },
  ]
  return (
    <div className="herramientas-slider">
      {listaHerramientas.map(({ icon, title }, index) => (
        <div className="herramientas" key={index}>
          <div>{icon}</div>
          <div>{title}</div>
        </div>
      ))}
    </div>
  )
}

const Herramientas = () => {
  return (
    <div className="herramientas-container">
      <div className="herramientas-slider">
        <ListarHerramientas />
        <ListarHerramientas />
      </div>
    </div>
  )
}

export default Herramientas
