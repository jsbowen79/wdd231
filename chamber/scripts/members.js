document.addEventListener("DOMContentLoaded", () => {

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

        membersDictionary.members.forEach(member => {
            const cardEL = document.createElement('div');
            cardEL.classList.add('card');

            const nameEL = document.createElement('h2');
            nameEL.textContent = member.companyName;

            const imgEL = document.createElement('img');
            imgEL.src = member.img;
            imgEL.alt = member.alt;

            const addressEL = document.createElement('p');
            addressEL.textContent = member.companyAddress;

            const phoneEL = document.createElement('p');
            phoneEL.textContent = member.companyPhone;

            const webLinkEL = document.createElement('a');
            webLinkEL.href = member.companyWebsiteUrl;
            webLinkEL.textContent = member.companyWebsiteUrl;

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
        });
    }

    debugger; // 🔥 debugger WILL stop here now
    getData();
});
