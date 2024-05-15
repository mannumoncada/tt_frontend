// se hace la importación de las dependencias a usar
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// se define una variable para almacenar la conexión con la base de datos
// const URL = ' http://localhost:5000/api/clientes/';
const URL = 'https://proyectotalentotech.onrender.com/api/clientes'

// creación del componente para editar clientes
const CompEditarClientes = () => {
    // se definen variables para cada campo + useState
    const [nombres, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    // función para actualizar/editar clientes
    const editarClientes = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            nombres:nombres,
            apellido:apellido,
            cedula:cedula,
            correo:correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/clientes/');
    }

    useEffect(() => {
        getClientesID();
    }, []);

    const getClientesID = async () => {
        const result = await axios.get(`${URL}${id}`)
        setNombres(result.data.nombres)
        setApellido(result.data.apellido)
        setCedula(result.data.cedula)
        setCorreo(result.data.correo)
        setTelefono(result.data.telefono)
        setDireccion(result.data.direccion)

    }

    return(
        <div>
             <h3>Formulario para actualización de clientes</h3>
            <form onSubmit={editarClientes}>

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

export default CompEditarClientes;