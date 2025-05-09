function greet(name) {
	return `こんにちは、${name}さん！`;
}

const button = document.getElementById("button");
const nameId = document.getElementById("nameInput");
const msg = document.getElementById("message");

button.addEventListener("click", () => {
	const name = nameId.value;
	if (name === "") {
		const msgDisplay = "名前は必須だよ";
		msg.innerText = msgDisplay;
	} else {
		const msgDisplay = greet(name);
		msg.innerText = msgDisplay;
	}
});
