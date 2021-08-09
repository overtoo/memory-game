import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import "./components/styles.css";

const App = () => {
  const [cards, setCards] = useState([
    {
      number: 0,
      name: "gab",
      hit: false,
      src: "https://i.imgur.com/1A5DUpH.png",
    },
    {
      number: 1,
      name: "irem",
      hit: false,
      src: "https://i.imgur.com/o9KkSSi.png",
    },
    {
      number: 2,
      name: "salar",
      hit: false,
      src: "https://i.imgur.com/3RwCgxB.png",
    },
    {
      number: 3,
      name: "npc1",
      hit: false,
      src: "https://i.imgur.com/Tc6audg.png",
    },
    {
      number: 4,
      name: "npc2",
      hit: false,
      src: "https://i.imgur.com/0GZCxnT.png",
    },
    {
      number: 5,
      name: "npc3",
      hit: false,
      src: "https://i.imgur.com/oJBaLa3.png",
    },
    {
      number: 6,
      name: "npc4",
      hit: false,
      src: "https://i.imgur.com/vzwSgbg.png",
    },
    {
      number: 7,
      name: "npc5",
      hit: false,
      src: "https://i.imgur.com/rykhJYQ.png",
    },
    {
      number: 8,
      name: "npc5",
      hit: false,
      src: "https://i.imgur.com/Dr3JxWP.png",
    },
    {
      number: 9,
      name: "npc5",
      hit: false,
      src: "https://i.imgur.com/VHRCaoN.png",
    },
    {
      number: 10,
      name: "npc5",
      hit: false,
      src: "https://i.imgur.com/vIFalx3.png",
    },
    {
      number: 11,
      name: "npc5",
      hit: false,
      src: "https://i.imgur.com/RlfORfO.png",
    },
  ]); //from JSON file
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState([]);
  const [reset, setReset] = useState(false);
  const [selectedBox, setSelectedBox] = useState("EY");

  const selectBox = (itemId) => {
    setSelectedBox(itemId);
    console.log("select box function");
    console.log(selectedBox);
    console.log(itemId);
    console.log("select box function -end");
  };

  useEffect(() => {
    if (selected.includes(selectedBox)) {
      console.log("***********INCLUDED ***********");
      setReset(true);
      console.log("RESET IS TRUE");
      setFailed(true);
      console.log("FAIL IS TRUE");
    } else {
      console.log(" *********** DOESNT INCLUDE ***********");

      setFailed(false);
      setSelected([...selected, selectedBox]);
      console.log([...selected, selectedBox]);
      setCards(
        cards.map((item) =>
          item.number == selectedBox ? { ...item, hit: true } : item
        )
      );
    }
    if (reset) {
      setSelected(["ey"]);
      setCards(cards.map((item) => (true ? { ...item, hit: false } : item)));
      setReset(false);
      setFailed(false);
    }
  }, [selectedBox]);

  return (
    <div>
      <div className={failed ? "playagain" : "playagain hide"}>
        {console.log("App rendered.")}
        score: {selected.length - 1}
        <div>click to play again</div>
      </div>
      <div className="header">
        <span className="title">Memory Game</span>
        <span className="score">Score: {selected.length - 1}</span>
      </div>
      <div className={failed ? "content failed failed-transition" : "content"}>
        <Cards cards={cards} selectBox={selectBox} />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
