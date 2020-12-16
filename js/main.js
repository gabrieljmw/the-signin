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

//TO-DO
/* Change the font-size of the #hello heading so that it's half the current size
Consider the various ways we could validate both fields, including the use of a Boolean variable as a true or false status flag
Try improving the user experience by adding/removing the .error class from an input.field immediately after the cursor leaves one of the individual <input> (rather than waiting for a submit event to occur)
Consider the blur (opposite of focus) can be added individually to each input, but should be done so by writing one event listener/callback function and using a loop to apply to each of the input.field elements at the same time
Allow the user to click the dark translucent background of the #modal block to have it close itself (but not the the form within it)
Test this and see what happens when an element inside of another element (here, the form within the .modal) is clicked. Click events will "bubble" (propagate) up the DOM tree!
Search for a way to stop an event (clicking the <form>) from bubbling to its parent (the .modal) *?