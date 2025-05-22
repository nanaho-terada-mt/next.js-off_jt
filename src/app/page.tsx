import Link from "next/link";

export const metadata = {
	title: "トップ | メモアプリ",
};

export default function HomePage() {
	return (
		<>
			<h1>ようこそ！これはメモアプリです。</h1>
			<nav>
				<Link href="/memos">メモ一覧を見る</Link>
			</nav>
		</>
	);
}
