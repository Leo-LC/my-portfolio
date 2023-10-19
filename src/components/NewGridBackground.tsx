import React from "react";
import { useEffect } from "react";
import style from "./GridBackground.module.scss";

const NewGridBackground = () => {
  const numberOfColumns = 10;
  const numberOfRows = 6;

  const numberOfCells = numberOfColumns * numberOfRows;

  useEffect(() => {
    for (let i = 0; i <= numberOfCells; i++) {
      const cell = document.createElement("div");
      const grid = document.querySelector("#grid");
      cell.className = style.cell;
      grid?.appendChild(cell);
    }
  }, []);

  return (
    <div
      id="grid"
      className={style.grid}
      style={{
        //TODO - make this dynamic based on the viewport
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      }}
    >
      <div className={style.cell}></div>
    </div>
  );
};

export default NewGridBackground;
