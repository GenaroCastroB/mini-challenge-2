import React from "react";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <PokeCard pokemonData={mockPokemonData} />
    </div>
  );
}
