const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const username = document.getElementById("username").value.trim();
	const age = document.getElementById("age").value;
	const profession = document.getElementById("profession").value;
	const introduce = document.getElementById("introduce").value.trim();

	try {
		let hasError = false;

		if (username === "") {
			document.getElementById("nameError").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("nameError").style.display = "none";
		}
		if (age === "" || age < 18) {
			document.getElementById("ageError").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("ageError").style.display = "none";
		}

		if (hasError) {
			throw new Error("エラー発生！");
		}

		const data = {
			name: username,
			age: age,
			profession: profession,
			introduce: introduce,
		};

		const jsonData = JSON.stringify(data, null, 2);

		console.log(jsonData);
		alert("送信完了！");
	} catch (error) {
		console.error("バリデーションチェック中…", error.message);
	}
});
