menuBar=document.getElementById("menu-bar-icon");
menuBarClose=document.getElementById("menu-bar-close-icon");
menuBarContainer=document.getElementById("menu-bar-container");


function update(){
    menuBarContainer.style.left="0"
}

menuBarClose.addEventListener("click",reset)
function reset(){
    menuBarContainer.style.left="-100%"
}

var listItems = document.querySelectorAll('.list-itemss');

for(i=0; i<listItems.length;i++)
    {
    listItems[i].addEventListener("click",()=>{
        menuBarContainer.style.left="-100%"
    })
}


let smallPara=document.getElementById("para1-container")
let bigPara=document.getElementById("para3-container")
let readMoreBtn=document.getElementById("about-para-btn1")
let readLessBtn=document.getElementById("about-para-btn2")


readMoreBtn.addEventListener('click',readmore)
function readmore(){
    smallPara.style.display="none"
    bigPara.style.display="block"
}

readLessBtn.addEventListener('click',readless)
function readless(){
    bigPara.style.display="none"
    smallPara.style.display="block"
}

// contactInputs=document.querySelector('#contact-form-container')
// contactBtn=document.querySelector('#contact-button')

// contactBtn.addEventListener("click",submitForm)
// function submitForm() {
//     document.contactInputs.reset();
//     }

