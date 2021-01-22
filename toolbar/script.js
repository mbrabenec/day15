const buttons = document.querySelectorAll(".button")
buttons.forEach(button => {
    button.addEventListener("click", click);
});

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");


let active = "b1";

function click (e) {

    let target = e.target.id;
    if(active === target) return;

    let prev = document.getElementById(active);
    let next = document.getElementById(target);
    prev.classList.remove("selected");
    next.classList.add("selected");
    active = target;

}


///// ///// ///// ///// ///// ///// ///// ///// ///// ///// 

const box = document.getElementById("box");

window.addEventListener("scroll", rotate);

function rotate (e) {

    box.style.transform = "rotate(" + window.pageYOffset*3 +"deg)";
    console.log(e);

}


///// ///// ///// ///// ///// ///// ///// ///// ///// ///// 

const text = document.getElementById("textarea");

text.addEventListener("keypress", expand);

let inp = [];



function expand(e) {


    

    if(e.code == 'Enter') {
        text.rows +=1;
    } else {
        if(text.value.includes("codecamp")) console.log("i love JS");
        inp.push(e.key);
        let str = inp.join("");
        console.log(str);

        

        // if (str.includes("codecamp")) {
        //     console.log("i love JS");
        //     inp = [];  
        // }
    }



    
}

///// ///// ///// ///// ///// ///// ///// ///// ///// ///// 

