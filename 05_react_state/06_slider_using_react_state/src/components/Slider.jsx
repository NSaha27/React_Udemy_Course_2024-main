import { useState } from "react";
import "./Style.css";

function Slider({ pictureObj }) {
  const [picNumber, setPicNumber] = useState(0);

  function changeToPrev() {
    if (picNumber > 0) setPicNumber(picNumber - 1);
  }
  function changeToNext() {
    if (picNumber < pictureObj.length - 1) setPicNumber(picNumber + 1);
  }

  return (
    <div className="slider">
      <div
        className="picture-handler"
        style={{
          backgroundImage: `url('images/${pictureObj[picNumber].image}')`,
        }}
      >
        <ul className="slide-indicator">
          {pictureObj.map((pic, indx) => {
            return (
              <li
                key={indx}
                className={`indicator ${indx === picNumber ? "active" : ""}`}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="slide-handler-btns">
        <button className="btn" onClick={changeToPrev}>
          Prev
        </button>
        <button className="btn" onClick={changeToNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
