import logo from './logo.svg';
import './App.css';
import Card from './Card';

function Button(props){
  return(
    <h5>this is a web  {props.text.text}</h5>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Card />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text={{text: "valuestest"}}/>
        </a>
      </header>
    </div>
  );
}

export default App;
