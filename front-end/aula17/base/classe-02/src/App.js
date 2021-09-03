import close from './assets/close.svg';
import cookie from './assets/cookie.svg';


function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={close} alt="close" className="close-button" />
        <img src={cookie} alt="cookie" />
        <p>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing</p>
        <button>
          Tudo bem!
        </button>
      </div>
    </div>
  );
}

export default App;
