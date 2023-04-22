// DOM Elements 
const plusBtn = document.querySelector('.plus'),
minusBtn = document.querySelector('.minus'),
addToCart = document.querySelector('.add'),
itemValue = document.querySelector('.item-value'),
number = document.querySelector('.number')


let count = 0;

// Functions
const addFunc = () => {
    count += 1;
    number.textContent = count;
}
const subFunc = () => {
    countText = count < 1 ? count  : count -= 1 ;
    number.textContent = countText;
}
const cartValueFunc = () => {
    itemValue.textContent = count
}

// Event listeners
plusBtn.addEventListener('click', addFunc)
minusBtn.addEventListener('click', subFunc)
addToCart.addEventListener('click', () => {
    cartValueFunc()
    number.textContent = 0
})
