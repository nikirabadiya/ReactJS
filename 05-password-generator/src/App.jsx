import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charsAllowed, setCharsAllowed] = useState(false);
	const [password, setPassword] = useState("");

	// useRef hook
	const passRef = useRef(null);

	const passGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "0123456789";
		if (charsAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str[char];
		}
		setPassword(pass);
	}, [length, numberAllowed, charsAllowed, setPassword]);

	const copyPwdToClip = useCallback(() => {
		passRef.current?.select();
		passRef.current?.setSelectionRange(0, 101);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passGenerator();
	}, [length, numberAllowed, charsAllowed, passGenerator]);

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
				<h1 className="text-2xl text-center text-white mb-3">
					Password Generator
				</h1>
				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 bg-white "
						placeholder="Password"
						readOnly
						ref={passRef}
					/>
					<button
						className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
						onClick={copyPwdToClip}
					>
						Copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={100}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label>Length: {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							id="numberInput"
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
							className="cursor-pointer"
						/>
						<label className="cursor-pointer" htmlFor="numberInput">
							Numbers
						</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charsAllowed}
							id="characterInput"
							onChange={() => {
								setCharsAllowed((prev) => !prev);
							}}
							className="cursor-pointer"
						/>
						<label className="cursor-pointer" htmlFor="characterInput">
							Characters
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
