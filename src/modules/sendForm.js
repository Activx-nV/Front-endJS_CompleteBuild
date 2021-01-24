const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...';

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        // ,credentials: 'include'
    });

    const month1 = document.querySelector('#m1'),
        month6 = document.querySelector('#m2'),
        month9 = document.querySelector('#m3'),
        month12 = document.querySelector('#m4');

    let warningCardMessage = document.querySelector('.card-order-warning');

    const footerForm = document.querySelector('#footer_form');
    const checkbox = document.querySelectorAll('.checkbox');
    const checkbox1 = document.querySelector('#check1');
    const popUp = document.querySelector('.popup');
    const popUpThanks = document.querySelector('#thanks');
    const warningPopUp = document.getElementById('warningPopUp');
    const bannerForm = document.getElementById('banner-form');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const statusMessage = document.createElement('div');
    const allPageInputs = document.querySelectorAll('input');
    const formContent = document.querySelector('.form-content');
    const formBtn = document.querySelector('.btn-send');
    const warningMessage = document.querySelector('.warning');
    statusMessage.style.cssText = 'font-size: 2rem;';
    const checkboxCardOrder = document.querySelector('#card_check');

    formContent.addEventListener('click', event => {
        const warningCallbackMessage = document.querySelector('.warning-callback');
        if (event.target.id === 'check') {
            warningCallbackMessage.textContent = '';
            formHandler(form1);
            formHandler(form2);
        } else if (event.target.className === "btn btn-send") {
            formBtn.style.fontSize = "11px";
            warningCallbackMessage.textContent = 'подтвердите согласие';
            return;
        }
    });

    // if (document.location.pathname !== '/mozaika.html' && document.location.pathname !== '/schelkovo.html') {
    //     const formCard = document.getElementById('card_order');
    //     formCard.addEventListener('click', event => {
    //         if (checkboxCardOrder.checked) {
    //             warningCardMessage.textContent = '';
    //         }
    //         if (!checkboxCardOrder.checked && event.target.className === "btn card-order-btn") {
    //             warningCardMessage.textContent = 'подтвердите обработку персональных данных';
    //             if (event.target.className === 'btn card-order-btn' && month1.checked || month6.checked || month9.checked || month12.checked) {
    //                 formHandler(formCard);
    //             }
    //         }
    //     });
    // }

    bannerForm.addEventListener('click', event => {
        if (event.target.id === 'check1') {
            formHandler(bannerForm);
            warningMessage.textContent = "";
        } else if (event.target.className === "btn" && !checkbox1.checked) {
            warningMessage.textContent = 'подтвердите обработку персональных данных';
            return;
        }
    });

    footerForm.addEventListener('click', () => {
        const footerCheckBoxMozaika = document.querySelector('#footer_leto_mozaika');
        const footerCheckBoxSchelkovo = document.querySelector('#footer_leto_schelkovo');
        const footerSendBtn = document.querySelector('.popup-btn-footer');
        const warningFooter = document.querySelector('.warning-footer');
        footerSendBtn.setAttribute('disabled', true);
        if (footerCheckBoxMozaika.checked || footerCheckBoxSchelkovo.checked) {
            warningFooter.textContent = '';
            footerSendBtn.removeAttribute('disabled', true);
            formHandler(footerForm);
        } else if (!footerCheckBoxMozaika.checked && !footerCheckBoxSchelkovo.checked) {
            warningFooter.textContent = 'Не забудьте выбрать один из клубов, чтобы отправить заявку';
        }
    });

    function formHandler(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopImmediatePropagation();
            statusMessage.textContent = loadMessage;
            if (event.target === bannerForm) {
                event.target.children[3].innerText = loadMessage;
            } else if (event.target === footerForm) {
                event.target[3].textContent = loadMessage;
            } else {
                event.target.lastElementChild.innerText = loadMessage;
            }

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then(response => {
                if (response.status !== 200) {
                    throw new Error('Status error, something went wrong.');
                }
                popUp.style.display = 'none';
                if (event.target === bannerForm) {
                    event.target.children[3].innerText = 'Записаться';
                } else if (event.target === footerForm) {
                    event.target[3].textContent = 'Перезвоните мне';
                } else if (event.target === form1) {
                    event.target.lastElementChild.innerText = '';
                } else {
                    event.target.lastElementChild.innerText = 'Записаться';
                }
                popUpThanks.style.display = 'block';
                setTimeout(() => {
                    form.removeEventListener('submit', event, true);
                    allPageInputs.forEach(item => {
                        if (item.classList.contains('text-input') || item.classList.contains('num-input')) {
                            item.value = '';
                        }
                    });
                    popUpThanks.style.display = 'none';
                }, 3000);
                checkbox.forEach(elem => {
                    elem.checked = false;
                });
                popUpThanks.addEventListener('click', event => {
                    allPageInputs.forEach(item => {
                        if (item.classList.contains('text-input') || item.classList.contains('num-input')) {
                            item.value = '';
                        }
                    });
                    const target = event.target;
                    if (target.classList.contains('close_icon')) {
                        popUpThanks.style.display = 'none';
                    } else if (target.classList.contains('overlay')) {
                        popUpThanks.style.display = 'none';
                    } else if (target.classList.contains('close-btn')) {
                        popUpThanks.style.display = 'none';
                    }
                });
            }).catch(error => {
                if (event.target === bannerForm) {
                    event.target.children[3].innerText = errorMessage;
                    setTimeout(() => {
                        event.target.children[3].innerText = `Записаться`;
                    }, 2500);
                } else if (event.target === footerForm) {
                    warningPopUp.style.display = 'block';
                    setTimeout(() => {
                        warningPopUp.style.display = 'none';
                    }, 3000);
                    warningPopUp.addEventListener('click', event => {
                        const target = event.target;
                        if (target.classList.contains('close_icon')) {
                            warningPopUp.style.display = 'none';
                        } else if (target.classList.contains('overlay')) {
                            warningPopUp.style.display = 'none';
                        } else if (target.classList.contains('close-btn')) {
                            warningPopUp.style.display = 'none';
                        }
                    });
                    setTimeout(() => {
                        event.target[3].textContent = `Перезвоните мне`;
                    }, 2500);
                } else {
                    event.target.lastElementChild.innerText = errorMessage;
                    setTimeout(() => {
                        event.target.lastElementChild.textContent = `Записаться`;
                    }, 2500);
                }
                console.error(error);
            });
        });
    }
};

export default sendForm;
