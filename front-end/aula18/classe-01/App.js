import { useState } from 'react';
import close from './assets/close.svg';
import cookie from './assets/cookie.svg';


function App() {
  const [visibilidade, setVisibilidade] = useState('');

  function esconder() {
    const desaparecer = visibilidade === '' ? 'escondido' : '';
    setVisibilidade(desaparecer);
  }


  return (
    <div className="App">
      <div className={`card ${visibilidade}`}>
        <img src={close} alt="close" className="close" onClick={esconder} />
        <img src={cookie} alt="cookie" className="cookie" />
        <p>Nós utilizamos cookies para melhorar <br /> nossa UX, analytics e marketing.</p>
        <button onClick={esconder}>Tudo bem!</button>
      </div>
    </div>
  );
}

export default App;
