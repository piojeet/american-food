const close_icon = document.querySelectorAll('.close_icon');
const menu_icon = document.querySelectorAll('.menu_btn');
const menu_list = document.querySelectorAll('.nav_list ul');

menu_icon.forEach(menuIcon => {
    menuIcon.addEventListener('click', () => {
        menu_list.forEach(menuList => {
            menuList.classList.add('active');
        });
    });
});

close_icon.forEach(closeIcon => {
    closeIcon.addEventListener('click', () => {
        menu_list.forEach(menuList => {
            menuList.classList.remove('active');
        });
    });
});
