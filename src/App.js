
import './App.css';
import Invitation from './Components/Invitation';

function App() {
  return (
    <div className="App">
      
      <Invitation
      subject= "Birthday party Invitation"
      email = "JaGdish@gmail.com"
      host ="JaGdish"
      topic="Birthday party"
      friends = "Ritu, Suurabh, Kartik"
      venue="Green field Avenue"/>
      
    </div>
  );
}

export default App;
