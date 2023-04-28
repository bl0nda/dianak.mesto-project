import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile-info"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__field-container">
          <input
            type="text"
            minLength="2"
            maxLength="40"
            name="name"
            id="change-name"
            className="popup__field popup__field_change_name"
            placeholder="Имя"
            required
          />
          <span className="popup__field-error change-name-error"></span>
        </label>
        <label className="popup__field-container">
          <input
            type="text"
            minLength="2"
            maxLength="200"
            name="about"
            id="change-job"
            className="popup__field popup__field_change_job"
            placeholder="Вид деятельности"
            required
          />
          <span className="popup__field-error change-job-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <label className="popup__field-container">
          <input
            type="text"
            minLength="2"
            maxLength="30"
            name="title"
            id="change-cards-name"
            className="popup__field popup__field_change_cards-name"
            placeholder="Название"
            required
          />
          <span className="popup__field-error change-cards-name-error"></span>
        </label>
        <label className="popup__field-container">
          <input
            type="url"
            name="link"
            id="change-image"
            className="popup__field popup__field_change_image"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__field-error change-image-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <label className="popup__field-container">
          <input
            type="url"
            name="avatar"
            id="change-avatar"
            className="popup__field popup__field_change_avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__field-error change-avatar-error"></span>
        </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        title="Вы уверены?"
        name="confirm-delete"
        buttonText="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
