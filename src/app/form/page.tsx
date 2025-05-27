"use client";

import { useForm } from "react-hook-form";

type FormValues = {
	name: string;
	mail: string;
	age: number;
};

export default function FormPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log("送信データ：", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<p>名前</p>
				<input
					className="border border-gray-300 p-2 rounded"
					{...register("name", {
						required: "名前は必須項目だよ",
					})}
				/>
				{errors.name && <p>{errors.name.message}</p>}
			</div>

			<div>
				<p>メールアドレス</p>
				<input
					className="border border-gray-300 p-2 rounded"
					{...register("mail", {
						required: "メールアドレスは必須項目だよ",
						pattern: {
							value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
							message: "形式が正しくないよ",
						},
					})}
				/>
				{errors.mail && <p>{errors.mail.message}</p>}
			</div>

			<div>
				<p>年齢</p>
				<input
					className="border border-gray-300 p-2 rounded"
					type="number"
					{...register("age", {
						required: "年齢は必須項目だよ",
						min: { value: 18, message: "18歳以上で入力してね" },
						max: { value: 100, message: "100歳以上で入力してね" },
					})}
				/>
				{errors.age && <p>{errors.age.message}</p>}
			</div>

			<button
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				送信
			</button>
		</form>
	);
}
