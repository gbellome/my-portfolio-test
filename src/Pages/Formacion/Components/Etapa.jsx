import React from 'react'
import './../Styles/EtapaStyle.css'

const Etapa = ({description, place, title, year}) => {
    return (
        <div className='Etapa'>
            <div className="Tiempo">
                <h5>{year}</h5>
                <p>{place}</p>
            </div>
            <div className="Separador"></div>
            <div className="Descripcion">
                <h5 className="TituloDescripcion">{title}</h5>
                <p className="CuerpoDescripcion">{description}</p>
            </div>
        </div>
    )
}

export default Etapa