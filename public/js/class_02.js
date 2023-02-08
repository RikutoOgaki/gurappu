const nav = document.getElementById("nav");
const navline = document.querySelectorAll(".navline");
const navlink = document.getElementById("navlink");

nav.addEventListener("click", ()=>{
    navlink.classList.toggle("open");
    navline.forEach((e)=>{
        e.classList.toggle("active");
    });
});

let men = [
    "りくと",
    "しおん",
    "かいと",
    "ざいこ"
];

const tab = document.getElementById("tab");
window.addEventListener("load",()=>{
    men.forEach((e)=>{
        let pro = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tab.innerHTML += pro;
    });
});

let man = [
    "りくと",
    "しおん",
    "かいと",
    "ざいこ"
];


let rcm = [];

const btn = document.getElementById("btn");
const text = document.querySelectorAll(".text");
console.log(rcm);
btn.addEventListener("click",()=>{
    for(let i=0; i<3; i++){
        let rdm = Math.floor(Math.random()*man.length);
        rcm.push(man[rdm]);
        man.splice(rdm,1);
    }
    text[0].innerHTML = rcm[0]
    text[1].innerHTML = rcm[1]
    text[2].innerHTML = rcm[2]
    man = rcm;
})

