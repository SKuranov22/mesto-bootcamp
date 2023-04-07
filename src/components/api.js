import { createElement } from "./card.js";
import { listCardContainer, cardForm } from "./constants.js";
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-7',
    headers: {
      authorization: '400483bd-d199-4e6d-9f74-66e7b1937a87',
      'Content-Type': 'application/json'
    }
}
  
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
      .then(checkResponse);
}

const setUserCard = (data) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject((`Ошибка: ${res.status}`))
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        // добавляем новую карточку в список на странице
        const newCardElement = createElement(res);
        listCardContainer.prepend(newCardElement);
        cardForm.reset();
      });
}

const deleteUserCard = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: config.headers
    })
      .then(checkResponse);
}

const getProfileInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    })
      .then(checkResponse)
}

const setUserInfo = (userData) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(checkResponse)
}

const putLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then(checkResponse)
  }

const deleteLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers
    })
      .then(checkResponse);
}

const setUserAvatar = (userData) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: userData.avatar,
    })
  })
    .then(checkResponse);
}

export { config, getInitialCards, setUserCard, putLike, deleteLike, getProfileInfo, setUserInfo, deleteUserCard, setUserAvatar, checkResponse }