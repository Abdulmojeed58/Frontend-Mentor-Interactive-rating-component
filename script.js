var container = document.querySelector(".container");
var containerThankYou = document.querySelector(".container-thank-you");
var submit = document.querySelector("button");
var selected = document.querySelector(".selected");
var button = document.querySelectorAll(".button");

button.forEach(button => button.addEventListener("click", function() {
    submit.addEventListener("click", function() {
        container.classList.add("active");
        containerThankYou.classList.remove("none");
        selected.appendChild(document.createTextNode("You selected " + button.innerHTML + " out of 5"));
        
    })
}))

// submit.addEventListener("click", function() {
//     container.classList.add("active");
//     containerThankYou.classList.remove("none");
//     selected.appendChild(document.createTextNode("You selected 4 out of 5"));
    
// })