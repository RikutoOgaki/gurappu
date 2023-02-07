const tab = document.getElementById("tab");
const btn = document.querySelectorAll(".btn");
const file = "class.json";
window.addEventListener("load",()=>{
    fetch(file)
        .then(respons => respons.json())
        .then(json=>{
            btn[0].addEventListener("click",()=>{
                json[0]["name"].forEach((e) => {
                    let tr = document.createElement("tr");
                    
                });
            })
            btn[1].addEventListener("click",()=>{
                json[0]["name"].forEach((e) => {
                    tab.innerHTML =
                    `
                        <tr>
                            <td>${e}</td>
                        </tr>
                    `
                });
            })
            // function btnbtn(num){
            //     if(num==0){
            //         json[0]["name"].forEach((e) => {
            //             tab.innerHTML=
            //             `
            //                 <tr>
            //                     <td>${e}</td>
            //                 </tr>
            //             `
            //         });

            //     }
            //     else if(num==2){
            //         json[0]["name"].forEach((e) => {
            //             tab.innerHTML = 
            //             `
            //                 <tr>
            //                     <td>${e}</td>
            //                 </tr>
            //             `
            //         });
            //     }
            //     else{
            //         json[0]["name"].forEach((e) => {
            //             tab.innerHTML = 
            //             `
            //                 <tr>
            //                     <td>${e}</td>
            //                 </tr>
            //             `
            //         });
            //     }
            // }
            });
        });