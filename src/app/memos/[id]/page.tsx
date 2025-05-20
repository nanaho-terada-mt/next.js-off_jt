export const metadata = {
	title: "メモIDページ",
};

const memoElement: Record<string, { title: string; content: string }> = {
	"1": { title: "買い物リスト", content: "うどん、バナナ、お菓子" },
	"2": { title: "ダイビングスポット", content: "伊江島、徳之島、白浜" },
	"3": { title: "好きな役牌", content: "一気通貫、三色同順、四暗刻" },
};

type Props = {
	params: {
		id: string;
	};
};

export default function MemoDetailPage({ params }: Props) {
	const { id } = params;
	const memo = memoElement[id];

	return (
		<div>
			<h2>{memo.title}</h2>
			<p>{memo.content}</p>
		</div>
	);
}
