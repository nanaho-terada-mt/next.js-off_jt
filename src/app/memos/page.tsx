import Link from "next/link";
import { memo } from "react";

export const metadata = {
	title: "メモ一覧ページ",
};

const memoElement = [
	{ id: 1, title: "買い物リスト" },
	{ id: 2, title: "ダイビングスポット" },
	{ id: 3, title: "好きな役牌" },
];

export default function MemosPage() {
	return (
		<div>
			<h1>メモ一覧ページ</h1>
			<ul>
				{memoElement.map((memo) => (
					<li key={memo.id}>
						<Link href={`/memos/${memo.id}`}>{memo.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
