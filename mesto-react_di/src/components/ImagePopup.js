function ImagePopup() {
  return (
    <section className="popup popup_type_big-image">
      <div className="popup__container-big-image">
        <button type="button" className="popup__close-button"></button>
        <figure className="popup__picture">
          <img src="#" alt="" className="popup__big-image" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
