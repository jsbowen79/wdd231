import { populateFooter } from "./footer.js"; 
import { fetchCrimeData } from "./fetch_crimes.js";
import { setupNav } from "./navigation.js";

document.addEventListener("DOMContentLoaded", () =>
{
    setupNav(); 

    let crimeConfig; 

    fetch('./data/offense_categories.json').then(response => response.json())
        .then(data => {
            crimeConfig = data;
        }); 
    
    
    async function loadCrimes()
    {
        debugger; 
    
        const tbodyEL = document.querySelector(".crimes"); 
        const crimes = await fetchCrimeData(15);
        
        if (!Array.isArray(crimes)) {
            console.error("Crimes is not an array: ", crimes); 
            return; 
        }
        console.log("crimes:", crimes, Array.isArray(crimes));

        
        crimes.forEach(item =>
        {
            

                const rowEL = document.createElement("tr"); 
                const tdDateEL = document.createElement("td"); 
                const tdTypeEL = document.createElement("td"); 
                const tdCategoryEL = document.createElement("td"); 
                const tdNeighborhoodEL = document.createElement("td"); 
                const tdButtonEL = document.createElement("td");
                const date = new Date(item.attributes.REPORTED_DATE).toLocaleDateString(); 
                const buttonEL = document.createElement("button");
                buttonEL.textContent = "See Details"; 
                
                
                const offenseInfo = crimeConfig.offenseLookup[item.attributes.OFFENSECATEGORY].group; 
                
                tdDateEL.textContent = date; 
                tdTypeEL.textContent = offenseInfo; 
                tdCategoryEL.textContent = item.attributes.OFFENSECATEGORY; 
                tdNeighborhoodEL.textContent = item.attributes.NEIGHBORHOOD.toUpperCase(); 
                
                buttonEL.setAttribute("class", "details_btn"); 
                tdButtonEL.appendChild(buttonEL); 
                
                rowEL.appendChild(tdDateEL); 
                rowEL.appendChild(tdTypeEL); 
                rowEL.appendChild(tdCategoryEL); 
                rowEL.appendChild(tdNeighborhoodEL); 
                rowEL.appendChild(tdButtonEL); 
                tbodyEL.appendChild(rowEL); 1
            
        })
    }

    






    loadCrimes(); 


    populateFooter(); 

})