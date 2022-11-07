//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
    formSubmit: document.querySelector(".login-form"),
};

refs.formSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(); //запобігання перезавантаженню
    
    const {
    elements: { email, password },
  } = event.currentTarget; // створюємо нову змінну - елемент як об'єкт з властивостями(через деструктуризацію)
  let valueEmail = email.value.trim();
  let valuePassword = password.value.trim();
if (valueEmail === "" || valuePassword === "") {
  alert("Потрібно заповнити всі поля!"); // перевірка на заповненість полів у елелмента
} else {
  const formObj = {}; // створення об'єкту, присвоєння йому значень та виведення
  formObj.email = valueEmail;
  formObj.password = valuePassword;
  console.log(formObj);
  event.currentTarget.reset(); // очищення форми
}
}

