const buttonOpen = document.getElementById('buttonOpen');
const buttonClose = document.getElementById('buttonClose');

function openMobileMenu() {
  buttonOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
  buttonOpen.setAttribute('aria-expanded', 'false');
}

buttonOpen.addEventListener('click', openMobileMenu(),
);

buttonClose.addEventListener('click', closeMobileMenu(),
);

