document.getElementById('msg').addEventListener('click' , function() {
    parent.postMessage('start_mainscreen', '*');
});
