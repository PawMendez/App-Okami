import logo from "./logo.svg";
import Documento from "./Components/Documento/Documento";
import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="App">
        <Documento />
      </div>
    </Layout>
  );
}

export default App;
