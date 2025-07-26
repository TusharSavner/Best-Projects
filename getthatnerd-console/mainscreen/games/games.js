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
window.onload = () => {
    document.getElementById('main-menu').focus();
};
document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('.menu-button');
  let selectedIndex = 0;

  function updateSelection(index) {

    menuButtons.forEach(btn => btn.classList.remove('selected'));

    menuButtons[index].classList.add('selected');

    menuButtons[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }


  updateSelection(selectedIndex);

  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % menuButtons.length;
      updateSelection(selectedIndex);
    } else if (e.key === 'ArrowUp') {
      selectedIndex = (selectedIndex - 1 + menuButtons.length) % menuButtons.length;
      updateSelection(selectedIndex);
    } else if (e.key === 'Enter') {
      const action = menuButtons[selectedIndex].dataset.action;
      console.log("Selected:", action);

    }
  });
});

