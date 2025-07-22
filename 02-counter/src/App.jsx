import { useState } from "react";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(5);
	// let counter = 5;
	const addValue = () => {
		setCounter(counter + 1);
	};
	const removeValue = () => {
		if (counter > 0) setCounter(counter - 1);
	};
	return (
		<>
			<h1>Testing the app</h1>
			<h2>Counter value: {counter}</h2>
			<button onClick={addValue}>Add value</button>
			<br />
			<button onClick={removeValue}>Remove value</button>
			<p>Footer</p>
		</>
	);
}

export default App;
