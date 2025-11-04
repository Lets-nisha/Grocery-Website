let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
let card = document.querySelectorAll('.addToCart');


document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   navBar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');

   searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
   navBar.classList.remove('active');
}

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navBar.classList.toggle('active');

   searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navBar.classList.remove('active');
}





//  var swiper = new Swiper(".product-slider", {
//       loop:true,
//       spaceBetween: 20,


//       autoplay: {
//          delay:1500,
//          disableOnIntraction: false,
//       },
         
//      breakpoints: {
//         0: {
//           slidesPerView: 1,
//          //  spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 2,
//          //  spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 3,
//          //  spaceBetween: 40,
//         },
       
//       },
//     });

let swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });




    