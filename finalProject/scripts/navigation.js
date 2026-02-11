export function setupNav () {


    ////////////////////HAMBURGER////////////////////
    const nav_button = document.querySelector('#ham-btn');
    const navEL = document.querySelector('#nav-bar');

    nav_button.addEventListener('click', () => {
        nav_button.classList.toggle('show');
        navEL.classList.toggle('show');
    });


    ////////////////////LINKS//////////////////////

    const homeEL = document.querySelector('.home');
    const reportEL = document.querySelector('.report');
    const incidentsEL = document.querySelector('.incidents');

    const parentEL = document.querySelector('.navigation ul')
    const childrenEL = parentEL.children;

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

    incidentsEL.addEventListener('click', () => {
        removeCheckMarks();
        incidentsEL.classList.add('current');
        addCheckMark(incidentsEL);
    })

    reportEL.addEventListener('click', () => {
        removeCheckMarks();
        reportEL.classList.add('current');
        addCheckMark(reportEL);
    })

}