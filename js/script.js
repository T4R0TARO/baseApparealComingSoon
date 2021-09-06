<<<<<<< HEAD
// captured variables
const emailButton = document.getElementById('emailButton');


// checks user input and test for email validation 
=======
console.log('wah');
const emailButton = document.getElementById('emailButton');


// check input for email validation 
>>>>>>> a8903b44d3265249e70745be56803a510a8ae601
 function emailValidation() {
     const emailInput  = document.getElementById('emailInput').value;
     const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
     const errorContainer = document.querySelector('.errorContainer');

     if (regx.test(emailInput)){
         alert("thank you");
         errorContainer.className = "errorContainer";
     } else {
         errorContainer.className = "errorContainerShow";
     }
 }

<<<<<<< HEAD
// Waits for click to run function emailValidation()
=======
>>>>>>> a8903b44d3265249e70745be56803a510a8ae601
 emailButton.addEventListener('click', emailValidation)