import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { jsx as _jsx } from "react/jsx-runtime.js";
import App from "./App.jsx";

function MyApp() {
	return (
		<div>
			<h1>Custom App</h1>
		</div>
	);
}

// const ReactElement = {
// 	type: "a",
// 	props: {
// 		href: "https://google.com",
// 		target: "_blank",
// 	},
// 	children: "Click me to visit Google",
// };

const anotherElement = (
	<a href="https://google.com" target="_blank">
		Visit Google
	</a>
);

const anotherUser = "Nikita";

const reactElement = React.createElement(
	"a",
	{ href: "https://google.com", target: "_blank" },
	"Click me to visit Google",
	anotherUser
);

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	// 	<App />
	// </StrictMode>
	reactElement
);
