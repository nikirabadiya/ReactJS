import { useEffect, useState } from "react";
import ThemeBtutton from "./components/ThemeBtutton";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	const darkTheme = () => {
		setThemeMode("dark");
	};

	const lightTheme = () => {
		setThemeMode("light");
	};

	// actual change in the theme

	useEffect(() => {
		let doc = document.querySelector("html");
		doc.classList.remove("light", "dark");
		doc.classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<ThemeBtutton />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
