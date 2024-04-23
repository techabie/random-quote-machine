import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";

const IconLink = ({ quote, author }) => {
  return (
    <div className="row">
      <a
        className="col"
        target="_blank"
        style={{ color: "white" }}
        href={
          "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
          encodeURIComponent(author) +
          "&content=" +
          encodeURIComponent(quote) +
          "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        }
      >
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      <a
        className="col"
        id="tweet-quote"
        target="_blank"
        style={{ color: "white" }}
        href={`https://twitter.com/intent/tweet?text="${quote}" by +${author} 
          `}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default IconLink;
