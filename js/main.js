'use strict';

function toggleMenu(elBtn) {
    elBtn.classList.toggle('is-active');
    var elMenu = document.querySelector('.main-menu');
    elMenu.classList.toggle('open');
}

function toggleModal() {
    var elModal = document.querySelector('.modal');
    if (elModal.style.display === "none") elModal.style.display = "block";
    else elModal.style.display = "none";
}