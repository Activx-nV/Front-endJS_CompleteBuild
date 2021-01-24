const togglePopUp = () => {
    let opacityIn = 0;
    let opacityOut = 1;
    const popUp = document.querySelector('.popup'),
        formContent = document.querySelector('.form-content'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        promoBtn = document.querySelector('.fixed-gift'),
        promoPopUp = document.getElementById('gift');
    const formInputs = document.querySelectorAll('.input-text input');
    const checkbox = document.querySelectorAll('.checkbox');
    let allPageInputs = document.querySelectorAll('input');

    //fadeIn
    function fadeIn(speed, domStr) {
        let opacityInterval;
        const opacityAnimate = function() {
            opacityInterval = requestAnimationFrame(opacityAnimate);
            opacityIn += speed;
            if (opacityIn < 1.01) {
                domStr.style.display = "block";
                domStr.style.opacity = opacityIn;
            } else if (opacityIn >= 1) {
                cancelAnimationFrame(opacityInterval);
            }
        };
        opacityInterval = requestAnimationFrame(opacityAnimate);
    }
    //fadeOff
    function fadeOff(speed, domStr) {
        let opacityInterval;
        opacityOut = 1;
        const opacityAnimate = function() {
            opacityInterval = requestAnimationFrame(opacityAnimate);
            opacityOut -= speed;
            if (opacityOut > 0.1) {
                domStr.style.opacity = opacityOut;
            } else {
                domStr.style.display = 'none';
                formInputs.forEach(elem => {
                    elem.value = '';
                });
                checkbox.forEach(elem => {
                    elem.checked = false;
                });
                cancelAnimationFrame(opacityInterval);
            }
        };
        opacityInterval = requestAnimationFrame(opacityAnimate);
    }

    //popUpON
    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            allPageInputs.forEach(item => {
                if (item.classList.contains('text-input') || item.classList.contains('num-input')) {
                    item.value = '';
                }
            });
            if (document.documentElement.clientWidth >= 768) {
                opacityIn = 0;
                popUp.style.display = 'block';
                fadeIn(0.05, formContent);
            } else {
                popUp.style.display = 'block';
                popUp.style.opacity = 1;
            }
        });

        //giftPopUp
        promoBtn.addEventListener('click', () => {
            //giftPopUpON
            if (document.documentElement.clientWidth >= 768) {
                opacityIn = 0;
                promoPopUp.style.display = 'block';
                promoBtn.style.display = 'none';
                fadeIn(0.01, promoPopUp);
            } else {
                promoPopUp.style.display = 'block';
                promoPopUp.style.opacity = 1;
                promoBtn.style.display = 'none';
            }

            //giftPopUpOFF
            promoPopUp.addEventListener('click', event => {
                const target = event.target;
                if (target.classList.contains('close_icon')) {
                    if (document.documentElement.clientWidth >= 768) {
                        fadeOff(0.01, promoPopUp);
                        promoPopUp.style.display = 'none';
                    } else {
                        promoPopUp.style.display = 'none';
                    }
                } else if (target.classList.contains('overlay')) {
                    if (document.documentElement.clientWidth >= 768) {
                        fadeOff(0.01, promoPopUp);
                        promoPopUp.style.display = 'none';
                    } else {
                        promoPopUp.style.display = 'none';
                    }
                } else if (target.classList.contains('close-btn')) {
                    if (document.documentElement.clientWidth >= 768) {
                        fadeOff(0.01, promoPopUp);
                        promoPopUp.style.display = 'none';
                    } else {
                        promoPopUp.style.display = 'none';
                    }
                }
            });
        });

        //popUpOFF
        popUp.addEventListener('click', event => {
            const target = event.target;
            if (target.classList.contains('close_icon')) {
                if (document.documentElement.clientWidth >= 768) {
                    fadeOff(0.01, formContent);
                    popUp.style.display = 'none';
                } else {
                    popUp.style.display = 'none';
                    formInputs.forEach(elem => {
                        elem.value = '';
                    });
                    checkbox.forEach(elem => {
                        elem.checked = false;
                    });
                    popUp.style.display = 'none';
                }
            } else if (target.classList.contains('overlay')) {
                if (document.documentElement.clientWidth >= 768) {
                    fadeOff(0.01, formContent);
                    popUp.style.display = 'none';
                    checkbox.forEach(elem => {
                        elem.checked = false;
                    });
                } else {
                    formInputs.forEach(elem => {
                        elem.value = '';
                    });
                    popUp.style.display = 'none';
                    checkbox.forEach(elem => {
                        elem.checked = false;
                    });
                }
            }
        });
    });
};


export default togglePopUp;
