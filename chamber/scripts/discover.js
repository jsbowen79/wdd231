import { jsonData } from "../data/interestItems.mjs"; 

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
})