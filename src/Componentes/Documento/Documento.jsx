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
        <p>Aca va la infor personal que no puse</p>
        <p>Entra a mi perfil de Linkedin para mas informacion:</p>
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
        <div className="classExp">
          <h2> Experiencia Laboral:</h2>
          {/* esto es subtitulo y relleno de texto */}
          <p>No se que poner pero lo lleno con esto</p>
          <div>
            <h4>QA Tester Manual1</h4>
            <p>blablabla experiencia de qa haciendo cosas de qa</p>
          </div>
          <div>
            <h4>QA Tester Manual2</h4>
            <p>blablabla experiencia de qa haciendo cosas de qa en otro lado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documento;
