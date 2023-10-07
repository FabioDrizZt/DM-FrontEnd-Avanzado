import "./App.css";
import Encabezado from "./components/Encabezado";
import Lista from "./components/Lista";
import Saludo from "./components/Saludo";

const Padre = (props) => {
  return (
    <div
      style={{
        width: "75%",
        background: "green",
        height: "200px",
        padding: "20px",
      }}
    >
      <h5>Soy un padre</h5>
      {props.children}
    </div>
  );
};

const Hijo = (props) => {
  return (
    <div
      style={{
        width: "50%",
        background: "#FA8072",
        height: "100px",
        padding: "10px",
        color: "white",
        fontSize: "30px",
      }}
    >
      {props.autor}
    </div>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <Encabezado>Este es el encabezado</Encabezado>
        <Saludo nombre="Juan" />
        <Lista titulo="Mi lista">
          <Saludo nombre="pedro" />
          <Saludo nombre="maria" />
          <Saludo nombre="becerra" />
        </Lista>
        <Padre>
          <Hijo autor="Soy un hijo" />
        </Padre>
      </div>
    </>
  );
}

export default App;
