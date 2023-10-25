/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.querySelector('#temples');
let templeList=null;

/* async displayTemples Function */
const displayTemples= (temples) => {    
    temples.forEach(temple => {        
        let newElement=document.createElement('article');        
        let name=document.createElement('h3');
        name.textContent=temple.templeName;
        let image=document.createElement('img');
        image.setAttribute('src',temple.imageUrl);
        image.setAttribute('alt',temple.location);
        newElement.appendChild(name);
        newElement.appendChild(image);
        templesElement.appendChild(newElement);        
    });   
    
    let templePic = document.createElement('img');
    templePic.setAttribute('src',temples);    
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) templeList = await response.json();    
    displayTemples(templeList);
}


/* reset Function */
function reset() {
    templesElement.textContent = "";
}

/* sortBy Function */
function sortBy(temples) {    
    reset();
    let filteredList = null;
    const CompareDate = new Date("1950-01-01");
    const filter=document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            filteredList = templeList.filter((temple) => temple.location.includes("Utah"));            
            displayTemples(filteredList);
                   
        break;
        case "notutah":            
            filteredList = templeList.filter((temple) => !temple.location.includes("Utah"));            
            displayTemples(filteredList);
        break;
        case "older":                            
            filteredList = templeList.filter((temple) => Date.parse(temple.dedicated) < Date.parse("1/1/1950"));            
            displayTemples(filteredList);
        break;
        case "all":
            displayTemples(templeList);
        break;
    }
}


getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});