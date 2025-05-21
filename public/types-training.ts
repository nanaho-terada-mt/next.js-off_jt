const fruits: string[] = ["りんご", "バナナ", "みかん"];

type User = {
	name: string;
	age: number;
};

const user: User = {
	name: "Hanako",
	age: 22,
};

function getProfile(user: User) {
	return `${user.name} (${user.age}歳)`;
}
