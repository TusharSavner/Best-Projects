window.addEventListener('message', function(event)  {
    if (event.data === 'start_mainscreen') {

        this.document.getElementById('mainscreen').src = '../mainscreen/mainscreen.html' ;
    }
    else if (event.data.action === 'games') {

        this.document.getElementById('mainscreen').src = '../mainscreen/games/games.html';
    }
    else if (event.data.action === 'back') {

        this.document.getElementById('mainscreen').src = '../mainscreen/mainscreen.html';
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const mainScreen = document.getElementById("mainScreen");
  const consolePause = document.getElementById("consolePause");


  document.addEventListener("click", (e) => {
    if (!mainScreen.contains(e.target)) {
      consolePause.style.display = "flex";
    }
  });

  consolePause.addEventListener("click", (e) => {
    e.stopPropagation(); 
    consolePause.style.display = "none";
    document.getElementById("mainscreen").contentWindow.focus();
  });
});
