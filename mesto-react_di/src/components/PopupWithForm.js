function PopupWithForm(props) {
  return (
    <section
      className={"popup popup_type_card" + (props.isOpen ? " popup_opened" : "")}
    >
      <div className="popup__container">
        <button 
        type="button" 
        className="popup__close-button"
        onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          className="popup__form popup__form_type_card"
          noValidate
        >
          {props.children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
