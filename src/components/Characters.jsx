import React, { useState, useEffect, useReducer } from "react";
import Card from "./Card.jsx";
import "../assets/styles/Characters.css";
import CardFav from "./CardFav";

const initialState = { favorites: [] };

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (favorite) => action.payload.id !== favorite.id
          ),
        ],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: favorite });
  };

  const handleFavoriteOff = (favorite) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: favorite });
    console.log({ payload: favorite.id });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <div className="favoritesContainer">
        {favorites.favorites.map((favorite) => (
          <div key={favorite.id}>
            <CardFav
              handleFavoriteOff={() => handleFavoriteOff(favorite)}
              {...favorite}
            />
          </div>
        ))}
      </div>
      <div className="container">
        {characters.map((character) => (
          <Card
            key={character.id}
            {...character}
            handleClick={() => handleClick(character)}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
