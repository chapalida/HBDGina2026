function hideOverlay() {
    var overlay = document.getElementById('overlay');

    if (overlay && overlay.style.display !== 'none') {
        overlay.style.display = 'none';
    }
}

window.addEventListener('click', hideOverlay);
window.addEventListener('touchend', hideOverlay);
