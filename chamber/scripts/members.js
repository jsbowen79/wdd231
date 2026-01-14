document.addEventListener("DOMContentLoaded", () => {
    const gridEL = document.querySelector("#grid"); 
    const listEL = document.querySelector("#list"); 
    const cardsEL = document.querySelector(".cards");
    let membersDictionary;

    async function getData() {
        try {
            const response = await fetch(
                'https://jsbowen79.github.io/wdd231/chamber/data/members.json'
            );
            membersDictionary = await response.json();
            console.log(membersDictionary);
        } catch (error) {
            console.error("File not loaded", error);
            return;
        }

        let i = 0; 
        membersDictionary.members.forEach(member => {
            const cardEL = document.createElement('div');
            cardEL.classList.add('card');

            const nameEL = document.createElement('h2');
            nameEL.textContent = member.companyName;

            if (i % 2 == 0) {
                cardEL.classList.add("dark"); 
            }

            const imgEL = document.createElement('img');
            imgEL.src = member.img;
            imgEL.alt = member.alt;
            imgEL.loading = "lazy"; 

            const addressEL = document.createElement('p');
            addressEL.textContent = member.companyAddress;

            const phoneEL = document.createElement('p');
            phoneEL.textContent = member.companyPhone;

            const webLinkEL = document.createElement('a');
            webLinkEL.href = member.companyWebsiteURL;
            webLinkEL.textContent = member.companyWebsiteURL;
            webLinkEL.target = "_blank"; 

            const descriptionEL = document.createElement('p');
            descriptionEL.textContent = member.description;

            cardEL.append(
                nameEL,
                imgEL,
                addressEL,
                phoneEL,
                webLinkEL,
                descriptionEL
            );

            cardsEL.appendChild(cardEL);
            i++; 
        });
    }

    getData();

    gridEL.addEventListener("click", () => {
        const allCardsEL = document.querySelectorAll('.card');
        const olEL = document.querySelector('.cards ol');
        cardsEL.classList.add('gridDisplay'); 

        allCardsEL.forEach(element => {
            element.classList.remove('list');
            element.classList.add('grid');
            element.style.display = 'block';
        });
        if (olEL) { olEL.style.display = 'none' };
    });

    listEL.addEventListener("click", () => {
        const allCardsEL = document.querySelectorAll('.card');
        cardsEL.classList.remove('gridDisplay'); 
        let olEL = document.querySelector('.cards ol');
        
        if (!olEL) {
            olEL = document.createElement('ol');
            cardsEL.appendChild(olEL);

            allCardsEL.forEach(element => {
                element.classList.remove('grid');
                element.classList.add('list');
                const h2EL = element.querySelector('h2');
                const h2Copy = h2EL.cloneNode(true);
                const liEL = document.createElement('li');
                liEL.appendChild(h2Copy);
                olEL.appendChild(liEL);
            });
        }
        allCardsEL.forEach(element => {
            element.style.display = 'none'; 
            
        });
        olEL.style.display = 'block'; 
    })
});
