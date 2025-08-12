import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components";

function AllPosts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		appwriteService.getPosts([]).then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);

	return (
		<div className="w-full py-8">
			<Container>
				{posts.length === 0 ? (
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

export default AllPosts;
