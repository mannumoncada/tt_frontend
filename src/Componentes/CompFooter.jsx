import React from "react";

// componente para pie de página
const CompFooter = () => {

    // variables para almacenar los iconos de redes
    const LinkedIn =  <img src="https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151299455.jpg?t=st=1714949096~exp=1714952696~hmac=6afaa92cd555aab838bf4d7c26ef4d96045e39638709491a3fde05655f8925ad&w=740" className="image" width={50} height={50} alt="LinkedIn"></img>;

    const Instagram = <img src='https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151299465.jpg?t=st=1714949711~exp=1714953311~hmac=fd8c52794fa7e34e51efff72c0e282570b6706a67c0e936d67223a802278e9aa&w=740' className="image" width={50} height={50} alt="Instagram"></img>

    const Facebook = <img src='https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151299463.jpg?t=st=1714949783~exp=1714953383~hmac=b70b0dee71864923ab8ad22065b136fda1367767b6743a1c429196da37aafde6&w=740' className="image" width={50} height={50} alt="Facebook"></img>

    const Youtube = <img src='https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151299457.jpg?t=st=1714949901~exp=1714953501~hmac=7d7c8f03c35a5a89ad4e392e43bd630497467559c65fec4c3fd697f60bc4c29d&w=740' className="image" width={50} height={50} alt="YouTube"></img>

    const Twitter = <img src='https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151299461.jpg?t=st=1714949920~exp=1714953520~hmac=db9f001c417bab2d8a089f3ab66621b6c966d00b8d0db73ac92f29fbef164c9b&w=740' className="image" width={50} height={50} alt="Twitter"></img>    

    return(
        <div>
            <div className="container text-center">
                <div className="row">
                <h5>Redes sociales</h5>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                    {Instagram} <p>Instagram</p>
                    </div>
                    <div className="col-sm-4">
                    {Facebook} <p>Facebook</p>
                    </div>
                    <div className="col-sm-4">
                    {Youtube} <p>YouTube</p>
                    </div>
                    <div className="col-sm-4">
                    {Twitter} <p>X</p>
                    </div>
                    <div className="col-sm-4">
                    {LinkedIn} <p>LinkedIn</p>
                    </div>
                </div>
            <p><strong>Carrera 17B #69-20</strong></p>
            </div>
        </div>
    )
}

export default CompFooter;