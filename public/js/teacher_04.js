const nav = document.getElementById("nav");
const navline = document.querySelectorAll(".navline");
const navlink = document.getElementById("navlink");

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

for(let i=0; i<4; i++){
    const rdm = Math.floor(Math.random()*men.length);
    rcm.push(men[rdm]);
    men.splice(rdm,1);
}
for(let j=0; j<4; j++){
    const rdm = Math.floor(Math.random()*men.length);
    rbm.push(men[rdm]);
    men.splice(rdm,1);
}
for(let j=0; j<4; j++){
    const rdm = Math.floor(Math.random()*men.length);
    ram.push(men[rdm]);
    men.splice(rdm,1);
}
for(let j=0; j<4; j++){
    const rdm = Math.floor(Math.random()*men.length);
    rxm.push(men[rdm]);
    men.splice(rdm,1);
}
console.log(men,rcm,rbm,ram,rxm);

const tbody = document.querySelectorAll("tbody");
console.log(tbody);

window.addEventListener("load",()=>{
    rcm.forEach((e)=>{
        let num = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tbody[0].innerHTML += num;
    });
    rbm.forEach((e)=>{
        let num = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tbody[1].innerHTML += num;
    });
    ram.forEach((e)=>{
        let num = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tbody[2].innerHTML += num;
    });
    rxm.forEach((e)=>{
        let num = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tbody[3].innerHTML += num;
    });    
    men.forEach((e)=>{
        let num = `
            <tr>
                <td>${e}</td>
            </tr>
        `
        tbody[4].innerHTML += num;
    });
})