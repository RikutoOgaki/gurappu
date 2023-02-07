const btn = document.getElementById("btn");
const text = document.getElementById("text");
const pas = document.getElementById("pas");
const file = "acount.json";
fetch(file)
    .then(response => response.json())
    .then(json=>{
        btn.addEventListener("click",()=>{
            json.forEach((e) => {
                console.log(e);
                if(e.name === text.value && e.pas === pas.value){
                    location.href = "teacher_02.html"
                }
                else{
                    alert("内容が正しくありません。")
                }
            });
        })
    });