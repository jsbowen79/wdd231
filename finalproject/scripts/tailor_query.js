import { loadCrimes } from "./loadCrimes.js"

function formatDate(date) {
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0"); 
    return `${year}-${month}-${day}`;
}

function getNewDate(days) {
    const today = new Date(); 
    const pastDate = new Date(today); 
    pastDate.setDate(today.getDate() - days); 
    return formatDate(pastDate); 
}

function saveToMemory(){
    localStorage.setItem("Beginning Date", beginningDate);
    localStorage.setItem("End Date", endingDate);
    localStorage.setItem("Neighborhood Parameter", neighborhoodParam);
    localStorage.setItem("Category Parameter", categoryParam);
}

const endpoint = "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/arcgis/rest/services/ODC_CRIME_OFFENSES_P/FeatureServer/324/query?";
let outfields = `&outfields=*`;
const where = "&where=";
const all = "1%3D1";
const orderby = "&orderByFields=REPORTED_DATE%20DESC";
let recordCount = "&resultRecordCount=25";
const end = "&f=geojson"
let categoryParam = localStorage.getItem('Category Parameter') ?? ''; 
let neighborhoodParam = localStorage.getItem('Neighborhood Parameter') ?? ''; 
let endingDate = localStorage.getItem('End Date') ?? `%20AND%20REPORTED_DATE%20%3C%3D%20date%27${getNewDate(0)}%27`; 
let beginningDate = localStorage.getItem('Beginning Date') ?? `%20AND%20REPORTED_DATE%20%3E%3D%20date%27${getNewDate(7)}%27`;

document.addEventListener('DOMContentLoaded', () => {

    let url = endpoint + outfields + where + all + neighborhoodParam + beginningDate + endingDate + orderby + recordCount + end;
    loadCrimes(url);

    const categoryEL = document.getElementById("category");
    
    categoryEL.addEventListener("change", () => {
        const tbody = document.querySelector('.crimes');
        tbody.innerHTML = '';
        recordCount = ''
        const category = categoryEL.value;
        categoryParam = `%20AND%20OFFENSE_CATEGORY_ID%3D%27${encodeURIComponent(category)}%27`;
        url = endpoint + outfields + where + all + neighborhoodParam + categoryParam + beginningDate + endingDate + orderby + recordCount + end;
        console.log(url); 
        loadCrimes(url);
        saveToMemory();
    })


    const neighborhoodEL = document.getElementById('neighborhood');

    neighborhoodEL.addEventListener("change", () => {
        const tbody = document.querySelector('.crimes');
        tbody.innerHTML = '';
        const neighborhood = neighborhoodEL.value; 
        recordCount = ''; 
        neighborhoodParam = `%20AND%20NEIGHBORHOOD_ID%3D%27${encodeURIComponent(neighborhood)}%27`;
        url = endpoint + outfields + where + all +  neighborhoodParam + categoryParam + beginningDate + endingDate + orderby + recordCount + end;
        loadCrimes(url); 
        saveToMemory(); 
    })

    const dateRangeEL = document.getElementById("dateRange"); 





    
    dateRangeEL.addEventListener("change", () => {
        const tbody = document.querySelector('.crimes');
        tbody.innerHTML = '';
        const daysAgo = parseInt(dateRangeEL.value);
        const newDateString = getNewDate(daysAgo); 
        beginningDate = `%20AND%20REPORTED_DATE%20%3E%3D%20date%27${newDateString}%27`;
        const todayDateString = getNewDate(0); 
        endingDate = `%20AND%20REPORTED_DATE%20%3C%3D%20date%27${todayDateString}%27`;
        recordCount = '';
        url = endpoint + outfields + where + all + neighborhoodParam + categoryParam + beginningDate + endingDate + orderby + recordCount + end;
        loadCrimes(url);
        saveToMemory(); 
    })



})