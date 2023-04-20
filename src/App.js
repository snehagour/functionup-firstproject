import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App12">
        <h1>Benifits of using react...</h1>
      <ol>
       <li>Component-based archifecture</li>
       <li>Virtule DOM for efficient updates</li>
       <li>Rich ecosystem and community</li>
       <li>Cross-platform development</li>
       <li>Storng community support</li>
      </ol> 
      <button>Get Started</button>
      </div>
      
      
    </div>
  );
}

export default App;
