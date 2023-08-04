let slide = document.getElementById("slide")
let upArrow = document.getElementById("upArrow")
let downArrow = document.getElementById("downArrow")

let x = 0;

upArrow.addEventListener("click", function() {
    if(x < 0){
        x = x + 300;
        slide.style.top = x + "px"
    }
})

downArrow.addEventListener("click", function() {
    
    if(x > "-900"){
        x = x - 300;
        slide.style.top = x + "px"
    }
})