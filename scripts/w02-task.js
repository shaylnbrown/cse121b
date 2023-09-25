/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Shay Brown";
let currentYear = 2023;
let profilePicture = "images/ProfilePic.jpg";

/* Step 3 - Element Variables */
const nameElement=document.getElementById('name');
const foodElement=document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
nameElement.innerHTML=`<strong>${fullname}</strong>`;
yearElement.textContent=currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);

/* Step 5 - Array */
let favoriteFoods = ['Homemade Carmel', 'Dark Meat Turkey', 'Mashed Potatoes', 'Nachos'];
foodElement.textContent = favoriteFoods;
let mostFavorite = "Chicken Fried Rice";
favoriteFoods.push(mostFavorite);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



