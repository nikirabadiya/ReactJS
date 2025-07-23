import "./App.css";
import Card from "./components/card";

function App() {
	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
				Tailwind Test
			</h1>
			<div className="flex flex-col gap-4">
				<Card title="Card Title" />
				<Card />
			</div>
		</>
	);
}

export default App;
