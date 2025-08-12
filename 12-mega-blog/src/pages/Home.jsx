import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function Home() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const userData = useSelector((state) => state.auth.userData);
	useEffect(() => {
		if (userData) {
			appwriteService.getPosts().then((posts) => {
				if (posts && posts.documents) {
					setPosts(posts.documents);
				} else {
					setPosts([]);
				}
			});
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, [userData]);

	if (loading) {
		return (
			<div className="w-full py-8 text-center">
				<Container>
					<h1 className="text-xl font-semibold">Loading...</h1>
				</Container>
			</div>
		);
	}

	return (
		<div className="w-full py-8">
			<Container>
				{!userData ? (
					<div className="p-2 w-full text-center">
						<h1 className="text-2xl font-bold hover:text-gray-500">
							Login to read posts
						</h1>
					</div>
				) : posts.length === 0 ? (
					<div className="p-2 w-full text-center">
						<h1 className="text-2xl font-bold hover:text-gray-500">
							Create Posts
						</h1>
					</div>
				) : (
					<div className="flex flex-wrap">
						{posts.map((post) => (
							<div key={post.$id} className="p-2 w-1/4">
								<PostCard {...post} />
							</div>
						))}
					</div>
				)}
			</Container>
		</div>
	);
}

export default Home;
