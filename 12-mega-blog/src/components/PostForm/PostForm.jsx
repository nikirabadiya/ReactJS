import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
	const navigate = useNavigate();
	const [isSlugEdited, setIsSlugEdited] = useState(false);
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm({
			defaultValues: {
				title: post?.title || "",
				slug: post?.slug || "",
				content: post?.content || "",
				status: post?.status || "active",
			},
		});

	const userData = useSelector((state) => state.auth.userData);

	const submit = async (data) => {
		if (post) {
			const file = data.image[0]
				? await appwriteService.uploadFile(data.image[0])
				: null;

			if (file) {
				appwriteService.deleteFile(post.featuredImage);
			}

			const dbPost = await appwriteService.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : post.featuredImage,
			});

			if (dbPost) {
				navigate(`/post/${dbPost.$id}`);
			}
		} else {
			const file = data.image[0]
				? await appwriteService.uploadFile(data.image[0])
				: null;

			if (file) {
				const fileId = file.$id;
				const dbPost = await appwriteService.createPost({
					...data,
					userId: userData.$id,
					featuredImage: file ? fileId : null,
				});
				if (dbPost) {
					navigate(`/post/${dbPost.$id}`);
				}
			}
		}
	};

	const slugTransform = useCallback((value) => {
		if (value && typeof value === "string") {
			return value
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9\s]/g, "")
				.replace(/\s+/g, "-");
		}
		return "";
	}, []);

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "title") {
				setValue("slug", slugTransform(value.title, { shouldValidate: true }));
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [watch, slugTransform, setValue, isSlugEdited]);

	return (
		<form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
			<div className="w-2/3 px-2">
				<Input
					label="Title :"
					placeholder="Title"
					className="mb-4"
					{...register("title", { required: true })}
				/>
				<Input
					label="Slug :"
					placeholder="Slug"
					className="mb-4"
					{...register("slug", { required: true })}
					onInput={(e) => {
						setIsSlugEdited(true);
						setValue("slug", slugTransform(e.currentTarget.value), {
							shouldValidate: true,
						});
					}}
				/>
				<RTE
					label="Content :"
					name="content"
					control={control}
					defaultValue={getValues("content")}
				/>
			</div>
			<div className="w-1/3 px-2">
				<Input
					label="Featured Image :"
					type="file"
					className="mb-4"
					accept="image/png, image/jpg, image/jpeg, image/gif"
					{...register("image", { required: !post })}
				/>
				{post && post.featuredImage && (
					<div className="w-full mb-4">
						<img
							src={appwriteService.getFilePreview(post.featuredImage)}
							alt={post.title}
							className="rounded-lg"
						/>
					</div>
				)}
				{post && !post.featuredImage && (
					<div className="w-full mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
						<p>No image currently set</p>
						<p className="text-xs mt-1">Upload an image to add one</p>
					</div>
				)}
				<Select
					options={["active", "inactive"]}
					label="Status"
					className="mb-4"
					{...register("status", { required: true })}
				/>
				<Button
					type="submit"
					bgColor={post ? "bg-green-500" : undefined}
					className="w-full"
				>
					{post ? "Update" : "Submit"}
				</Button>
			</div>
		</form>
	);
}

export default PostForm;
