import Test from "./test";

function App() {
	const userName = "test";
	return (
		<>
			<Test />
			<p>test para {userName}</p>
		</>
	);
}

export default App;
