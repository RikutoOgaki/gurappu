const tab = document.getElementById("tab");
const btn = document.querySelectorAll(".btn");
const file = "class.json";
window.addEventListener("load",()=>{
    fetch(file)
        .then(respons => respons.json())
        .then(json=>{
            json.forEach((e) => {
                console.log(e);
            });
        });
    });