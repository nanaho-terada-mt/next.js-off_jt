import { LinkButton } from "./components/LinkButton";

export default function Page() {
	const data = new Date().toLocaleDateString("Ja-jp");
	const message = "めっちゃいいやん！";

	return (
		<>
			<p>今日は、{data} です！</p>
			<p>{message}</p>
			<LinkButton />
		</>
	);
}
