import './App.css';

function App() {
  const club = "Web Dev Club";
  const memberCount = 45;
  const ecessLink = "https://www.purdue-ecess.org/";

  return (
    <div className="App">
      <div className="Content">
        <h1>Welcome to { club }</h1>
        <p>Member Count: { memberCount }</p>
        <p>{ 1000 }</p>
        <p>{ "String example" }</p>
        <p>{ [1, 2, 3, 4, 5, 6, 7] }</p>
        <p>{ Math.random() * 100 }</p>
        <a href={ ecessLink }>ECESS Website</a>
      </div>
    </div>
  );
}

export default App;
