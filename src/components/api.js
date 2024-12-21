
const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-mag-4',
  headers: {
    authorization: '9f02ed23-5fe5-42cf-a8a9-b25643da6cbf',
    'Content-Type': 'application/json'
  }
};

// Общий запрос к серверу
const sendRequest = (method, url, body = {}) => {
  const options = {
    method,
    headers: config.headers
  };

  if (body && Object.keys(body).length > 0) {
    options['body'] = JSON.stringify(body);
  }

  console.log("URL для запроса:", `${config.baseUrl}${url}`);
  return fetch(`${config.baseUrl}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

// Методы для взаимодействия с API
export const methodsAPI = {
  getInitialCards() {
    return sendRequest('GET', '/cards');
  },

  addCard({ name, link }) {
    return sendRequest('POST', '/cards', { name, link });
  },

  deleteCard(id) {
    return sendRequest('DELETE', `/cards/${id}`);
  },

  likeCard(id) {
    return sendRequest('PUT', `/cards/likes/${id}`);
  },

  unLikeCard(id) {
    return sendRequest('DELETE', `/cards/likes/${id}`);
  },

  getProfile() {
    return sendRequest('GET', '/users/me');
  },

  updateProfile({ name, about }) {
    return sendRequest('PATCH', '/users/me', { name, about });
  },

  updateProfileAvatar(url) {
    return sendRequest('PATCH', '/users/me/avatar', { avatar: url });
  },
};

