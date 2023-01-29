
    window.addEventListener("load", () => {
        const st = document.getElementById("btntime");
        st.addEventListener("click", count_strat, false)

        const stp = document.getElementById("timerbtn");
        stp.addEventListener("click", count_stop, false);

        // const reset = document.getElementById("reset");
        // reset.addEventListener("click",count_reset,false);
    });
    
    const foot = document.getElementById("foot");



    let count = 5;
    // let min  = 0;
    let sec = 0;
    let start_f = false;
    let interval;

    function count_strat() {
        if (start_f === false) {
            interval = setInterval(count_down, 1000);
            start_f = true;
        }
    };

    function count_down() {
        if (count === 1) {
            let display = document.getElementById("timer");
            display.style.color = "black";
            display.innerHTML = "Time up!!";
            clearInterval(interval);
            let nextBtn = document.createElement("button");
            nextBtn.innerHTML = "つぎへ！"
            nextBtn.id = "nextbtn";
            foot.appendChild(nextBtn);
            foot.addEventListener("click",()=>{
                location.href = "class_05.html"
            });
        } else {
            count--;
            // min = Math.floor(count/60);
            sec = count % 60;
            let count_down = document.getElementById("timer");
            count_down.innerHTML = ("00") + ":" + ("0" + sec).slice(-2);
        }
    };

    function count_stop() {
        clearInterval(interval);
        start_f = false;
    };

    // function count_reset(){
    //     clearInterval(interval);
    //     count = 5;
    //     start_f = false;
    //     let count_down = document.getElementById("timer");
    //     count_down.style.color = "black";
    //     count_down.innerHTML = "03:00";
    // }



