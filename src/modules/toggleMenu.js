const toggleMenu = () => {
    const btnMenu = document.querySelector('.club-select'),
        menu = document.getElementById('club-list'),
        menuSelector = document.querySelector('.clubs-list').firstElementChild;

    let count = 0;
    const handlerMenu = event => {
        //const target = event.target.tagName;
        if (menu.style.display !== 'block') {
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count += 0.02;
                menu.style.opacity = count;
                if (count > 1) {
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);

            menu.style.display = 'block';
            menuSelector.textContent = 'Закрыть меню';
        } else if (menu.style.display === 'block' && event.target.tagName === 'A' || event.target.tagName === 'P') {
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count -= 0.02;
                menu.style.opacity = count;
                if (count < 0.2) {
                    menu.style.display = 'none';
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);
            menuSelector.textContent = 'Выбрать клуб';
        }
    };

    btnMenu.addEventListener('click', handlerMenu);

    document.body.addEventListener('click', event => {
        const clubsList = document.querySelector('.clubs-list  p');
        let target = event.target.tagName;
        if (menu.style.display === 'block' && target !== 'A' && event.target !== clubsList && target !== 'LI' && target !== 'UL') {
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count -= 0.02;
                menu.style.opacity = count;
                if (count < 0.2) {
                    menu.style.display = 'none';
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);
            menuSelector.textContent = 'Выбрать клуб';
        }
    });

    menu.addEventListener('click', event => {
        //let target = event.target.tagName;
        if (event.target.tagName === 'A') {
            handlerMenu();
        }
    });
};

export default toggleMenu;
