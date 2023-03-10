import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        GEDE
        <div className="separation">
          <a>cosa1</a>
          <a>cosa2</a>
          <a>cosa3</a>
        </div>
      </header>
      {children}
      <footer className="futer">Gracias por ingresar! :D</footer>
    </>
  );
};
export default Layout;
