const signInBtn = document.querySelector('.signin__btn');
const signUpBtn = document.querySelector('.signup__btn');
const formBox = document.querySelector('.form__box');
const body = document.body;

signUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
});
signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});