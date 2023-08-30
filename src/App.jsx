import { useState } from "react";
import CalculateBill from "./components/CalculateBill";
import TimeConversor from "./components/TimeConversor";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {

  const [component, setComponent] = useState(0);
  return (
    <>
      <button onClick={() => setComponent(1)}>Punto 1</button>
      <button onClick={() => setComponent(2)}>Punto 2</button>
      <button onClick={() => setComponent(3)}>Punto 3</button>
      {component === 0 && <h1>Seleccione un punto</h1>}
      {component === 1 && <TimeConversor />}
      {component === 2 && <CalculateBill />}
      {component === 3 && <Welcome />}

    </>
  );
}

export default App;
