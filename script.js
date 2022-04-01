var container = document.querySelector(".container");
var containerThankYou = document.querySelector(".container-thank-you");
var submit = document.querySelector("button");
var selected = document.querySelector(".selected");
var button = document.querySelectorAll(".button");
const score = document.querySelector(".score");
let starScore = ""

submit.addEventListener("click", function() {
    container.classList.add("none");
    score.textContent = starScore;
    containerThankYou.classList.remove("none");
});

button.forEach(btn => btn.addEventListener("click", 
function mjay(event) {
    button.forEach(btn => {
        btn.classList.remove("active")
    });
    if (event.target.classList.contains("button")) {
        event.target.classList.add("active")
    } else {
        event.target.parentElement.classList.add("active")
    }
    starScore = event.target.textContent;
}
));
