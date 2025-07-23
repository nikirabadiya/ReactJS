import { useState } from "react";

function App() {
	const [bgColor, setbgColor] = useState("olive");
	return (
		<div
			className="h-screen w-screen duration-200"
			style={{ backgroundColor: bgColor }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
				<div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
						style={{ backgroundColor: "red" }}
						onClick={() => setbgColor("red")}
					>
						Red
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
						style={{ backgroundColor: "green" }}
						onClick={() => setbgColor("green")}
					>
						Green
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
						style={{ backgroundColor: "blue" }}
						onClick={() => setbgColor("blue")}
					>
						Blue
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
