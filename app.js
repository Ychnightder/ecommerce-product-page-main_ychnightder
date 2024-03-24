let cart = document.querySelector('.cart');
let modalCart = document.querySelector('.modal_cart');

cart.addEventListener('click', () => {
    if( modalCart.style.display == 'block' ){
        modalCart.style.display = 'none';
    }else{
        modalCart.style.display = 'block';
    }
});


