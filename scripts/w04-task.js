/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Shay Brown",
    photo: "images/ProfilePic.jpg",
    favoriteFoods: [
        "Homemademade Carmel",
        "Dark meat Turkey",
        "Mashed potatoes",
        "Nachos"
    ],   
    hobbies: [
        "Motorcycle Riding",
        "Jumping on my Trampoline",
        "Video games"
    ],
    placesLived: []

}

myProfile.placesLived.push(
    {
        place: "St. Louis, MO",
        length: "30 years"
    },
    {
        place: "Riverside, CA",
        length: "2 years"
    },
    {
        place: "Rexburg, ID",
        length: "2 years"
    },
    {
        place: "Indianapolis, IN",
        length: "2 years"
    },
    {
        place: "Salisbury, MD",
        length: "2 years"
    },
    {
        place: "Herriman, UT",
        length: "2 years"
    },
)

document.querySelector('#name').textContent=myProfile.name;
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach (hobby => {
    let li = document.createElement('li');
    li.textContent=hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach (place => {
    let dt = document.createElement('dt');
    dt.textContent=place.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent=place.length;
    document.querySelector('#places-lived').appendChild(dd);
});



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


