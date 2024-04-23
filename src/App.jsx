import { useState } from "react";
import React from "react";
import QuoteDisplay from "./QuoteDisplay.jsx";
import randomQuote from "random-quotes";
import NewQuoteBtn from "./NewQuoteBtn.jsx";

import "bootstrap/dist/css/bootstrap.css";
const FADE_DURATION = 1000;
function App() {
  const colorPallete = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9844a",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#4d908e",
    "#577590",
    "#277da1",
  ];

  const initialColorState = colorPallete[Math.floor(Math.random() * 10)];
  const [quote, setNewQuote] = useState(randomQuote);
  const [themeColor, setThemeColor] = useState(initialColorState);
  //add extra props to control fading when user click btn
  const [fadeTransition, setFadeTransition] = useState(null);
  const [fadeState, setFadeState] = useState("fade-in");

  console.log(quote);
  const onClick = (e) => {
    e.preventDefault(); //prevent opening a new tab
    // Create a timer(a function) that runs after quote fades out
    const timeout = setTimeout(() => {
      setNewQuote(randomQuote());
      setThemeColor(colorPallete[Math.floor(Math.random() * 10)]);
      setFadeTransition(null);
      setFadeState("fade-in");
    }, FADE_DURATION); //delay time is FADE_DURATION.
    //Once button is clicked, stop any exiting transition.
    clearTimeout(fadeTransition);

    // Update state to perform the fade out from
    // current quote
    setFadeState("fade-out");
    setFadeTransition(timeout); //update fadeTransition by referencing timeout
  };
  return (
    <div>
      <QuoteDisplay
        quote={quote.body}
        author={quote.author}
        theme={themeColor}
        //passing onClick function to <QuoteDisplay> because it contain a btn that require a function props
        onClick={onClick}
        fade_state={fadeState}
        fade_duration={FADE_DURATION}
      />
    </div>
  );
}
export default App;
