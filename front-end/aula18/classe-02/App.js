import foto from "./assets/kelvin-costa.png";
import { useState } from 'react';

function Card({ textoBotao, seguidores, clique, botao}) {
  return (
    <div>
      <div className="card">
        <img src={foto} alt="foto" />
        <h2>Kelvin Costa</h2>
        <span className="contato">@costa</span>
        <span className="info">{seguidores} seguidores <br /> 207 seguindo</span>
      </div>
      <div>
        <button className={botao} onClick={clique}>
            {textoBotao}
        </button>
      </div>
    </div>
  );
}


function App() {
  const [acao, setAcao] = useState('');
  const [texto, setTexto] = useState('SEGUIR');
  const [seg, setSeg] = useState('140')

  function seguir() {
    const seguindo = acao === '' ? 'ativo' : '';
    const novoTexto = texto === 'SEGUIR' ? 'SEGUINDO' : 'SEGUIR';
    const novoSeguidor = seg === '140' ? '141' : '140';
    setAcao(seguindo);
    setTexto(novoTexto);
    setSeg(novoSeguidor);
  }

  return (
    <div className="App">
      <Card 
      seguidores={seg} 
      clique={seguir} 
      botao={`botao ${acao}`}
      textoBotao={texto}>
      </Card>
    </div>
  );
}

export default App;
