import { populateFooter } from "./footer.js"; 
import { setupNav } from "./navigation.js";
import { loadCrimes } from "./loadcrimes.js"; 

const url =
     "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/arcgis/rest/services/ODC_CRIME_OFFENSES_P/FeatureServer/324/query?outFields=*&where=1%3D1&orderByFields=REPORTED_DATE%20DESC&resultRecordCount=25&f=geojson";


export function populateModal(item) {
    const dialogEL = document.querySelector('#detailsModal'); 
    const incidentIDEL = document.createElement('h4');
    const addressEL = document.createElement('p'); 
    const categoryEL = document.createElement('p'); 
    const neighborhoodEL = document.createElement('p'); 
    const dateEL = document.createElement('p'); 
    const typeEL = document.createElement('p'); 
    const victimCount = document.createElement('p'); 
    const reportDate = new Date(item.properties.REPORTED_DATE).toLocaleDateString();
    const offenseDate = new Date(item.properties.FIRST_OCCURRENCE_DATE).toLocaleDateString();
    const modalClose = document.createElement('btn'); 
    modalClose.setAttribute("id", "closeModal"); 
    modalClose.textContent = "Close"; 
    
    incidentIDEL.textContent =`Incident Number${item.properties.INCIDENT_ID}`; 
    addressEL.textContent = `Incident Address: ${item.properties.INCIDENT_ADDRESS}`; 
    victimCount.textContent = `This incident involved ${item.properties.VICTIM_COUNT} victims.`;
    categoryEL.textContent = `The category of this crime is ${item.properties.OFFENSE_CATEGORY_ID}.`; 
    neighborhoodEL.textContent = `This address is in the ${item.properties.NEIGHBORHOOD_ID.toUpperCase()} neighborhood.`; 
    dateEL.textContent = `This crime occurred on ${offenseDate} and was reported on ${reportDate}.`;
    typeEL.textContent = `This crime was of type: ${item.properties.OFFENSE_TYPE_ID}.`;
    
    dialogEL.appendChild(incidentIDEL); 
    dialogEL.appendChild(dateEL); 
    dialogEL.appendChild(addressEL); 
    dialogEL.appendChild(neighborhoodEL); 
    
    dialogEL.appendChild(categoryEL); 
    dialogEL.appendChild(typeEL); 
    dialogEL.appendChild(victimCount); 
    dialogEL.appendChild(modalClose); 
}    


document.addEventListener("DOMContentLoaded", () =>
    {
        setupNav(); 
        
        loadCrimes(url); 


        populateFooter(); 

})