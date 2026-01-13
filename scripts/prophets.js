const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'; 
const cards = document.querySelector("#cards"); 
let data; 

const getProphetData = async () => {
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.error(error); 
    }
    // console.table(data.prophets); 
    displayProphets(data.prophets); 
}




function displayProphets (prophets) {
    prophets.forEach((prophet) => {
        const card = document.createElement("section"); 
        const fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        const birthdateEL = document.createElement("p");
        birthdateEL.textContent = `Date of Birth: ${prophet.birthdate}`;
        const birthPlaceEL = document.createElement("p");
        birthPlaceEL.textContent = `Place of Birth: ${prophet.birthplace}`;
        const portrait = document.createElement("img"); 
        portrait.src = prophet.imageurl; 
        portrait.alt = `A portrait of ${prophet.name} ${prophet.lastname}`; 
        portrait.setAttribute('loading', 'lazy'); 
        portrait.setAttribute("width", "320"); 
        portrait.setAttribute("height", "396"); 
        card.appendChild(fullName); 
        card.appendChild(birthdateEL);
        card.appendChild(birthPlaceEL); 
        card.appendChild(portrait); 
        cards.appendChild(card); 
    })
    
}

getProphetData(); 