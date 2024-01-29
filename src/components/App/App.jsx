import { useState, useEffect } from 'react';
import './App.scss';
import Pokemon from '../Pokemon/Pokemon';
import Header from '../Header/Header';
// import Log from '../Log/Log';
// import Menu from '../Pokemon/Menu/Menu';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    console.log('dans le useEffect, Pokemon data:', pokemonData);
    fetch('https://tyradex.vercel.app/api/v1/')
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [pokemonData]);

  console.log('Pokemon data:', pokemonData);

  return (
    <div className="container">
      <Header />
      {/* <Log /> */}
      {pokemonData.map((pokemon) => (
        <Pokemon key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
}

export default App;
