import React from "react";
import App from "./App";

function EmojiCard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojiSymbol}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default EmojiCard;
