const burgerBtn = document.querySelector('.burger-btn');
const headerMenu = document.querySelector('.header-menu');

burgerBtn.addEventListener('click', function () {
    headerMenu.classList.toggle('active')
    burgerBtn.classList.toggle('active')

})

// console.log(burgerBtn)
