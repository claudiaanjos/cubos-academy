import kelvin from './assets/kelvin-costa.png';
import mario from './assets/mario-hisashi.png';
import anna from './assets/anna-bia.png';
import charles from './assets/charles-santos.png';


function UserCard({ picture, name, username, followers, following}) {
  return (
    <div className="card">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <span className="username">
        {username}
      </span>
      <span className="stats">
        {followers} seguidores <br />
        {following} seguindo
      </span>
    </div>
  )
}


function App() {

  const users = [
    {
      id: 1,
      name: "Kelvin Costa",
      picture: kelvin,
      username: "@costa",
      followers: 140,
      following: 207
    },
    {
      id: 2,
      name: "Charles Santos",
      picture: charles,
      username: "@charles.santos",
      followers: 302,
      following: 419
    },
    {
      id: 3,
      name: "Anna Bia",
      picture: anna,
      username: "@anab",
      followers: 842,
      following: 150
    },
    {
      id: 4,
      name: "Mario Hisashi",
      picture: mario,
      username: "@hisashi",
      followers: 28,
      following: 17
    }
  ];

  return (
    <div className="App">

      {users.map(function (user) {
        return ( 
        <UserCard
        key={user.id}
          {...user} />
        )
      })}

    </div>
  );
}

export default App;
