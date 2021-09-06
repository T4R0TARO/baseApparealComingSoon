console.log('wah');
const emailButton = document.getElementById('emailButton');


// check input for email validation 
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

 emailButton.addEventListener('click', emailValidation)