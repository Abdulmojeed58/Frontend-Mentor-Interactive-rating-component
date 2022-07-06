var container = document.querySelector(".container");
var containerThankYou = document.querySelector(".container-thank-you");
var submit = document.querySelector("button");
var selected = document.querySelector(".selected");
var button = document.querySelectorAll(".button");
const score = document.querySelector(".score");
let starScore = ""

submit.addEventListener("click", function() {
    if(!starScore) return
    container.classList.add("none");
    score.textContent = starScore;
    containerThankYou.classList.remove("none");
});

const all = document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('button')){
        starScore = e.target.innerHTML
        starScore.innerHTML = starScore
    }
})
