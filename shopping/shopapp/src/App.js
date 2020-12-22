import logo from './logo.jpg';
import './App.css';
import trinh from './trinhcute.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={trinh} className="App-logo" alt="logo" />
        <p>
          Nhìn <code>src/App.js</code> and Nhìn
        </p>
        <p></p>
       <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
