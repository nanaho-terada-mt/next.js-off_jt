const msg = document.getElementById("message");

let count = 0;
const countDisplay = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

plus.addEventListener("click", () => {
	count++;
	countDisplay.innerText = count;
});

minus.addEventListener("click", () => {
	count--;
	countDisplay.innerText = count;
});

reset.addEventListener("click", () => {
	count = 0;
	countDisplay.innerText = count;
});
