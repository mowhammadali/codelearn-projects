// arrival

const arrival_button = document.querySelector(".arrival-button");

const modal2 = document.querySelector(".modal2");

const close2 = document.querySelector(".modal2 .exit ");

arrival_button.addEventListener("click",()=>{
    modal2.classList.add("active");
})

close2.addEventListener("click",()=>{
    modal2.classList.remove("active");
})

// arrival



// registry

const registry_button = document.querySelector(".registry-button"); 

const modal3 = document.querySelector(".modal3");

const close3 = document.querySelector(".modal3 .exit i");

registry_button.addEventListener("click",()=>{
    modal3.classList.add("active");
})

close3.addEventListener("click",()=>{
    modal3.classList.remove("active");
})

// registry




// hide and visible password

const eye = document.querySelector(".fa-eye");

const eye_slash = document.querySelector(".fa-eye-slash");

var password_box = document.querySelector("#password2");

var email_box = document.querySelector("#email");


eye.addEventListener("click",()=>{
    eye.classList.toggle("active");
    eye_slash.classList.toggle("active");
    password_box.setAttribute("type","text");
})


eye_slash.addEventListener("click",()=>{
    eye.classList.toggle("active");
    eye_slash.classList.toggle("active");
    password_box.setAttribute("type","password");
})

// hide and visible password





// check box

const exclamation = document.querySelector(".main-content .email .fa-exclamation");

const exclamation2 = document.querySelector(".main-content .password .fa-exclamation");


document.querySelector(".main-content form button")
.addEventListener("click",checkbox);

function checkbox(e){
    e.preventDefault();
    if(password_box.value === null || password_box.value === ''){
        password_box.style.borderBottomColor = 'red';
        exclamation2.classList.add("active");
    }
    else{
        password_box.style.borderBottomColor = 'gray';
        exclamation2.classList.remove("active");
    }


    if(email_box.value === null || email_box.value === ''){
        email_box.style.borderBottomColor = 'red';
        exclamation.classList.add("active");
    }
    else{
        email_box.style.borderBottomColor = 'gray';
        exclamation.classList.remove("active");
    }
}

// check box



// confirm registry information

const email_registry = document.querySelector(".email-registry input");

const mobile_registry = document.querySelector(".mobile-registry input");

const password_registry = document.querySelector(".password-registry input");

const password_again = document.querySelector(".password-again input");



document.querySelector(".main-content2 button")
.addEventListener("click",confirm_info);

function confirm_info(){
    if(email_registry.value === null || email_registry.value === ''){
        email_registry.style.borderBottomColor = "red";
        document.querySelector(".email-registry i")
        .classList.add("active");
    }
    else{
        email_registry.style.borderBottomColor = "gray";
        document.querySelector(".email-registry i")
        .classList.remove("active");
    }


    if(mobile_registry.value === null || mobile_registry.value === ''){
        mobile_registry.style.borderBottomColor = "red";
        document.querySelector(".mobile-registry i")
        .classList.add("active");
    }
    else{
        mobile_registry.style.borderBottomColor = "gray";
        document.querySelector(".mobile-registry i")
        .classList.remove("active");
    }


    if(password_registry.value === null || password_registry.value === ''){
        password_registry.style.borderBottomColor = "red";
        document.querySelector(".password-registry i")
        .classList.add("active");
    }
    else{
        password_registry.style.borderBottomColor = "gray";
        document.querySelector(".password-registry i")
        .classList.remove("active");
    }


    if(password_again.value === null || password_again.value === ''){
        password_again.style.borderBottomColor = "red";
        document.querySelector(".password-again i")
        .classList.add("active");
    }
    else{
        password_again.style.borderBottomColor = "gray";
        document.querySelector(".password-again i")
        .classList.remove("active");
    }
}

// confirm registry information


