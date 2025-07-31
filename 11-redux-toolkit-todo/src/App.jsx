import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
	const [selectedTodo, setSelectedTodo] = useState(null);

	return (
		<>
			<h1>Learn about redux toolkit</h1>
			<AddTodo selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
			<Todos setSelectedTodo={setSelectedTodo} />
		</>
	);
}

export default App;
