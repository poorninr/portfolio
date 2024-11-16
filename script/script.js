menuBar=document.getElementById("menu-bar-icon");
menuBarClose=document.getElementById("menu-bar-close-icon");
menuBarContainer=document.getElementById("menu-bar-container");
bodycontainer=document.querySelector("body-container")

function update(){
    menuBarContainer.style.left="0"
}

menuBarClose.addEventListener("click",reset)
function reset(){
    menuBarContainer.style.left="-100%"
}