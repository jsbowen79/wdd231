import { jsonData } from "../data/attractions.mjs"; 

document.addEventListener("DOMContentLoaded", () => {

    const attractionDivs = document.querySelectorAll('.attraction'); 

    attractionDivs.forEach(div => {
        const key = div.dataset.key;
        const attraction = jsonData.attractions.find(a => a.name === key);
        if (!attraction) return;
        div.querySelector('h2').textContent = attraction.name;
        div.querySelector('address').textContent = attraction.address;
        div.querySelector('p').textContent = attraction.description;

        div.querySelector('figure').innerHTML = `<img src="${attraction.photo}" alt="${attraction.name}">
        <figcaption>
          <a href="${attraction.website}" target="_blank" rel="noopener">
            Visit Website
          </a>
        </figcaption>
      `;
    })
  
  const returnMessageUL = document.querySelector("#returnMessage"); 
  const prevDate = new Date(localStorage.getItem("Last Visit:")); 
  const message1 = "Welcome! Let us Know if you have any questions."; 
  const message2 = "Back so soon! Awesome!"; 
  const currDate = new Date();; 
  const difference =currDate - prevDate;
  
  if (!prevDate) {
    returnMessageUL.textContent = message1; 
    
  } else if (difference < 86400000) {
    returnMessageUL.textContent = message2; 
  } else {
    const message3 = `You visited ${Math.floor(difference/86400000)} days ago.` 
    returnMessageUL.textContent = message3; 
  }

  localStorage.setItem("Last Visit:", currDate);

})