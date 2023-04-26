import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

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
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile-info"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_type_profile-info"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_type_card"
        >
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_type_change-avatar"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      <ImagePopup />
      <PopupWithForm title="Вы уверены?" name="confirm-delete">
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_type_confirm"
          onClose={closeAllPopups}
        >
          Да
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;
