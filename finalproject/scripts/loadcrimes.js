import { fetchCrimeData } from "./fetch_crimes.js";
import { populateModal } from "./homepage.js";


export async function loadCrimes(url) {
    
    const tbodyEL = document.querySelector(".crimes");
    const crimes = await fetchCrimeData(url);
            
        if (!Array.isArray(crimes)) {
            console.error("Crimes is not an array: ", crimes); 
            return; 
        }
    let totalCrimes = 0; 
    let victimCount = 0; 
    tbodyEL.innerHTML = "";     
        crimes.forEach(item =>
        {
            totalCrimes += 1; 
            victimCount += parseInt(item.properties.VICTIM_COUNT); 

            const rowEL = document.createElement("tr"); 
            const tdDateEL = document.createElement("td"); 
            const tdTypeEL = document.createElement("td"); 
            const tdCategoryEL = document.createElement("td"); 
            const tdNeighborhoodEL = document.createElement("td"); 
            const tdButtonEL = document.createElement("td");
            const date = new Date(item.properties.REPORTED_DATE).toLocaleDateString(); 
            const buttonEL = document.createElement("button");
            buttonEL.textContent = "See Details"; 
            
            const offenseInfo = item.properties.OFFENSE_TYPE_ID; 
            
            tdDateEL.textContent = date;
            tdDateEL.setAttribute("class", "date"); 
            tdTypeEL.textContent = offenseInfo; 
            tdTypeEL.setAttribute("class", "crimeType");
            tdCategoryEL.textContent = (item.properties.OFFENSE_CATEGORY_ID ?? "").toUpperCase();
            tdNeighborhoodEL.textContent = (item.properties.NEIGHBORHOOD_ID ?? "").toUpperCase(); 
            
            buttonEL.setAttribute("class", "details_btn"); 
            tdButtonEL.appendChild(buttonEL); 
            
            rowEL.appendChild(tdDateEL); 
            rowEL.appendChild(tdTypeEL); 
            rowEL.appendChild(tdCategoryEL); 
            rowEL.appendChild(tdNeighborhoodEL); 
            rowEL.appendChild(tdButtonEL); 
            tbodyEL.appendChild(rowEL); 
            
            buttonEL.addEventListener("click", () => {
                const dialogEL = document.querySelector("#detailsModal"); 
                dialogEL.innerHTML = ''; 
                populateModal(item);
                const modal = document.querySelector('#detailsModal'); 
                modal.show(); 
                const closeModal = document.querySelector('#closeModal'); 
                closeModal.addEventListener("click", () => {
                    modal.close(); 
                })
            })
            
        })
        const totalsRow = document.createElement('tr'); 
        totalsRow.innerHTML = `<td><strong>Total Crimes:</strong> ${totalCrimes}</td><td><strong>Total Victims: </strong>${victimCount}</td>`
        tbodyEL.appendChild(totalsRow);
        
    }