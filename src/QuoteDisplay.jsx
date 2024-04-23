import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import IconLink from "./IconLink.jsx";
import NewQuoteBtn from "./NewQuoteBtn.jsx";

function QuoteDisplay({
  quote,
  author,
  theme,
  onClick,
  fade_state,
  fade_duration,
}) {
  return (
    <div>
      <section className="vh-50 bg-light">
        <div className="container py-5 h-100">
          <div
            id="quote-box"
            className="row d-flex justify-content-center align-items-center h-100"
          >
            <div className="col-md-12 col-xl-5">
              <div
                className="card text-white"
                /*
                Animation is visualising a change in a value over time.
                The colour animation works because I'm animating a colour change on an element that’s always there.
                The other animations (like animation: "3s rollout" ) don’t work on quote and author because I'm replacing an element with a click event.
                React just switches it out immediately, so there’s zero time for an animation to run. To fade in/fade out on quote and author,
                I need to use setInterval, see App.jsx
                */
                style={{
                  backgroundColor: theme,
                  borderRadius: "15px",
                  transition: "2s ease-out",
                }}
              >
                <div className="card-body p-4">
                  <i className="fas fa-quote-left fa-2x mb-4"></i>

                  <p
                    className={`fade-wrapper ${fade_state}`}
                    style={{ transitionDuration: `${fade_duration}ms` }}
                    id="text"

                    // style={{ animation: "3s rollout" }} this doesn't work
                  >
                    {quote}
                  </p>

                  <hr />

                  <div className="d-flex justify-content-between">
                    <p
                      id="author"
                      className={`fade-wrapper mb-15 ${fade_state}`}
                      style={{ transitionDuration: `${fade_duration}ms` }}
                    >
                      {author}
                    </p>
                    <IconLink quote={quote} author={author} />
                  </div>
                  <NewQuoteBtn onClick={onClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default QuoteDisplay;
