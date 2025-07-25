import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState({});
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/nikirabadiya")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);
	return (
		<>
			<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
				Github Followers: {data.followers}
			</div>
			<div className="text-center w-100 h-100">
				<img src={data.avatar_url} alt="data.name" />
			</div>
		</>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/nikirabadiya");
	return response.json();
};
