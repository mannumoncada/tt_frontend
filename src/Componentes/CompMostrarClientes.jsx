// Uniendo el backend

// Se importa axios (para peticiones), router dom, useState, y useEffect.
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// se alamcena el enlace, despues de haber sido comprobado en Postman
const URL = ' http://localhost:5000/api/clientes/';

// Se crea la función a ejecutar
const CompMostrarClientes = () => {
    // se usa el useState, con parametros vacios
    const [clientes, setClientes] = useState([]);
    // se usa useEffect para que realice la actualización/recarga de la información - para mostrar los cambios renderizados
    useEffect(() => {
        getClientes()
    }, []);

    // función asíncrona para mostrar los clientes
    const getClientes = async () => {
        const result = await axios.get(URL);
        setClientes(result.data);
    }

    // función asíncrona para eliminar clientes
    // la función asincrona sí requiere de un parametro, que va a ser el ID
    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`);
        getClientes();
    }

    return(
        <div className="container">
            <h2> Clientes </h2>
            <div className="row">
                <div className="col">
                    <Link to='/clientes/agregar' className="btn btn-info mt-2 mb-2"> <i className="fa-solid fa-circle-plus"></i> </Link>
                    <table className="table table-hover  table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Cedula</th>
                                <th>Correo electrónico</th>
                                <th>Telefono celular</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key = {index}>
                                    <td> {cliente.nombres}</td>
                                    <td> {cliente.apellido}</td>
                                    <td> {cliente.cedula}</td>
                                    <td> {cliente.correo}</td>
                                    <td> {cliente.telefono}</td>
                                    <td> {cliente.direccion}</td>
                                    <td> 
                                    <Link to={`/clientes/editar/${cliente._id}`} className="btn btn-warning mt-2 mb-2"> <i className="fa-solid fa-pen-ruler"></i> </Link>
                                    <button onClick= {() => eliminarClientes(cliente._id)} className="btn btn-danger mt-2 mb-2"><i className="fa-solid fa-user-slash"></i></button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarClientes;