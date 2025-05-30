import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: "学ぼう！麻雀！",
};
export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<header className="bg-emerald-500 text-white rounded-lg">
					<h1>東西南北</h1>
					<nav>
						<ul>
							<li>
								<Link href="/about">白</Link>
							</li>
							<li>
								<Link href="/rulepage">發</Link>
							</li>
							<li>
								<Link href="/spacepage">中</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>{children}</main>
				<footer className="bg-red-300 rounded-lg">
					<p>©　1924　麻雀 三色同順</p>
				</footer>
			</body>
		</html>
	);
}
