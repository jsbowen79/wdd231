document.addEventListener("DOMContentLoaded", () => {
    const ctaEL = document.querySelector(".cta button"); 
    const spotlightEL = document.querySelector('.spotlight');
    const dictionaryUrl = 'https://jsbowen79.github.io/wdd231/chamber/data/members.json';
    let membersDictionary;
    
    async function getData() {
        try {
            const response = await fetch(dictionaryUrl);
            membersDictionary = await response.json()
        } catch (error) {
            console.error("File not loaded", error);
            return;
        }
        const eligibleMembers = membersDictionary.members.filter(m =>m.membershipLevel >= 2); 
        const cardNumberArray = new Array(); 
        
        for (let i = 0; i < 3; i++) {
            
            const cardsEL = document.createElement('div');
            cardsEL.setAttribute("class", "card");
            let cardNumber = 10;

            if (eligibleMembers.length < 3) {
                console.warn("Not enough eligible members for spotlight"); 
                return;
            }
           
            do {

                cardNumber = Math.floor(Math.random() * eligibleMembers.length);
            }
            while (cardNumberArray.includes(cardNumber)) {
            };
            cardNumberArray.push(cardNumber); 

            const nameEL = document.createElement('h5');
            const descriptionEL = document.createElement('p');
            const logoEL = document.createElement('img');
            const phoneEL = document.createElement('p');
            const addressEL = document.createElement('p');
            const urlEL = document.createElement('a');
            membershipLevelEL = document.createElement('p');
            
            nameEL.textContent = membersDictionary.members[cardNumber].companyName;
            descriptionEL.textContent = membersDictionary.members[cardNumber].description;
            logoEL.setAttribute('src', membersDictionary.members[cardNumber].img);
            logoEL.setAttribute('alt', membersDictionary.members[cardNumber].description);
            phoneEL.textContent = membersDictionary.members[cardNumber].companyPhone;
            addressEL.textContent = membersDictionary.members[cardNumber].companyAddress;
            urlEL.setAttribute('src', membersDictionary.members[cardNumber].companyWebsiteURL);
            urlEL.textContent = membersDictionary.members[cardNumber].companyWebsiteURL;
           
            if (membersDictionary.members[cardNumber].membershipLevel == 2) {
                membershipLevelEL.textContent = "**Silver Star Member**";
                membershipLevelEL.setAttribute("class", "silver")
            } else {
                membershipLevelEL.textContent = "***Gold Star Member***";
                membershipLevelEL.setAttribute("class", "gold"); 
            }    


            cardsEL.appendChild(nameEL); 
            cardsEL.appendChild(descriptionEL); 
            cardsEL.appendChild(logoEL); 
            cardsEL.appendChild(phoneEL); 
            cardsEL.appendChild(addressEL); 
            cardsEL.appendChild(urlEL); 
            cardsEL.appendChild(membershipLevelEL); 

            spotlightEL.appendChild(cardsEL); 


        }


    }

    ctaEL.addEventListener('click', () => {
        window.location.href = 'join.html'; 
    })
    getData(); 

}); 