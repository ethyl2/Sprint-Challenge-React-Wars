import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. 
  //Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=1`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  } ,[]);
  


  // Fetch characters from the star wars api in an effect hook. Remember, 
  //anytime you have a 
  // side effect in a component, you want to think about which state and/or 
  //props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((character, index) => {
        return <p>{character.name}</p>
      })}
    </div>
  );
}

export default App;
