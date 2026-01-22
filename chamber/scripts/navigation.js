document.addEventListener("DOMContentLoaded", () => {

    
    ////////////////////HAMBURGER////////////////////
    const nav_button = document.querySelector('#ham-btn');
    const navEL = document.querySelector('#nav-bar');
    
    nav_button.addEventListener('click', () => {
        nav_button.classList.toggle('show');
        navEL.classList.toggle('show');
    });
    
    
    ////////////////////LINKS//////////////////////
    
    const homeEL = document.querySelector('.home');
    const joinEL = document.querySelector('.join');
    const discoverEL = document.querySelector('.discover');
    const directoryEL = document.querySelector('.directory');
    const unknownEL = document.querySelector('.unknown');
    parentEL = document.querySelector('.navigation ul')
    childrenEL = parentEL.children;
    
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
    
    function removeCheckMarks() {
        for (const child of childrenEL) {
            child.classList.remove('current');
        };
    }
    
    homeEL.addEventListener('click', () => {
        removeCheckMarks();
        homeEL.classList.add('current');
        addCheckMark(homeEL);
    })
    
    directoryEL.addEventListener('click', () => {
        removeCheckMarks();
        directoryEL.classList.add('current');
        addCheckMark(directoryEL);
    })
    
    joinEL.addEventListener('click', () => {
        removeCheckMarks();
        joinEL.classList.add('current');
        addCheckMark(joinEL);
    })
    
    discoverEL.addEventListener('click', () => {
        removeCheckMarks();
        discoverEL.classList.add('current');
        addCheckMark(discoverEL);
    })
    
    unknownEL.addEventListener('click', () => {
        removeCheckMarks();
        unknownEL.classList.add('current');
        addCheckMark(unknownEL);
    })
});