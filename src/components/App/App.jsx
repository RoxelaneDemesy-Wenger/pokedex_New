// import { useState, useEffect } from 'react';
import './App.scss';
import Pokemon from '../Pokemon/Pokemon';
import pokemonData from '../../data/data';
import Header from '../Header/Header';
// import Log from '../Log/Log';
// import Menu from '../Pokemon/Menu/Menu';

function App() {
  // const [pokemonData, setPokemonData] = useState([]);

  // useEffect(() => {
  //   console.log('dans le useEffect, Pokemon data:', pokemonData);
  //   fetch('https://tyradex.vercel.app/api/v1/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokemonData(data);
  //     });
  // }, [pokemonData]);

  // console.log('Pokemon data:', pokemonData);

  const selectedPokemon = pokemonData[0];

  return (
    <div className="container">
      <Header />

      {/* {pokemonData.map((pokemon) => (
        <Pokemon key={pokemon.pokedexId} data={pokemon} />
      ))} 
      permet de boucler les différents pokemons donc sera appliquer pour le composant Pokemons */}

      <Pokemon data={selectedPokemon} />
    </div>
  );
}

export default App;
