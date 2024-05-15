// importación de las depedencias
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// variable para almacenar la conexión 
// const URL = 'http://localhost:5000/api/sedes/'
const URL = 'https://proyectotalentotech.onrender.com/api/sedes'

// componente para mostrar sedes
const CompMostrarSedes = () => {
    // creación de un useState, pasando en parametros un arreglo vacío
    const [sedes, setSedes] = useState([]);

    // useEffect para la recarga de información
    useEffect(() => {
        getSedes();
    }, []);

    // función asíncrona para mostrar las sedes
    const getSedes = async () => {
        const result = await axios.get(URL);
        setSedes(result.data);
    }

    // función asíncrona para eliminar sedes, la cuál usa el ID como parametro
    const eliminarSedes = async (id) => {
        await axios.delete(`${URL}${id}`);
        getSedes();
    }

    return (
        <div className="container">
            <h2> Sedes </h2>
            <div className="row">
                <div className="col">
                    <Link to="/sedes/agregar" className="btn btn-info mt-2 mb-2"> <i className="fa-solid fa-circle-plus"></i> </Link>
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Zona</th>
                                <th>Direccion</th>
                                <th>Capacidad</th>
                                <th>Disponibilidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sedes.map((sede, index) => (
                                <tr key = {index}>
                                    <td> {sede.nombre}</td>
                                    <td> {sede.zona}</td>
                                    <td> {sede.direccion}</td>
                                    <td> {sede.capacidad}</td>
                                    <td> {sede.disponibilidad.toString()}</td>
                                    <td>
                                        <Link to={`/sedes/editar/${sede._id}`} className = "btn btn-warning mt-2 mb-2"> <i className="fa-solid fa-pen-ruler"></i> </Link>
                                        <button onClick={() => eliminarSedes(sede._id)} className="btn btn-danger mt-2 mb-2"> <i className="fa-solid fa-user-slash"></i> </button>
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

export default CompMostrarSedes;