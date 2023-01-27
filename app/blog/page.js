import Image from "next/image";
import Link from "next/link";

const Index = () => {
	return (
		<>
			<main className="space-y-16 px-[5%] pt-[10%] pb-[15%] lg:pt-[5%] xl:px-[7%]">
				<h1 className="secondary-header text-center">
					Hello! 👋 Welcome to Our Blog
				</h1>

				<section className="grid gap-8 lg:grid-cols-3">
					<article className="space-y-4">
						<div className="relative h-[250px] rounded-t-lg lg:h-[200px]">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block hover:text-brand-purple text-xl leading-normal">
							<Link
								href="/blog/1/blog-post"
							>
								Here’s an overview of how we made magic happen
							</Link>
						</h2>

						<p className="font-medium leading-normal">
							Jan 10, 2023 &bull; 6 Min Read
						</p>
					</article>

					<article className="space-y-4">
						<div className="relative h-[250px] rounded-t-lg lg:h-[200px]">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block hover:text-brand-purple text-xl leading-normal">
							<Link
								href="/blog/1/blog-post"
							>
								Here’s an overview of how we made magic happen
							</Link>
						</h2>

						<p className="font-medium leading-normal">
							Jan 10, 2023 &bull; 6 Min Read
						</p>
					</article>

					<article className="space-y-4">
						<div className="relative h-[250px] rounded-t-lg lg:h-[200px]">
							<Image
								className="aspect-square rounded-t-lg object-cover object-center"
								src="/img/blogImage.png"
								alt="Here’s an overview of how we made magic happen"
								title="Here’s an overview of how we made magic happen"
								quality={100}
								fill
							/>
						</div>

						<h2 className="header inline-block hover:text-brand-purple text-xl leading-normal">
							<Link
								href="/blog/1/blog-post"
							>
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

export default Index;
