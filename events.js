let words = ["Gin and tonic", "Beer", "Wine"];

let p = document.querySelector(".random-words");
let btn = document.querySelector("button");
let img = document.querySelector("img");


btn.addEventListener("click", function() {
	let randomIndex = Math.floor(Math.random() * words.length);
	let randomWords = words[randomIndex];
	p.textContent = randomWords;
	img.setAttribute("src", "img/" + randomIndex + ".svg")
	img.style.opacity = "1";
})