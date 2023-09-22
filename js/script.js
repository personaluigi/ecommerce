const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

function openMenu() {
    btn.classList.toggle('active-menu');
    menu.classList.toggle('show-menu');
}

let basket = document.getElementById('basket');

function openBasket() {
    basket.classList.toggle('basket-active');
}

const thumbOne = document.getElementById('thumb-one');
const thumbTwo = document.getElementById('thumb-two');
const thumbThree = document.getElementById('thumb-three');
const thumbFour = document.getElementById('thumb-four');
const areaSlide = document.getElementById('img-slide');

function showOne() {
    thumbOne.classList.add('active-thumb');
    thumbTwo.classList.remove('active-thumb');
    thumbThree.classList.remove('active-thumb');
    thumbFour.classList.remove('active-thumb');
    areaSlide.src = 'images/image-product-1.jpg';
}

function showTwo() {
    thumbOne.classList.remove('active-thumb');
    thumbTwo.classList.add('active-thumb');
    thumbThree.classList.remove('active-thumb');
    thumbFour.classList.remove('active-thumb');
    areaSlide.src = 'images/image-product-2.jpg';
}

function showThree() {
    thumbOne.classList.remove('active-thumb');
    thumbTwo.classList.remove('active-thumb');
    thumbThree.classList.add('active-thumb');
    thumbFour.classList.remove('active-thumb');
    areaSlide.src = 'images/image-product-3.jpg';
}

function showFour() {
    thumbOne.classList.remove('active-thumb');
    thumbTwo.classList.remove('active-thumb');
    thumbThree.classList.remove('active-thumb');
    thumbFour.classList.add('active-thumb');
    areaSlide.src = 'images/image-product-4.jpg';
}

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const value = document.getElementById('number');

const update = () => {
    value.innerHTML = num;
}

let num = 0;

minus.addEventListener('click', () => {
    if (num > 0) {
        num -= 1;
        update();
    }
});

plus.addEventListener('click', () => {
    num += 1;
    update();
});

function addToCart() {
    if (num > 0) {
        basket.classList.add('basket-active');
    }
}
