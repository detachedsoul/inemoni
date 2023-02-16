import BlogPost from "@components/blog/BlogPost";
import Head from "next/head";
import Layout from "@pages/_layout";

const Blog = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Blog Post</title>
				<meta
					name="description"
					content="View our blog posts"
				/>
			</Head>

			<main className="px-[5%] pt-[5%] pb-[15%] xl:px-[7%]">
				<section>
					<BlogPost />
				</section>
			</main>
		</>
	);
};

export default Blog;

Blog.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
