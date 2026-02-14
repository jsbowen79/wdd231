import { populateFooter } from "./footer.js";
import { setupNav } from "./navigation.js";


document.addEventListener("DOMContentLoaded", () => {
    setupNav(); 
    populateFooter()

    const formInfo = new URLSearchParams(window.location.search);
    const main = document.querySelector('main');
    const message = document.createElement('p');

    const category = formInfo.get('category');
    const date = formInfo.get('date');
    const location = formInfo.get('location');
    const description = formInfo.get('description');


    message.setAttribute("class", "thankyou");
    message.innerHTML = `
    Thank you for playing your part in protecting our community.  We have received your report
    of the following crime:<br>
    Type of Crime: ${category}<br>
    Date Crime Committed: ${date}<br>
    Location of Crime: ${location}<br>
    Description of Crime: <br>${description}<br><br>
    This crime will be reported anonymously to the appropriate Law Enforcement Authorities.`
    main.appendChild(message); 

})