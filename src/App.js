
import { useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Searchresultlist from './Components/Searchresultlist';
import Searchresult from './Components/Searchresult';

function App() {
  const[results,setResults] =useState([]);
  return (
    <div className="App">
      <div className="search-container">
        <Searchbar setResults={setResults}/> 
        <Searchresultlist results={results}/>
        <Searchresult  />

      </div>
    </div>
  );
}

export default App;
