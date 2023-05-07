import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {

    return(
        <PopupWithForm
          title="Обновить аватар"
          name="change-avatar"
          isOpen={props.isOpen}
          onClose={props.onClose}
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
    )
}

export default EditAvatarPopup;