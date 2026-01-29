
document.addEventListener("DOMContentLoaded", () => {
 
    const npOpen = document.querySelector("#npbttn");
    const npClose = document.querySelector("#npClose"); 
    const npModal = document.querySelector("#npModal"); 
    const dialog = document.querySelectorAll("dialog"); 
    const timeEL = document.querySelector('#timestamp'); 
    
    npOpen.addEventListener("click", () => {
        npModal.showModal(); 
    })

    npClose.addEventListener("click", () => {
        npModal.close(); 
    })

    const brnzOpen = document.querySelector("#brnzbttn");
    const brnzClose = document.querySelector("#brnzClose");
    const brnzModal = document.querySelector("#brnzModal");

    brnzOpen.addEventListener("click", () => {
        brnzModal.showModal();
    })

    brnzClose.addEventListener("click", () => {
        brnzModal.close();
    })

    const silverOpen = document.querySelector("#silverbttn");
    const silverClose = document.querySelector("#silverClose");
    const silverModal = document.querySelector("#silverModal");

    silverOpen.addEventListener("click", () => {
        silverModal.showModal();
    })

    silverClose.addEventListener("click", () => {
        silverModal.close();
    })


    const goldOpen = document.querySelector("#goldbttn");
    const goldClose = document.querySelector("#goldClose");
    const goldModal = document.querySelector("#goldModal");

    goldOpen.addEventListener("click", () => {
        dialog.forEach(element => {
            element.setAttribute
        });
        goldModal.showModal();
    })

    goldClose.addEventListener("click", () => {
        goldModal.close();
    })

    const now = new Date();
    timeEL.value = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }); 
    

})