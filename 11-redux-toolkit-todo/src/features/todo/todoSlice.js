import { createSlice, nanoid } from "@reduxjs/toolkit";

const getLocalTodos = () => {
	const saved = localStorage.getItem("todos");
	return saved ? JSON.parse(saved) : [];
};

const initialState = {
	todos: getLocalTodos(),
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo
			);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
