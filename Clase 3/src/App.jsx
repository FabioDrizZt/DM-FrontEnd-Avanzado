import "./App.css";
import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hola desde el componente de clase</h2>
      </div>
    );
  }
}

function App() {
  console.log("hola desde clg");
  return (
    <>
      <div className="App">
        <h1>Hola mundo desde App!</h1>
        <ClassComponent />
      </div>
    </>
  );
}

export default App;
