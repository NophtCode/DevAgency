import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();



// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

// Feature slider


// variables
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.burger-menu');
let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            mobileNav.classList.add('is-active');
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            mobileNav.classList.remove('is-active');
    }
});
window.addEventListener('scroll', reveal);
function reveal () {
    let revealElements = document.querySelectorAll('section');
    for(let i = 0; i < revealElements.length; i++){
        let windowHeight = window.innerHeight;
        let revealtop = revealElements[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if(revealtop < windowHeight - revealpoint){
            revealElements[i].classList.add('reveal');
        } else{
            revealElements[i].classList.remove('reveal');
        }
    }
}