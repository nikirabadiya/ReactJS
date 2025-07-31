import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ selectedTodo, setSelectedTodo }) {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		e.preventDefault();
		if (!input) return;

		if (selectedTodo) {
			dispatch(updateTodo({ id: selectedTodo.id, text: input }));
			setSelectedTodo(null);
		} else {
			dispatch(addTodo(input));
		}
		setInput("");
	};

	useEffect(() => {
		if (selectedTodo) {
			setInput(selectedTodo.text);
		}
	}, [selectedTodo]);

	return (
		<form className="space-x-3 mt-12" onSubmit={addTodoHandler}>
			<input
				type="text"
				className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				placeholder="Enter a Todo..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className={`text-white ${
					selectedTodo
						? "bg-green-500 hover:bg-green-600"
						: "bg-indigo-500 hover:bg-indigo-600"
				} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
			>
				{selectedTodo ? "Update Todo" : "Add Todo"}
			</button>
		</form>
	);
}

export default AddTodo;
