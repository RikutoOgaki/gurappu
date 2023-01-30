const text = document.getElementById("textbox");
const btn = document.getElementById("btn");
const tab = document.getElementById("tab");
const closebtn = document.querySelectorAll("close");
const clear = document.querySelectorAll("items");

function create(){
    const tr = document.createElement("tr");
    tr.classList.add("items");

    const td = document.createElement("td");
    td.textContent = text.value;

    const close = document.createElement("button");
    close.classList.add("close");
    close.textContent = "けす";

    tr.appendChild(td);
    tr.appendChild(close);
    // tab.appendChild(tr);

    close.addEventListener("click",()=>{
        tr.remove();
    });

    return tr;
};

for(let i=0; i<closebtn.length; i++){
    closebtn[i].addEventListener("click",()=>{
        clear[i].remove();
    });
}

btn.addEventListener("click",()=>{
    if(text.value){
        tab.appendChild(create());
        text.value = "";
    }
    else{
        alert("なまえをにゅうりょくしてね！")
    }
})

