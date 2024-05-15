// se hace la importación de las dependencias a usar
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// se define una variable para almacenar la conexión con la base de datos
// const URL = ' http://localhost:5000/api/clientes/';
const URL = 'https://proyectotalentotech.onrender.com/api/clientes'

// creación del componente para crear clientes
const CompCrearClientes = () => {
    // se definen variables para cada campo + useState
    const [nombres, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();

    // se crea la función para guardar clientes
    const guardarClientes = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombres:nombres, apellido:apellido, cedula:cedula, correo:correo, telefono: telefono, direccion: direccion
        }) 
        navigate('/clientes')
    }

    return (
        <div>
            <h3>Formulario para inscripción de clientes</h3>
            <form onSubmit={guardarClientes}>

                <div className="mb-3">
                <label className="form-label"> Nombres </label>
                <input value= {nombres} onChange={(e)=> setNombres (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Apellidos </label>
                <input value= {apellido} onChange={(e)=> setApellido (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Cédula </label>
                <input value= {cedula} onChange={(e)=> setCedula (e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Correo electrónico </label>
                <input value= {correo} onChange={(e)=> setCorreo (e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Teléfono </label>
                <input value= {telefono} onChange={(e)=> setTelefono (e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label"> Dirección </label>
                <input value= {direccion} onChange={(e)=> setDireccion (e.target.value)} type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-secondary">Guardar información</button>

            </form>
        </div>
    )
}

export default CompCrearClientes;