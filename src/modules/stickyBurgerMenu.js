const stickyBurgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    const popUpMenu = document.querySelector('.popup-menu');
    const closeBtn = document.querySelector('.close-menu-btn');
    const arrowBack = document.querySelector('#totop');
    document.addEventListener('DOMContentLoaded', () => {
        arrowBack.style.display = 'none';
    });
    topMenu.addEventListener('click', event => {
        if (event.target.tagName === "IMG") {
            popUpMenu.style.display = 'flex';
        }
    });
    closeBtn.addEventListener('click', event => {
        if (event.target.tagName === "IMG") {
            popUpMenu.style.display = 'none';
        }
    });
    popUpMenu.addEventListener('click', event => {
        if (event.target.tagName === "A") {
            popUpMenu.style.display = 'none';
        }
    });

    topMenu.style.overflow = 'hidden';
    const sticky = topMenu.offsetTop + 40;

    function stickyHandler() {
        if (window.pageYOffset >= 500) {
            arrowBack.style.display = 'block';
        } else {
            arrowBack.style.display = 'none';
        }
        if (window.pageYOffset >= sticky && document.documentElement.clientWidth <= 768) {
            topMenu.classList.add("sticky");
        } else {
            topMenu.classList.remove("sticky");
        }
    }
    document.addEventListener('scroll', stickyHandler);

};

export default stickyBurgerMenu;
