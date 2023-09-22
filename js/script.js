const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
let basket = document.getElementById('basket');

function openMenu() {
    btn.classList.toggle('active-menu');
    menu.classList.toggle('show-menu');
    basket.classList.remove('basket-active');
}

function openBasket() {
    basket.classList.toggle('basket-active');
    btn.classList.remove('active-menu');
    menu.classList.remove('show-menu');
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

const icon = document.getElementById('iconBuy');

function addToCart() {
    let pay = 125 * num;

    if (num > 0) {
        let newBuy = `<span>Cart</span><div>
        <div id="thumb-product">
        <img src="images/image-product-1-thumbnail.jpg" alt="">
      </div>
      <div id="description">
        <span>Fall Limited Edition Sneakers</span><br>
        <span>$125.00 x ${num} = <strong>$${pay}.00</strong></span>
      </div>
      <button id="delete-buy" onclick="removeBuy()">
        <img src="images/icon-delete.svg" alt="">
      </button>
    </div>
    <button id="check-out">Check Out</button>`

        basket.innerHTML = newBuy;
        icon.textContent = `${num}`
        icon.style.display = 'block';
        basket.classList.add('basket-active');
    }
}

function removeBuy() {
    let remove = '<span>Cart</span><p>Your cart is empty.</p>'

        basket.innerHTML = remove;
        icon.style.display = 'none';
}
