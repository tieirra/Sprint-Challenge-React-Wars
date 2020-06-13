import React, { useState, useEffect } from "react";
import './App.css';
import People from "./components/Character";
import {Row} from "reactstrap"
import axios from 'axios';




 const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState({});
 
  useEffect(() => {
    
    axios.get('https://swapi.dev/')

    .then(resp=> setCharacter(resp.data.results))

      .catch(error => {
        console.log(error);
      });

  }, []);

console.log(character)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 


  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      <Row>
     { character.map((characterInfo=>{
        return <People image={characterInfo.image} name={characterInfo.name} status={characterInfo.status} species={characterInfo.species} img={characterInfo.status} key={characterInfo.id} note={characterInfo.type}/> 

      }))}

      </Row>
      
    </div>
  );
}

export default App;
