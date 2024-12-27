document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none'; // Hide menu
        } else {
            menu.style.display = 'block'; // Show menu
        }
    });
});
