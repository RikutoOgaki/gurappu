const nav = document.getElementById("nav");
const navline = document.querySelectorAll(".navline");
const navlink = document.getElementById("navlink");

nav.addEventListener("click", ()=>{
    navlink.classList.toggle("open");
    navline.forEach((e)=>{
        e.classList.toggle("active");
    });
})