document.addEventListener("DOMContentLoaded", () => {
	const loading = document.getElementById("loading");
	const usersList = document.getElementById("usersList");
	const errorMessage = document.getElementById("errorMessage");

	fetch("https://jsonplaceholder.typicode.com/users") //error用："https://jsonplaceholder.typicode.com/users1"
		.then((res) => res.json())
		.then((users) => {
			loading.style.display = "none";
			for (const user of users) {
				const li = document.createElement("li");
				li.textContent = user.name;
				usersList.appendChild(li);
			}
		})
		.catch((error) => {
			loading.style.display = "none";
			errorMessage.innerText = "データ取得に失敗";
			console.error(error);
		});
});
