const button = document.querySelectorAll('.menu-button');
let currentIndex = 0;

function updateSelection(index) {
    button.forEach(btn => btn.classList.remove('selected'));
    button[index].classList.add('selected');
}

function activateButton(index) {
    const actionName = button[index].dataset.action;
    window.parent.postMessage({ action: actionName }, '*');

} 

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % button.length;

        updateSelection(currentIndex);
    }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + button.length) % button.length;

        updateSelection(currentIndex)
    }
    else if (e.key === 'Enter'|| e.key === ' ' ) {

        activateButton(currentIndex);
    }
});

button.forEach((btn, i) => {
    btn.addEventListener('click', ()=> {
        currentIndex = i;

    updateSelection(currentIndex);
    activateButton(currentIndex);
    });
});

