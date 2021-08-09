import React, { useState, useEffect } from "react";
import "./styles.css";

const Cards = (props) => {
  const cards = props.cards;

  let shuffled = cards
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  useEffect(() => {
    const changeColorOnClick = (e) => {
      props.selectBox(e.target.id);
    };

    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      document.addEventListener("click", changeColorOnClick);
    });

    // return () => {
    //   document.removeEventListener("click", changeColorOnClick);
    // };
  });

  return (
    <div className="cards-wrapper">
      {shuffled.map((card) => {
        return (
          <div
            key={card.number}
            className={card.hit ? "card selected" : "card"}
            id={card.number}
          >
            <img key={Date.now()} id={card.number} src={card.src}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
