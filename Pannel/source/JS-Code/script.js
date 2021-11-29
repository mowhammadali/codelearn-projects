// more menu

const menu_icon = document.querySelector(".menu-icon");

const more_menu = document.querySelector(".menu-icon .more");

const main_page = document.querySelector("main");


menu_icon.addEventListener("click",()=>{
    more_menu.classList.toggle("active");
})

// more menu



// modal

const search_icon = document.querySelector(".search-icon");

const close_search = document.querySelector(".close-search-modal");

const modal = document.querySelector(".modal");


search_icon.addEventListener("click" , ()=>{
    modal.classList.add("active");
})

close_search.addEventListener("click" , ()=>{
    modal.classList.remove("active");
})

// modal



// aside

const hambergur_menu = document.querySelector("nav .hambergur-menu");

const aside = document.querySelector("aside");

const content = document.querySelector("#content");

const section = document.querySelector("header section");


hambergur_menu.addEventListener("click" , function(){
    aside.classList.toggle("active");
});

content.addEventListener("click",function(){
    aside.classList.remove("active");
})

section.addEventListener("click",function(){
    aside.classList.remove("active");
})

// close_aside.addEventListener("click" , function(){
//     aside.classList.remove("active");
// })

// aside

