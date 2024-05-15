// importación de dependencias
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// variable para almacenar la conexión
// const URL = 'http://localhost:5000/api/sedes/'
const URL = 'https://proyectotalentotech.onrender.com/api/sedes'

// componente para crear sedes
const CompCrearSedes = () => {
    // variables para cada campo que tienen un useState
    const [nombre, setNombre] = useState('');
    const [zona, setZona] = useState('');
    const [direccion, setDireccion] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [disponibilidad, setDisponibilidad] = useState();
    const navigate = useNavigate();

    // función para guardar las sedes
    const guardarSedes = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombre:nombre,
            zona:zona,
            direccion:direccion,
            capacidad:capacidad,
            disponibilidad:disponibilidad
        })
        navigate('/sedes')
    }

    return (
        <div>
            <h3> Formulario de inscripción de sedes</h3>
            <form onSubmit={guardarSedes}>
                <div className="mb-3">
                <label className="form-label"> Nombre </label>
                <input value= {nombre} onChange={(e) => setNombre (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Zona </label>
                <input value= {zona} onChange={(e) => setZona (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Dirección </label>
                <input value= {direccion} onChange={(e) => setDireccion (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Capacidad </label>
                <input value= {capacidad} onChange={(e) => setCapacidad (e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="flexRadioDefault1"> Disponible </label>
                <input value = 'true' onChange={(e) => setDisponibilidad (e.target.value)} type="radio" className="form-check-input" name="inlineRadioOptions" id="inlineRadio1"></input>
                </div>

                <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="flexRadioDefault2"> No disponible </label>
                <input value = 'false' onChange={(e) => setDisponibilidad (e.target.value)} type="radio" className="form-check-input" name="inlineRadioOptions" id="inlineRadio2"></input>
                </div>
                
                <button type="submit" className="btn btn-secondary">Guardar información</button>

            </form>
        </div>
    )
}

export default CompCrearSedes;
