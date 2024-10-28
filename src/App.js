import logo from './logo.svg';
import './App.css';

function Button(){
  return(
    <h5>testing application h5</h5>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> andnew testin application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button />
        </a>
      </header>
    </div>
  );
}

export default App;
