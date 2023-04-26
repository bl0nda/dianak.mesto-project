function Card(props) {
  return (
    <div className="cards__element">
      <img
        className="cards__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <div className="cards__description">
        <h2 className="cards__title">{props.card.name}</h2>
        <div className="cards__like-container">
          <button type="button" className="cards__like"></button>
          <p className="cards__like-counter">{props.card.likes}</p>
        </div>
      </div>
      <button type="button" className="cards__delete"></button>
    </div>
  );
}

export default Card;