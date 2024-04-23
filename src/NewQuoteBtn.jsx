import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const NewQuoteBtn = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        id="new-quote"
        type="button"
        className="btn"
        onClick={onClick}
        style={{
          backgroundColor: "#FEFAE0",
          color: "black",
        }}
      >
        New Quote
      </button>
    </div>
  );
};

export default NewQuoteBtn;
