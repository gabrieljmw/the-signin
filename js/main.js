// Reference modal
let modal = document.querySelector('#modal');
let welcomeMessage = document.querySelector('#hello');

//Open modal
let signIn = document.querySelector('#signin');
signIn.addEventListener('click', () => {
    modal.style.display = "block";
});
//Close modal
let close = document.querySelector('#close');
close.addEventListener('click', () => {
    modal.style.display = "none";
})

//Reference fields, submit
let inputField = document.querySelectorAll('.field');
let submit = document.querySelector('#submit');

// //Add error styling
// submit.addEventListener('click', () => {
//     inputField.forEach(field => field.classList.add('error'));
// });

//Remove error styling
inputField.forEach(field => field.addEventListener('focus', () => {
    field.classList.remove('error');
}))

//Prevent default submit action, add error styling
let form = document.querySelector('form#getstarted');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Add error styling
    // inputField.forEach(field => field.classList.add('error'));
    inputField.forEach(function(element, i, inputFieldArray) {
        if (element.value.trim() == "") {
            element.classList.add('error')
        } else if (inputFieldArray[0].value && inputFieldArray[1].value) {
            modal.style.display = "none";
            signIn.style.display = "none";
            let userName = inputFieldArray[0].value;
            welcomeMessage.textContent = "Welcome, " + userName;
        }
    });

});