
const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');
const faq = document.querySelectorAll('.faq');




openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}

function close() {
    mainmenu.style.top = '-100%';
}

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
    });
});

