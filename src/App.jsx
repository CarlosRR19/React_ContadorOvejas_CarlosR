import { useState } from "react";
import SheepList from "./components/SheepList";
import "./contadorOvejas.css";

function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h3 className="title">Contador de ovejas</h3>
      <div className="wrapper">
        <h4 className="counter">{contador}</h4>
        <button className="button" onClick={incrementarContador}>
          Contar Oveja
        </button>
        <SheepList className="image__list" size={contador} />
      </div>
    </>
  );
}

export default App;
