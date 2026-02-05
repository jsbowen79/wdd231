document.addEventListener("DOMContentLoaded", () => {
    
    const formInfo = new URLSearchParams(window.location.search);
    const main = document.querySelector('main'); 
    const message = document.createElement('p'); 
   
    const fname = formInfo.get('fname');
    const lname = formInfo.get('lname'); 
    const email = formInfo.get('email'); 
    const mobile = formInfo.get('mobilePhone'); 
    const org = formInfo.get('org'); 
    const timestamp = formInfo.get('timestamp'); 


    message.setAttribute("class", "thankyou"); 
    message.innerHTML = `<br><br>${fname} ${lname} <br> <br>
    Thank you for submitting your application for membership on behalf of ${org}! <br><br>
    Your application will be reviewed shortly.  <br>
    We have your contact information as: <br><br>
    Email: ${email} <br>
    Mobile: ${mobile} <br>
    <br>Please expect a response within three business days of the application submission at: <br>
    ${timestamp}`
    main.appendChild(message); 


})
