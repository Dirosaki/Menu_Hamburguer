let l1 = document.querySelector('.menu');
let l2 = document.querySelector('.invisivel');
let l3 = document.querySelector('.container');
let l4 = document.querySelector('.container1');
let l5 = document.querySelector('.logo');
let l6 = document.querySelector('.divlogin');
let l7 = document.querySelector('.logo2');

l1.onclick = function(){
    l2.classList.toggle('mostrando');
    l3.classList.toggle('container2');
    l4.classList.toggle('container2');
    l5.classList.toggle('logo1');
}

l6.onclick = function(){
    l6.classList.toggle('divlogin2');
    l2.classList.toggle('mostrando');
    l3.classList.toggle('container2');
    l4.classList.toggle('container2');
    l7.classList.toggle('logo3')

}

l6.onmouseover = function(){
    l6.classList.toggle('divlogin1')
}

l6.onmouseout = function(){
    l6.classList.toggle('divlogin1')
}

