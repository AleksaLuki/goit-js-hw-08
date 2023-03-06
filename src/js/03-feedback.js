import throttle from 'lodash.throttle';


const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
 
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

    populateTextarea();


function onInputData() {
  const data = {email: email.value, 
    message: message.value,};

    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}


function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(LOCAL_KEY));

  localStorage.removeItem(LOCAL_KEY);
}
 

function populateTextarea() {
  const saveData = JSON.parse(localStorage.getItem(LOCAL_KEY));

    if (saveData === null) {
      return;
    }

    email.value = saveData.email;
    message.value = saveData.message;
}













