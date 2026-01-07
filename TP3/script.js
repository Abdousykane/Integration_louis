const burgerIcon = document.getElementById('burger-toggle');
const menuList = document.getElementById('menu-list');

if (burgerIcon && menuList) {
    burgerIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });

    const menuItems = menuList.querySelectorAll('li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuList.classList.remove('active');
        });
    });
}