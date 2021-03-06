import React from "react";
import "../assets/styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap-grid.min.css";

const card = (props) => {
  const { handleClick, name, image } = props;
  return (
    <div className="card">
      <div className="title">
        <p>{name}</p>
      </div>
      <img src={image} alt="" />
      <div
        className="fontA"
        // type="text"
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default card;
