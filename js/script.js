let Navbar = document.querySelector('.navbar');


document.querySelector('#bars-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    CartItem.classList.remove('active');
}


let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
    CartItem.classList.remove('active');
}

let CartItem = document.querySelector('.items');

document.querySelector('#cart-btn').onclick = () =>{
    CartItem.classList.toggle('active');
    Navbar.classList.remove('active');
    SearchForm.classList.remove('active');
}
