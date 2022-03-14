import React, { useState } from "react";
import Button from "./Button";
import "../assets/styles.css";

export default function Vegetables() {
  const [countTomatoe, setCountTom] = useState(10);
  const [countPotatoe, setCountPot] = useState(8);
  const [countCarrot, setCountCar] = useState(5);
  const [countOnion, setCountOni] = useState(7);

  let incrementTom = () => {
    setCountTom(countTomatoe + 1);
  };

  let decrementTom = () => {
    setCountTom(countTomatoe - 1);
  };

  let incrementPot = () => {
      setCountPot(countPotatoe + 1);
  }

  let decrementPot = () => {
      setCountPot(countPotatoe - 1);
  }

  let incrementCar = () => {
      setCountCar(countCarrot + 1);
  }

  let decrementCar = () => {
      setCountCar(countCarrot - 1);
  }

  let incrementOni = () => {
      setCountOni(countOnion + 1);
  }

  let decrementOni = () => {
      setCountOni(countOnion - 1);
  }
  return (
    <div className="vegetables">
        <div className="count">
          <h3>Tomatoes - {<h1> {countTomatoe} </h1>}</h3>
          <Button title={"-"} action={decrementTom} />
          <Button title={"+"} action={incrementTom} />
        </div>
        <div className="count">
          <h3>Potatoes - {<h1> {countPotatoe} </h1>}</h3>
          <Button title={"-"} action={decrementPot} />
          <Button title={"+"} action={incrementPot} />
        </div>
        <div className="count">
          <h3>Carrot - {<h1> {countCarrot} </h1>}</h3>
          <Button title={"-"} action={decrementCar} />
          <Button title={"+"} action={incrementCar} />
        </div>
        <div className="count">
          <h3>Onion - {<h1> {countOnion} </h1>}</h3>
          <Button title={"-"} action={decrementOni} />
          <Button title={"+"} action={incrementOni} />
        </div>
    </div>
  );
}
