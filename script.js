let l1 = document.querySelector('.menu');
let l2 = document.querySelector('.invisivel');
let l3 = document.querySelector('.container');
let l4 = document.querySelector('.container1');
let l5 = document.querySelector('.logo');
let l6 = document.querySelector('.divlogin');
let l7 = document.querySelector('.divlogin2');
let l8 = document.querySelector('.ulInvisible');
let l9 = document.querySelector('.hamburguer');

l1.onclick = function(){
    l1.classList.toggle('menu3')
    l2.classList.toggle('mostrando');
    l3.classList.toggle('container2');
    l4.classList.toggle('container2');
    l5.classList.toggle('logo1');
    l8.classList.toggle('ulVisible');
    l9.classList.toggle('hamburguer2');
}

l6.onclick = function(){
    l7.classList.toggle('divlogin3');
    // l2.classList.toggle('mostrando');
    // l3.classList.toggle('container2');
    // l4.classList.toggle('container2');
    l7.classList.toggle('logo3');

}

l1.onmouseover = function(){
    l1.classList.toggle('menu2')
}

l1.onmouseout = function(){
    l1.classList.toggle('menu2')
}


