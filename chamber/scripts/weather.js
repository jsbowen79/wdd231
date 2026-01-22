document.addEventListener("DOMContentLoaded", () => {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.90&lon=-104.86&units=imperial&appid=ce402225e033d7f04b4718f63afbf16d';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.90&lon=-104.86&units=imperial&appid=ce402225e033d7f04b4718f63afbf16d';
    const tempEL = document.querySelector('#current-temp');
    const iconEL = document.querySelector('#weather-icon');
    const currentDescriptionEL = document.querySelector('#current_description'); 

    async function currentApiFetch() {
        try {
            const response = await fetch(weatherUrl);
            if (response.ok) {
                const weatherData = await response.json();
                displayCurrentResults(weatherData); 
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log (`Weather Fetch Error: ${error}`);
        };
        forecastApiFetch(); 
    }

    async function forecastApiFetch() {
        try {
            const response = await fetch(forecastUrl); 
            if (response.ok) {
                const forecastData = await response.json();
                displayForecastResults(forecastData); 
            } else {
                throw Error(await response.text()); 
            }

        } catch (error) {
            console.log(`Forecast Fetch Error: ${error}`)
        }
            
        }
    

    function displayCurrentResults(data) {
        tempEL.innerHTML = `${data.main.temp}&deg;F`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        const description = data.weather[0].description; 
        iconEL.setAttribute('src', iconSrc); 
        iconEL.setAttribute('alt', description)
        currentDescriptionEL.innerHTML = description; 
    }

    function displayForecastResults(data) {
        const weatherForecastEL = document.querySelector('.weatherForecast'); 
        // debugger;
        const dailyForecast = data.list.filter(entry => entry.dt_txt.includes('12:00:00')).slice(0, 5);

        dailyForecast.forEach((entry) => {
            const  dtTxt = entry.dt_txt; 
            const date = new Date(dtTxt.replace(" ", "T")); 
            const dayOfWeek = date.toLocaleDateString("en-US", {weekday: "long", month:"short", day: "2-digit"}); 
            const iconSrc = `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;
            const description = entry.weather[0].description; 
            const descriptionEL = document.createElement('p'); 
            const dayEntryEL = document.createElement('div'); 
            const tempEL = document.createElement('p'); 

            const dateEL = document.createElement('p'); 
            dateEL.textContent = dayOfWeek; 
            tempEL.innerHTML = `${entry.main.temp}&deg;F`; 
            tempEL.setAttribute("class", "temp"); 
            descriptionEL.textContent = description; 
            const forecastIconEL = document.createElement('img'); 
            forecastIconEL.setAttribute('src', iconSrc); 
            forecastIconEL.setAttribute('alt', description); 
            
            dayEntryEL.appendChild(dateEL); 
            dayEntryEL.appendChild(forecastIconEL); 
            dayEntryEL.appendChild(tempEL);
            dayEntryEL.appendChild(descriptionEL); 
            weatherForecastEL.appendChild(dayEntryEL); 


       }) 
    }
    
    currentApiFetch(); 
}); 