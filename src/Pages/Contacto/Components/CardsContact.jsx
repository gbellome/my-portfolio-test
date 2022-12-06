import React from 'react'
import { FaRegEnvelope, FaMapMarkerAlt, FaMobileAlt, FaRegCheckCircle } from 'react-icons/fa'

const CardsContact = ({ mail, lugar, telefono, check }) => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="CardContainer">
                    <div className="Card">
                        <div className="col-12"><FaRegEnvelope /></div>
                        <div className="col-12">{mail}</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="CardContainer">
                    <div className="Card">
                        <div className="col-12"><FaMapMarkerAlt /></div>
                        <div className="col-12">{lugar}</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="CardContainer">
                    <div className="Card">
                        <div className="col-12"><FaMobileAlt /></div>
                        <div className="col-12">{telefono}</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="CardContainer">
                    <div className="Card">
                        <div className="col-12"><FaRegCheckCircle /></div>
                        <div className="col-12">{check}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsContact