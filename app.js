let btn = document.querySelector("#btn");
let vdo = document.querySelector("#video");
let show = "none";

btn.addEventListener("click", () => {
    if(show === "none"){
        show = "viss"
        vdo.style.visibility = "visible";
    }else{
        show = "none"
        vdo.style.visibility = "hidden";
    } 
})

let btn2 = document.querySelector("#icon");
let menuB = document.querySelector(".emotes");
let shown = "no";

btn2.addEventListener("click", () => {
    if(shown === "no"){
        shown = "yes"
        menuB.style.visibility = "visible";
    }else{
        shown = "no"
        menuB.style.visibility = "hidden";
    }
})