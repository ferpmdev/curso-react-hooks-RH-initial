import React, { useState, useEffect, useReducer } from "react";
import Card from "./Card";
import "../assets/styles/Characters.css";
import CardFav from "./CardFav";

const initialState = { favorites: [] };

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== favorite.id),
          //action.payload,
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
    console.log(favorite);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <div className="container">
        {favorites.favorites.map((favorite) => (
          <div>
            <CardFav
              key={favorite.id}
              props={{
                ...favorite,
                handleFavoriteOff: () => handleFavoriteOff(favorite),
              }}
            />
          </div>
        ))}
      </div>
      <div className="container">
        {characters.map((character) => (
          <Card
            key={character.id}
            props={{ ...character, handleClick: () => handleClick(character) }}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
