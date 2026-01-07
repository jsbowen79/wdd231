
////////////////////HAMBURGER////////////////////
const nav_button = document.querySelector('#ham-btn');
const navEL = document.querySelector('#nav-bar');

nav_button.addEventListener('click', () => {
    nav_button.classList.toggle('show'); 
    navEL.classList.toggle('show'); 
});


////////////////////LINKS//////////////////////

const homeEL = document.querySelector('.home');
const chamberEL = document.querySelector('.chamber');
const finalEL = document.querySelector('.final'); 

function addCheckMark(element) {
    const checkedEL = document.querySelector('.checked'); 
    if (checkedEL) {
        checkedEL.innerHTML = '';
        checkedEL.classList.remove('checked'); 
    };
    
    const checkEL = element.querySelector(`span`); 
    checkEL.className = "checked"; 
    checkEL.textContent = "✓"; 
}

homeEL.addEventListener('click', () => {
    chamberEL.classList.remove('current'); 
    finalEL.classList.remove('current'); 
    homeEL.classList.add('current');
    addCheckMark(homeEL); 
})

chamberEL.addEventListener('click', () => {
    chamberEL.classList.add('current'); 
    finalEL.classList.remove('current'); 
    homeEL.classList.remove('current'); 
    addCheckMark(chamberEL); 
})

finalEL.addEventListener('click', () => {
    chamberEL.classList.remove('current'); 
    finalEL.classList.add('current'); 
    homeEL.classList.remove('current'); 
    addCheckMark(finalEL); 
})

