import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import { Container, Row, Button, Spinner, Jumbotron } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. 
  //Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState('page=1');

  /* Stretch: Build a pagination system that will 
  allow you to load the next page of data.*/

  function getCharacters(direction) {
    const numberPattern = /\d+/g;
    let num = page.match(numberPattern);
    console.log(num);
    (direction === "next")? num++ : num--;
    
    if (num > 9) {
      num = 1;
    }
    if (num < 1) {
      num = 9;
    }
    console.log(num);
    setPage(`page=${num}`);
  }

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?${page}`)
      .then(response => {
        //console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  } ,[page]);
  
  // Fetch characters from the star wars api in an effect hook. Remember, 
  //anytime you have a 
  // side effect in a component, you want to think about which state and/or 
  //props it should
  // sync up with, if any.
  if (characters === []) return <Spinner color="secondary" />;

  return (

    <div className="App">
      <Jumbotron>
        <h1 className="Header display-3">React Wars Characters</h1>
      </Jumbotron>
      
      <Button className="mb-3" onClick={() => getCharacters("previous")}>Previous Page</Button>
      <Button className="mb-3 ml-4" onClick={() => getCharacters("next")}>Next Page</Button>
      
      <Container>
        <Row>
        {characters.map((character, index) => {
          return <CharacterCard key={index}
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    birth_year={character.birth_year}
                    gender={character.gender}
                    hair_color={character.hair_color}
                    skin_color={character.skin_color}
                    eye_color={character.eye_color} />
        })}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
