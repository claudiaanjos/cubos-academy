import profile from './assets/profile.png';

import './App.css';

function App() {
  return (
    <div>
      <img src={profile} alt="Pessoa" />
        <h1>Kelvin Costa</h1>
        <span>@costa</span>
        <p class="primeiro-paragrafo">140 seguidores</p>
        <p>207 seguindo</p>
    </div>
  );
}

export default App;
