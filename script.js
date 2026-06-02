document.addEventListener("DOMContentLoaded", () => {

console.log("RZ Commerce Website Loaded Successfully");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.boxShadow = "0 10px 25px rgba(212,175,55,0.4)";
});

card.addEventListener("mouseleave", () => {
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
});

});

});