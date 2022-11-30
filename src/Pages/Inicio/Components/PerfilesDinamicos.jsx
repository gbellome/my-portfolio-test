import React from 'react'
import Typed from 'react-typed'

const PerfilesDinamicos = () => {

    return (
        <h5>
            <Typed
                strings={[
                    'Desarrollador WEB',
                    'Diseñador UX/UI', 
                    'Desarrollador RPA',
                    'Licenciando en Automatización y Rótica'
                ]}
                typeSpeed={40}
                loop={true}
                backSpeed={20}
                startDelay={100}
            />
        </h5>
    )
}

export default PerfilesDinamicos