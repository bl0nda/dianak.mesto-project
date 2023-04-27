function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="cards__element">
      <img
        className="cards__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="cards__description">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button type="button" className="cards__like"></button>
          <p className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="cards__delete"></button>
    </div>
  );
}

export default Card;
