document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');

    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    const openDrawer = () => {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    };

    const closeDrawer = () => {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    };

    menuBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
    });
    });
});