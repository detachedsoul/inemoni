import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "./_layout";

const Blog = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Blog</title>
				<meta
					name="description"
					content="View our blog posts"
				/>
			</Head>

			<main className="space-y-16 px-[5%] pt-[10%] pb-[15%] lg:pt-[5%] xl:px-[7%]">
				<h1 className="secondary-header text-center">
					Hello! 👋 Welcome to Our Blog
				</h1>

				<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<article className="space-y-4">
						<div className="relative h-[200px] rounded-t-lg">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block text-xl leading-normal hover:text-brand-purple">
							<Link href="/blog/1/blog-post">
								Here’s an overview of how we made magic happen
							</Link>
						</h2>

						<p className="font-medium leading-normal">
							Jan 10, 2023 &bull; 6 Min Read
						</p>
					</article>

					<article className="space-y-4">
						<div className="relative h-[200px] rounded-t-lg">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block text-xl leading-normal hover:text-brand-purple">
							<Link href="/blog/1/blog-post">
								Here’s an overview of how we made magic happen
							</Link>
						</h2>

						<p className="font-medium leading-normal">
							Jan 10, 2023 &bull; 6 Min Read
						</p>
					</article>

					<article className="space-y-4">
						<div className="relative h-[200px] rounded-t-lg">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block text-xl leading-normal hover:text-brand-purple">
							<Link href="/blog/1/blog-post">
								Here’s an overview of how we made magic happen
							</Link>
						</h2>

						<p className="font-medium leading-normal">
							Jan 10, 2023 &bull; 6 Min Read
						</p>
					</article>
				</section>
			</main>
		</>
	);
};

export default Blog;

Blog.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
