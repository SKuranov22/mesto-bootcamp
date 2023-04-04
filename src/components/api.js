const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-7',
    headers: {
      authorization: '400483bd-d199-4e6d-9f74-66e7b1937a87',
      'Content-Type': 'application/json'
    }
}
  
const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

const setUserCard = (data) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject((`Ошибка: ${res.status}`))
      })
}

const getProfileInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
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
      .then(res => {
        if (res.ok) {
          console.log(res)
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
}

const getUserAvatar = () => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export { config, getInitialCards, setUserCard, getProfileInfo, setUserInfo, getUserAvatar }