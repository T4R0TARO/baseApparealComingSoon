// captured variables
const emailButton = document.getElementById('emailButton');


// checks user input and test for email validation 
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

// Waits for click to run function emailValidation()
 emailButton.addEventListener('click', emailValidation)