import { useState } from "react";
import hamburguer from "./assets/hamburguer.png";




function Pedido({ imagem }) {

  const [valor, setValor] = useState(0);

  function aumentar() {
    setValor(valor + 1)
  }

  function diminuir() {
    if (valor > 0) {
      setValor(valor - 1)
    }
  }

  return (
    <div className={`container `}>
      <img src={imagem} alt="hamburguer" />
      <h1>Hamburguer</h1>
      <p>Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.</p>
      <div>
        <button onClick={diminuir}>-</button>
        <span>{valor}</span>
        <button onClick={aumentar}>+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Pedido imagem={hamburguer} />
    </div>
  );
}

export default App;