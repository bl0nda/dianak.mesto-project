import { useState, useEffect } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import avatar from "../images/avatar.jpg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Жак Ив-Кусто",
    about: "Исследователь океана",
    avatar: `${avatar}`,
  });
  const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api
      .getProfileData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(data) {
    api.setProfileData(data)
    .then((res) => {
    setCurrentUser(res);
    closeAllPopups();
  })
    .catch((err) => console.log(err));
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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {}

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          title="Вы уверены?"
          name="confirm-delete"
          buttonText="Да"
        ></PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
