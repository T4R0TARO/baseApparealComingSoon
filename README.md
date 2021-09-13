# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
<<<<<<< HEAD




## Overview
mobile
![image](https://user-images.githubusercontent.com/76195521/132263564-f151d03a-8159-4b05-afb0-01543bd50ce1.png)
desktop
![image](https://user-images.githubusercontent.com/76195521/132263605-8947f829-5cad-44cc-8fe5-ad65ef0aafe3.png)
desktop (active)
![image](https://user-images.githubusercontent.com/76195521/132263628-71654b2f-7140-4b39-9177-d06a207331a1.png)

### The challenge

=======
- [Author](#author)



## Overview
mobile
![image](https://user-images.githubusercontent.com/76195521/132263564-f151d03a-8159-4b05-afb0-01543bd50ce1.png)
desktop
![image](https://user-images.githubusercontent.com/76195521/132263605-8947f829-5cad-44cc-8fe5-ad65ef0aafe3.png)
desktop (active)
![image](https://user-images.githubusercontent.com/76195521/132263628-71654b2f-7140-4b39-9177-d06a207331a1.png)

### The challenge

>>>>>>> 87b103b5616d26904f823c3db3ecfae4ead9194e
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

<<<<<<< HEAD
- Solution URL: [Git Hub Repo](https://github.com/T4R0TARO/baseApparealComingSoon)
- Live Site URL: [GitPages](https://t4r0taro.github.io/baseApparealComingSoon/)

## My process
1. html structure prep for flexbox and positionin
=======
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
1. html structure prep for flexbox and positioning
>>>>>>> 87b103b5616d26904f823c3db3ecfae4ead9194e
2. style for mobile design first
3. style for desktop desgin
4. js logic 
5. adjust final sizing for commit

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla JS

### What I learned

flexbox reorder and grow practice
```css
/* flexbox */
  .mainContainer {
        display: flex;
        background-image: url("/images/bg-pattern-desktop.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
    }
    .heroContainer {
        background-image: url("/images/hero-desktop.jpg");
        padding: 0;
        margin: 0px 0px 0px;
        height: 100vh;
        order: 4;
        flex-grow: 4;
        max-width: 702px;
    }
    .mainText {
        flex-grow: 1;
        text-align: left;
    }
```
DOM, functions, eventlisteners practice
```js
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
```

### Continued development
margin or padding issue? 
![image](https://user-images.githubusercontent.com/76195521/132263991-fad5dfae-3681-4687-9ed5-38c1228d84e5.png)

restructure html container?
![image](https://user-images.githubusercontent.com/76195521/132264045-4b948460-566f-4e3b-b965-18133870ce40.png)

## Author

<<<<<<< HEAD
- Website - [Git Hub](https://www.your-site.com)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)

=======
- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/T4R0TARO)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
>>>>>>> 87b103b5616d26904f823c3db3ecfae4ead9194e



