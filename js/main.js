let hamburgIcon = document.querySelector(".hamburg-icon");
let start = document.querySelector(".start");
let mid = document.querySelector(".mid");
let end = document.querySelector(".end");
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");

hamburgIcon.addEventListener('click', () =>{
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    start.classList.toggle("active");
    mid.classList.toggle("active");
    end.classList.toggle("active");
});
