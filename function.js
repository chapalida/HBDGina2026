window.addEventListener('click', function(event) {
    var overlay = document.getElementById('overlay');
    
    if (overlay && overlay.style.display !== 'none') {
        overlay.style.display = 'none';
    }
});
