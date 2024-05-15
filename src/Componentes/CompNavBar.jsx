import React from "react";

// componente para la barra de navegación
const CompNavBar = () => {

    return(
        <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a href="/" className="navbar-brand"> Inicio </a>
    <button
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarSupportedContent"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a href="/login" className='nav-link'> Login </a></li>
        
        <li className="nav-item"><a href="/clientes" className='nav-link'> Clientes </a></li>

        <li className="nav-item"><a href="/sedes" className='nav-link'> Sedes </a></li>
      </ul>
    </div>
  </div>
</nav>


        </div>
    )
}

export default CompNavBar;