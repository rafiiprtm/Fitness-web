let loginform = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');


document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});