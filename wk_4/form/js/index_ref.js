let title = document.getElementById('title');
title.textContent = 'Login/Register form';

let form = document.forms;

let namesList = ['bob', 'henry', 'joe'];
let password_state = false;

let submit = document.getElementsByClassName('submit-btn');

const generateName = () => {
  let randomNumber = Math.floor(Math.random() * namesList.length);
  return namesList[randomNumber];
};

let random = document.getElementById('random');
let eye = document.getElementById('eye');

// Add event listeners
random.addEventListener('click', () => {
  let username = document.getElementsByName('username');
  username[0].value = generateName();
});

eye.addEventListener('click', () => {
  let password_input = document.getElementsByName('password');

  if (!password_state) {
    password_input[0].type = 'text';
    eye.src = 'assets/eye_close.svg';
  } else {
    password_input[0].type = 'password';
    eye.src = 'assets/eye_open.svg';
  }
  password_state = !password_state;
});

submit[0].addEventListener('click', (e) => {
  let username = document.getElementsByName('username');
  let user_value = username[0].value;

  if (!namesList.includes(user_value)) {
    namesList.push(user_value);
  }

  resetForm(e);
});

const resetForm = (e) => {
  console.log('Submit');
  e.preventDefault();
  for (element of form[0]) {
    switch (element.tagName) {
      case 'INPUT':
        element.value = '';
        break;
    }
  }
};
