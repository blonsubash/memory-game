import "./singleCard.css";

import club from "../images/club.png";
import spade from "../images/spade.png";
import heart from "../images/heart.png";
import diamond from "../images/diamond.png";
import backCard from "../images/card-back.jpg";

export default function SingleCard({
  card,
  handleChoice,
  flippedCard,
  disabled,
}) {
  const handleBackClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const handleImageChangeWithType = (cardType) => {
    switch (cardType) {
      case "club":
        return club;
      case "spade":
        return spade;
      case "heart":
        return heart;
      case "diamond":
        return diamond;
      default:
    }
  };

  return (
    <div className="card" key={card.id} onClick={handleBackClick}>
      <div className={flippedCard ? "flipped" : ""}>
        <div className="card-front">
          <div className="card-front-numbers">
            <p className="card-front-top-number">{`${card.cardNumber}`}</p>
          </div>
          <div className="card-type-image">
            <img src={handleImageChangeWithType(card.cardType)} />
          </div>
          <div className="card-front-numbers">
            <p className="card-front-bottom-number">{`${card.cardNumber}`}</p>
          </div>
        </div>
        <div className="card-back">
          <img src={backCard} />
        </div>
      </div>
    </div>
  );
}
