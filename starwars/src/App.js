import React from 'react';
import './App.css';
import React , { Component } from 'react';
import Axios  from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters ] = useState();
const [error , setError] = useState();


useEffect(() => {
  peopleData(props.characters)
    .then(res => setUser(res.data.character))
    .catch(err => setError(err.response.message));
}, [props.characters]); 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 


  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
