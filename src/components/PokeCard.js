import React from "react";

const PokeCard = ({ pokemonData }) => (
  <div className="pokeDataContainer">
    <h1>{pokemonData.name}</h1>
    <img src={pokemonData.sprites.front_default} alt="front_default" />
    <img src={pokemonData.sprites.front_shiny} alt="front_shiny" />
    <a className="poke-video-btn" href={pokemonData.video}>
      See {pokemonData.name} video
    </a>
  </div>
);

export default PokeCard;
