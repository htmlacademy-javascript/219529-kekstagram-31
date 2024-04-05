const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы',
};

// На промисах
// const load = (route, method = Method.GET, body = null) =>
//   fetch(`${BASE_URL}${route}`, {method, body})
//     .then((response) =>
//       response.ok ? response.json() : Promise.reject(ErrorText[method])
//     .catch((error) =>
//       console.error(error)); // Тут доолжен быть обработчик ошибки
//     );
//
// const getData = () => load(Route.GET_DATA);

// С использованием async/await
const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, {method, body});
  return response.ok ? await response.json() : Promise.reject(ErrorText[method]);
};

const getData = async () =>
  await load(Route.GET_DATA);

// const sendData = async () =>
//   await load(Route.SEND_DATA, Method.POST, body);

export {getData};
