import { useState } from "react";
import "./rate.css";
import star from "/images/Star.png";

export default function Rate({ setSubmit, rate, setRate }) {
  const buttons = [1, 2, 3, 4, 5];
  console.log(rate);

  return (
    <div className="rate-container">
      <div className="image">
        <img src={star} className="star" />
      </div>
      <h1 className="question">How did we do?</h1>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons-container">
        {buttons.map((buttons, index) => (
          <button
            className="buttons"
            onClick={() => setRate(buttons)}
            key={index}
            style={
              rate == buttons
                ? { backgroundColor: " gray", color: "white" }
                : {}
            }
          >
            {buttons}
          </button>
        ))}
      </div>
      <button className="submit" onClick={() => rate && setSubmit(true)}>
        SUBMIT
      </button>
    </div>
  );
}
