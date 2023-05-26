const hamburger = document.querySelector('.hamburger');
const rightNav = document.querySelector('.right-nav');
const btn = document.querySelectorAll('.btn');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    rightNav.classList.toggle('active');
});

btn.forEach(b => b.addEventListener('click', () => {
    rightNav.classList.remove('active');
}));

window.addEventListener('scroll', () => {
    rightNav.classList.remove('active');
});