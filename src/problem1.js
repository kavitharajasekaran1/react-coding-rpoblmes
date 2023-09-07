import React, { useEffect, useState } from "react";
import "./styles.css";

const arr = ["playciricket", "playfootball", "playchese", "videogame"];

const Problme1 = () => {
  const [games, setGames] = useState(arr);

  useEffect(() => {
    games.map((item) => {
      document.getElementById(`id-${item}`).style.display = "none";
    });
  }, []);
  const DeleteItem = (item, index) => {
    let itemindex = games.indexOf(item);
    console.log(`id-${itemindex}`, `id-${index}`);
    const removeNode = () => document.getElementById(`ul-${item}`).remove();
    removeNode();
  };
  const checkboxChange = (item, e) => {
    console.log(e.target.value);
    if (document.getElementById(item).checked === true) {
      document.getElementById(`id-${item}`).style.display = "block";
    } else {
      document.getElementById(`id-${item}`).style.display = "none";
    }
  };
  return (
    <div className="problm1-main">
      <div className="list">
        {games.map((item, index) => {
          return (
            <ul key={index} id={`ul-${item}`} className="ul">
              <input
                id={item}
                type="checkbox"
                onChange={(e) => checkboxChange(item, e)}
              />
              <li key={index} className="list-items">
                {item}
              </li>
              <button
                class="btn"
                id={`id-${item}`}
                onClick={() => DeleteItem(item, index)}
                className="delete"
              >
                X
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Problme1;
