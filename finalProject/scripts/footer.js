export function populateFooter() {

    const yearEl = document.getElementById('currentyear');
    if (yearEl) {
        yearEl.textContent = `© ${new Date().getFullYear()} Commerce City Chamber of Commerce`;

    }

    const lastEL = document.getElementById('lastModified');
    const raw = document.lastModified;

    if (!raw) {
        lastEL.innerHTML = 'Last Modified: not available'
        return;
    }

    lastEL.innerHTML = `Last Modified: ${raw}`;



}