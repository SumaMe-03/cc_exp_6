import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: <strong>Suma Gadepalli</strong><br />
          Class: <strong>BE 5</strong><br />
          Roll No: <strong>42364</strong>
          Subject: <strong>Cloud Computing</strong><br />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Computing Exp 6
        </a>
      </header>
    </div>
  );
}

export default App;
