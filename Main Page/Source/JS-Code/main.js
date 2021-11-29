// Auto typping

const mytitles = ["جدید ترین دوره های کدلرن","بهترین مسیر برای یادگیری"];
var count = 0;
var index = 0;
var currenttext = '';
var showtext = '';

(function autoType(){
    if(count === mytitles.length){
        count = 0;
    }
    currenttext = mytitles[count];
    showtext = currenttext.slice(0, ++index);
    document.querySelector(".autoplay").textContent = showtext;
    if(showtext.length === currenttext.length){
        count++;
        index = 0;
    }
    setTimeout(autoType,250);
})();

// Auto typping



// weblog slider
console.log(window.outerWidth);


const Goright = document.querySelector('#go-right');
const Goleft = document.querySelector('#go-left');
const weblog_container = document.querySelector('.weblog-container');
const weblog_card = document.querySelectorAll(".weblog-card")

var maxscrollleft = weblog_container.scrollWidth - weblog_container.clientWidth;

var cardWidth = weblog_container.clientWidth * 2;

Goright.addEventListener("click",function(e){
    e.preventDefault();
    if(innerWidth > 992){
        weblog_container.scrollLeft += 250;
    }

    if((innerWidth > 768) && (innerWidth <= 992)){
        weblog_container.scrollLeft += 150;
    }

    if(innerWidth <= 768){
        weblog_container.scrollLeft += 100;
    }

    if(innerWidth <= 360){
        weblog_container.scrollLeft += 80;
    }
    
    if(weblog_container.scrollLeft > (maxscrollleft - 1)){
        weblog_container.scrollLeft -= maxscrollleft;
    }
})


Goleft.addEventListener("click",function(e){
    e.preventDefault();
    if(innerWidth > 992){
        weblog_container.scrollLeft -= 250;
    }

    if((innerWidth > 768) && (innerWidth <= 992)){
        weblog_container.scrollLeft -= 150;
    }

    if(innerWidth <= 768){
        weblog_container.scrollLeft -= 100;
    }

    if(innerWidth <= 360){
        weblog_container.scrollLeft -= 80;
    }

    if(weblog_container.scrollLeft <= 0){
        weblog_container.scrollLeft += maxscrollleft;
    }
})


function autoslider(){
    if(innerWidth > 578){
        if(weblog_container.scrollLeft > (maxscrollleft - 1)){
            weblog_container.scrollLeft -= maxscrollleft;
        }
        else{
            weblog_container.scrollLeft += 350;
        }
    }

    else if(innerWidth < 360){
        if(weblog_container.scrollLeft > (maxscrollleft - 1)){
            weblog_container.scrollLeft -= maxscrollleft;
        }
        else{
            weblog_container.scrollLeft += 150;
        }
    }

    else{
        if(weblog_container.scrollLeft > (maxscrollleft - 1)){
            weblog_container.scrollLeft -= maxscrollleft;
        }
        else{
            weblog_container.scrollLeft += 200;
        }
    }
    
}


let autoplay = setInterval(autoslider,3000);


for(let i = 0; i < weblog_card.length; i++){
    weblog_card[i].addEventListener("mouseover",()=>{
        clearInterval(autoplay);
    })
    weblog_card[i].addEventListener("mouseout",()=>{
        return autoplay = setInterval(autoslider,3000);
    })
}

// weblog slider