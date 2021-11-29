// cascade menu********

const open_cascade_menu1 = document.getElementsByClassName("open-cascade-menu")[0];
const cascade1 = document.querySelectorAll(".cascade")[0];

const open_cascade_menu2 = document.getElementsByClassName("open-cascade-menu")[1];
const cascade2 = document.querySelectorAll(".cascade")[1];


open_cascade_menu1.addEventListener("mouseenter",()=>{
    cascade1.classList.add("active");
})

open_cascade_menu1.addEventListener("mouseleave",()=>{
    cascade1.classList.remove("active");
})


open_cascade_menu2.addEventListener("mouseenter",()=>{
    cascade2.classList.add("active");
})
open_cascade_menu2.addEventListener("mouseleave",()=>{
    cascade2.classList.remove("active");
})

// cascade menu********



// modal *********

const search_icon = document.querySelector(".fa-search");

const close_icon = document.querySelector(".exit .fa-close");


const modal = document.querySelector(".modal");

search_icon.addEventListener("click",function(){
    modal.classList.add("active");
})


close_icon.addEventListener("click",function(){
    modal.classList.remove("active");
})

// modal *********



// side menu ******

const sideMenu = document.querySelector(".right-menu");

document.querySelector(".hambergur-menu").addEventListener("click",()=>{
    sideMenu.classList.add("active");
})

document.querySelector(".close-sidemenu .fa-close").addEventListener("click",()=>{
    sideMenu.classList.remove("active");
})

// side menu ******