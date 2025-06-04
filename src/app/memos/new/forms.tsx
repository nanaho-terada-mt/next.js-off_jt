"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	title: z.string().min(1, "この項目は必須です"),
	content: z
		.string()
		.min(10, "この項目は10字以上で記入してください")
		.optional(),
});

type FormValues = z.infer<typeof schema>;

export default function MemoForm() {
	const [successMessage, setSuccessMessage] = useState("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onValid = (data: FormValues) => {
		console.log("入力データ：", data);
		setSuccessMessage("登録完了");
		reset();
	};

	const onInvalid = () => {
		setSuccessMessage("");
	};

	return (
		<>
			<form onSubmit={handleSubmit(onValid, onInvalid)}>
				<div>
					<p>タイトル</p>
					<input
						{...register("title")}
						placeholder="タイトルを入力"
						className="border border-gray-300 p-2 rounded"
					/>
					{errors.title && <p>{errors.title.message}</p>}
				</div>

				<div>
					<p>投稿内容</p>
					<textarea
						{...register("content")}
						placeholder="内容を入力（10字以上）"
						className="border border-gray-300 p-2 rounded"
					/>
					{errors.content && <p>{errors.content.message}</p>}
				</div>

				<button type="submit" className="bg-emerald-600 p-4 rounded-lg">
					投稿！
				</button>
			</form>
			{successMessage && <p>{successMessage}</p>}
		</>
	);
}
