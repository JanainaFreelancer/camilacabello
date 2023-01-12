const menu = document.querySelector('.js-menu');
const icon = document.querySelector('.js-nav');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function menuFixo() {
    if (window.pageYOffset > 40) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active')
    }
}
window.addEventListener('scroll', menuFixo);

const twitter = document.querySelector('.js-twitter');
const pageUrl = location.href;
const messagem = "I love this song! Camila is such incredible artist :)";

const twitterMessage = `https://twitter.com/intent/tweet?text=${pageUrl}. ${messagem}`;

function twitterApi(e) {
    e.preventDefault();
    window.open(URL = twitterMessage, target = 'blank');
}
twitter.addEventListener('click', twitterApi);



const facebook = document.querySelector('.js-facebook');
const pageFace = location.href;
const mensagemFacebook = "I love this song! Camila is such incredible artist :)";

const facebookMessage = `https://www.facebook.com/sharer/sharer.php?u=${pageFace}. ${mensagemFacebook}`;

function facebookApi(e) {
    e.preventDefault()
    window.open(URL = facebookMessage, target = 'blank')
}
facebook.addEventListener('click', facebookApi);


const menuBurger = document.getElementById('js-mobile');
const menuBurgerDark = document.getElementById('js-mobile-dark');
const btnClose = document.querySelector('.js-close-burger');
const nav = document.querySelector('.js-menu-burger');

function menuMobile() {
    nav.classList.toggle('active');
}

btnClose.addEventListener('click', () => {
    nav.classList.remove('active');
})

menuBurger.addEventListener('click', menuMobile);
menuBurgerDark.addEventListener('click', menuMobile);

//seleciona o modal
const modalLivingProof = document.querySelector('.js-overlay');
//seleciona os cards
// const cards = document.querySelectorAll('.item');

//pega os cards
// for (let card of cards) {
//     card.addEventListener('click', function() {
//         //pega o ID do vídeo
//         const videoId = card.getAttribute("id");
//         modalLivingProof.classList.add('active');
//         //mudar vídeo dependendo do card
//         modalLivingProof.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
//     });
// }
document.querySelector('.js-modal').addEventListener('click', function() {
    modalLivingProof.classList.remove('active');
    //parar de tocar quando fechar
    modalLivingProof.querySelector('iframe').src = "";
})
const btnBuy = document.querySelectorAll('.js-buy');
const modalMusic = document.querySelector('.music-overlay');

for (let buy of btnBuy) {
    buy.addEventListener('click', function() {
        modalMusic.classList.add('active');
    });
}
document.querySelector('.js-close-music').addEventListener('click', function() {
    modalMusic.classList.remove('active');
});
// modals news
//======== MODAL 1 ========
const postItem1 = document.querySelector('.js-item-1');
const modalPost1 = document.querySelector('.overlay-modal-item-1');

function showModal1() {
    modalPost1.classList.add('active');
}
document.querySelector('.js-close-item').addEventListener('click', () => {
    modalPost1.classList.remove('active');
});
postItem1.addEventListener('click', showModal1);

//======== MODAL 2 ========
const postItem2 = document.querySelector('.js-item-2');
const modalPost2 = document.querySelector('.overlay-modal-item-2');

function showModal2() {
    modalPost2.classList.add('active');
}
document.querySelector('.js-close-item-2').addEventListener('click', () => {
    modalPost2.classList.remove('active');
});
postItem2.addEventListener('click', showModal2);

//======== MODAL 3 ========
const postItem3 = document.querySelector('.js-item-3');
const modalPost3 = document.querySelector('.overlay-modal-item-3');

function showModal3() {
    modalPost3.classList.add('active');
}
document.querySelector('.js-close-item-3').addEventListener('click', () => {
    modalPost3.classList.remove('active');
});
postItem3.addEventListener('click', showModal3);

//======== MODAL 4 ========
const postItem4 = document.querySelector('.js-item-4');
const modalPost4 = document.querySelector('.overlay-modal-item-4');

function showModal4() {
    modalPost4.classList.add('active');
}
document.querySelector('.js-close-item-4').addEventListener('click', () => {
    modalPost4.classList.remove('active');
});
postItem4.addEventListener('click', showModal4);



let itensMenu = document.querySelectorAll('.js-item');
let menuBugerMobile = document.querySelector('.js-menu-burger')



function menuAberto(e) {
    e.preventDefault();
    let element = e.target;
    let id = element.getAttribute('href');
    let section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section,
        behavior: "smooth",
    });
    menuBugerMobile.classList.remove('active');
}
itensMenu.forEach((item) => {
    item.addEventListener('click', menuAberto)
})