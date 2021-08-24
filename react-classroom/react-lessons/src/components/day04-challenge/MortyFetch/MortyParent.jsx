// Import and mount this component in the App.jsx

// You need to create a button click that will conduct the fetch of...
// Console log the characters
// See if you can store the characters into a useState variable
import React, { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import MortyChild from "./MortyChild";
const MortyParent = (props) => {
  const [results, setResults] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setResults(data.results);
  };

  const handleClick = () => {
    fetchURL();
  };

  const displayCards = () => results.map((character, index) => <MortyChild key={String(index)} character ={character}/>);
  return (
    <div>
        
      <p>Hello from Morty</p>
      <button onClick={handleClick}>Click for Morty</button>
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  );
};

export default MortyParent;
