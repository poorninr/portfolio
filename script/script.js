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


contactInputs=document.querySelector('#contact-form-container')
contactBtn=document.querySelector('#contact-button')

// contactBtn.addEventListener("click",submitForm)
// function submitForm() {
//     document.contactInputs.reset();
//     }

