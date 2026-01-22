const tempEL = document.querySelector('#current-temp'); 
const iconEL = document.querySelector('#weather-icon'); 
const figcaptionEL = document.querySelector('figcaption'); 
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=ce402225e033d7f04b4718f63afbf16d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }

}

function displayResults(data) {
    
        tempEL.innerHTML = `${data.main.temp}&deg;F`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const myDescription = data.weather[0].description;
        iconEL.setAttribute('src', iconSrc);
        iconEL.setAttribute('alt', myDescription)
        figcaptionEL.innerHTML = myDescription;
      
    }

apiFetch(); 
