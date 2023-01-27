import React from 'react';
import './Pokecard.css';
const Pokecard = ({ pokemonInfo }) => {
  let pmArray = [];
  pokemonInfo.map((p) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    pmArray.push(
      <div className="shadowbox">
        <h3>{p.name}</h3>
        <img src={imgSrc} />
        <h5>Type : {p.type}</h5>
        <h5>Exp : {p.base_experience}</h5>
      </div>
    );
  });
  return pmArray;
};

export default Pokecard;
