import "./Documento.css";
const Documento = () => {
  return (
    <div className="document">
      <div className="personalInformation" /* todo esto va a la izquierda */>
        <img
          className="detallesFoto"
          src="/finnelhumano.jpeg"
          alt="fotoPerfil"
        />
        <h2>Informacion Personal</h2>
        <p>
          Fecha de Nacimiento: 04/08 /19 9 2 <br />
          Celular: (011) 15 - 345 8 - 6 2 9 2 <br />
          Correo: mendez.paula92@gmail.com <br />
          Dirección: Cafayate 4676 , CABA <br />
          CUIL : 27- 3 67213 3 6 -7
        </p>
        <p>Entra a mi perfil de Linkedin para mas información:</p>
        {/* esto es el link y el estilo */}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/paula-mendez-a3694b1ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
      </div>

      <div /* todo esto va a la derecha */>
        <h1 className="title">Bienvenidxs</h1>
        {/* este es el titulo de arriba */}
        <br />
        <div>
          <h2> Experiencia Laboral:</h2>
          {/* esto es subtitulo y relleno de texto */}
          <p>No se que poner pero lo lleno con esto</p>
          <div className="classExp">
            <h4 className="titulo">QA Tester Manual</h4>
            <span className="fecha">Desde Marzo 2019 a Noviembre 2022</span>
            <h5>• Tester manual para ACTI</h5>
            <ul>
              <li>Tester Manual en aplicación desarrollada para Andriod.</li>
              <li>Creada para registro de datos de alumnos.</li>
              <li>Relevamiento de bugs.</li>
              <li>
                Pruebas de funcionabilidad, usabilidad, estres, carga, etc.
              </li>
            </ul>
          </div>
          <br />
          <div className="classExp">
            <h4 className="titulo">QA Tester Manual</h4>
            <span className="fecha">Desde Junio 2021 a Marzo 2022</span>
            <h5>• Tester manual para Pet-Shop Online</h5>
            <ul>
              <li>Creacion de plan de pruebas..</li>
              <li>Relevamiento de bugs.</li>
              <li>Simulando el rendimiento del producto</li>
              <li>Asegurar que el producto este listo para el publico.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documento;
