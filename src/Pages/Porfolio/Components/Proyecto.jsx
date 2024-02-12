import '../Styles/ProyectoStyles.css'
import { FaReact } from 'react-icons/fa'

const listaIconos = {
  React: <FaReact />,
}

const Proyecto = ({
  tipo,
  titulo,
  descripcion,
  link,
  previsualizacion,
  index,
}) => {
  return (
    <a
      className="item-galeria cursor-pointer"
      id={'item-galeria-' + index}
      href={link}
      target="_blank"
    >
      <img
        src={previsualizacion}
        alt={titulo}
        aria-label={descripcion}
        className="imagen-galeria"
      />
      <div className="texto-item">
        <div className="icono-item">{listaIconos[tipo]}</div>
        <div className="titulo-item">{titulo}</div>
        <div className="descripcion-item">{descripcion}</div>
      </div>
    </a>
  )
}

export default Proyecto
