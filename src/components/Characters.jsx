import React, { useState, useEffect, useReducer } from "react";
import "../assets/styles/Characters.css";
const initialState = { favorites: [] };

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
  };

  return (
    <div className="container">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>el personaje favorito es {favorite.name}</li>
      ))}
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt="" />
          <h2> {character.name} </h2>
          <button type="button" onClick={() => handleClick(character.name)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
