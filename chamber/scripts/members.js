const cardsEL = document.querySelector(".cards"); 

async function getData() {
    try {
        const response = await fetch('https://jsbowen79/github.io/wdd231/chamber/data/members.json'); 
        const membersDictionary = await response.json(); 
    } catch (error) {
        console.log("File not Loaded"); 
    }

    membersDictionary.members.forEach(member => {
        const cardEL = document.createElement('div'); 
        card.classList.add('card'); 
        const nameEL = document.createElement('h2'); 
        nameEL.textContent = member.companyName; 
        const imgEL = document.createElement('img'); 
        imgEL.attributes.add("src", member.img); 
        imgEL.attributes.add("alt", "member.alt"); 
        const addressEL = document.createElement('p');
        addressEL.textContent = member.companyAddress; 
        const phoneEL = document.createElement('p'); 
        phoneEL.textContent = member.companyPhone; 
        const webLinkEL = document.createElement('a'); 
        webLinkEL.innerHTML = member.companyWebsiteUrl; 
        const descriptionEL = document.createElement('p'); 
        descriptionEL.textContent = member.description; 

        cardsEL.appendChild(cardEL); 
        cardEL.appendChild(nameEL); 
        cardEL.appendChild(imgEL); 
        cardEL.appendChild(addressEL); 
        cardEL.appendChild(phoneEL); 
        cardEL.appendChild(webLinkEL); 
        cardEL.appendChild(descriptionEL);     
});

}
