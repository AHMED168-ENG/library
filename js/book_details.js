/* -------------------------- read more -------------------------------------*/
var read_more = document.querySelectorAll("red_more");
var all_text = document.querySelectorAll(".all_text");
var read_more = document.querySelectorAll(".read_more");
var arr = [false , false] ;
read_more.forEach((element , key) => {
    element.onclick = function() {
        console.log("dd")
        arr[key] = !arr[key]
        if(arr[key]) {
            read_more[key].innerHTML = "اقرا القليل";
            all_text[key].style.display = "inline";
        } else {
            read_more[key].innerHTML = "اقرا المزيد";
            all_text[key].style.display = "none";
        }
    }
}); 

/* -------------------------- read more -------------------------------------*/

/* -------------------------- about small nave -------------------------------------*/
var sm_nav_button = document.getElementById("sm_nav_btn");
var dropDawn = document.getElementById("dropDawn");
sm_nav_button.onclick = function() {
    dropDawn.classList.toggle("active");
}
/* -------------------------- about small nave -------------------------------------*/



/* -------------------------- about scroll nave -------------------------------------*/
var nav = document.getElementById("nav");
var tow = document.getElementById("tow");
var top = tow.clientY;
console.log(top);
window.onscroll = function() {
    if(window.scrollY > 100) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
    if(window.scrollY > 2500 && window.scrollY  < 4000 ) {
        tow.classList.add("active");
    } else {
        tow.classList.remove("active");
    }
}
/* -------------------------- about scroll nave -------------------------------------*/

