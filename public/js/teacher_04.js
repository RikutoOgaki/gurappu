const nav = document.getElementById("nav");
const navline = document.querySelectorAll(".navline");
const navlink = document.getElementById("navlink");
const btn = document.getElementById("btnrandam");

nav.addEventListener("click", ()=>{
    navlink.classList.toggle("open");
    navline.forEach((e)=>{
        e.classList.toggle("active");
    });
})

let rcm = [];
let rbm = [];
let ram = [];
let rxm = [];

let men = [
    "中井　侑吾",
    "森田　翔太郎",
    "福村　晃弘",
    "池田　博人",
    "ジェイソン",
    "神崎　未希",
    "須崎　魁人",
    "細田　海斗",
    "大澤　心春",
    "奥　綾太",
    "薛　思穏",
    "大垣　陸斗",
    "ダレン",
    "山野　錬磨",
    "阪本　陸",
    "山地　咲愛",
    "和田　卓斗",
    "基　恵都",
    "本村　永遠",
    "中木屋　十夢"
];

console.log(men);


btn.addEventListener("click",()=>{
    for(let i=0; i<4; i++){
        let rdm = Math.floor(Math.random()*men.length);
        rcm.push(men[rdm])
        men.splice(rdm,1)
    }
    for(let i=0; i<4; i++){
        let rdm = Math.floor(Math.random()*men.length);
        rbm.push(men[rdm])
        men.splice(rdm,1)
    }
    for(let i=0; i<4; i++){
        let rdm = Math.floor(Math.random()*men.length);
        ram.push(men[rdm])
        men.splice(rdm,1)
    }
    for(let i=0; i<4; i++){
        let rdm = Math.floor(Math.random()*men.length);
        rxm.push(men[rdm])
        men.splice(rdm,1)
    }
})