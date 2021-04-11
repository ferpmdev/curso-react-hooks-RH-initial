import React from "react";

const card = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <img src={characters.image} alt="" />
    </div>
  );
};

export default card;
