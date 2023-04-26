import { useState, useEffect } from "react";
import avatar from "../images/avatar.jpg";
import api from "../utils/api.js";


function Main(props) {
  const [userName, setUserName] = useState("Жак Ив-Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = useState`${avatar}`;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfileData().then((res) => {
      console.log(res);
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
    api.getInitialCards().then((res) => {
      console.log(res);
      setCards(res);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__change-avatar-button"
          onClick={props.onEditAvatar}
        >
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
        </button>
        <div className="profile__name-container">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <h2 className="profile__job">{userDescription}</h2>

        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <div className="cards-container">
        {cards.map((cards) => {
          return (
            <div className="cards__element">
              <div className="cards__image" style={{ backgroundImage: `url($cards.link})` }}></div>
              <div className="cards__description">
                <h2 className="cards__title">{cards.name}</h2>
                <div className="cards__like-container">
                  <button type="button" className="cards__like"></button>
                  <p className="cards__like-counter"></p>
                </div>
              </div>
              <button type="button" className="cards__delete"></button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
