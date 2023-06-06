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

			<main className="space-y-10 px-[5%] pt-[10%] pb-[15%] lg:pt-[5%] xl:px-[7%]">
				<h1 className="secondary-header">
                    Welcome to our blog
				</h1>

				<section className="space-y-8">
                    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="space-y-4 lg:col-span-2">
                            <div className="relative h-[200px] rounded-lg lg:h-[300px]">
                                <Image
                                    className="aspect-square rounded-lg object-cover object-center"
                                    src="/img/blog-img-1.png"
                                    alt="Here’s an overview of how we made magic happen"
                                    title="Here’s an overview of how we made magic happen"
                                    quality={100}
                                    fill
                                />
                            </div>

                            <div className="space-y-2">
                                <h2 className="header inline-block text-2xl hover:text-brand-purple">
                                    <Link href="/blog/1/blog-post">
                                        Here’s an overview of how we made magic happen
                                    </Link>
                                </h2>

                                <p className="text-[#666666]">
                                    Nulla amet id arcu semper. Eget egestas mauris in tellus sed egestas eget tellus sit. Congue dolor est.
                                </p>
                            </div>
                        </article>

                        <article className="space-y-4">
                            <div className="relative h-[200px] rounded-lg lg:h-[300px]">
                                <Image
                                    className="aspect-square rounded-lg object-cover object-center"
                                    src="/img/blog-img-2.png"
                                    alt="Here’s an overview of how we made magic happen"
                                    title="Here’s an overview of how we made magic happen"
                                    quality={100}
                                    fill
                                />
                            </div>

                            <div className="space-y-2">
                                <h2 className="header inline-block text-2xl hover:text-brand-purple">
                                    <Link href="/blog/1/blog-post">
                                        Here’s an overview of how we made magic happen
                                    </Link>
                                </h2>

                                <p className="text-[#666666]">
                                    Nulla amet id arcu semper. Eget egestas mauris in tellus sed egestas eget tellus sit. Congue dolor est.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="space-y-4">
                            <div className="relative h-[200px] rounded-lg">
                                <Image
                                    className="aspect-square rounded-lg object-cover object-center"
                                    src="/img/blog-img-3.png"
                                    alt="Here’s an overview of how we made magic happen"
                                    title="Here’s an overview of how we made magic happen"
                                    quality={100}
                                    fill
                                />
                            </div>

                            <div className="space-y-2">
                                <h2 className="header inline-block text-2xl hover:text-brand-purple">
                                    <Link href="/blog/1/blog-post">
                                        Here’s an overview of how we made magic happen
                                    </Link>
                                </h2>

                                <p className="text-[#666666]">
                                    Nulla amet id arcu semper. Eget egestas mauris in tellus sed egestas eget tellus sit. Congue dolor est.
                                </p>
                            </div>
                        </article>

                        <article className="space-y-4">
                            <div className="relative h-[200px] rounded-lg">
                                <Image
                                    className="aspect-square rounded-lg object-cover object-center"
                                    src="/img/blog-img-4.png"
                                    alt="Here’s an overview of how we made magic happen"
                                    title="Here’s an overview of how we made magic happen"
                                    quality={100}
                                    fill
                                />
                            </div>

                            <div className="space-y-2">
                                <h2 className="header inline-block text-2xl hover:text-brand-purple">
                                    <Link href="/blog/1/blog-post">
                                        Here’s an overview of how we made magic happen
                                    </Link>
                                </h2>

                                <p className="text-[#666666]">
                                    Nulla amet id arcu semper. Eget egestas mauris in tellus sed egestas eget tellus sit. Congue dolor est.
                                </p>
                            </div>
                        </article>

                        <article className="space-y-4">
                            <div className="relative h-[200px] rounded-lg">
                                <Image
                                    className="aspect-square rounded-lg object-cover object-center"
                                    src="/img/blog-img-5.png"
                                    alt="Here’s an overview of how we made magic happen"
                                    title="Here’s an overview of how we made magic happen"
                                    quality={100}
                                    fill
                                />
                            </div>

                            <div className="space-y-2">
                                <h2 className="header inline-block text-2xl hover:text-brand-purple">
                                    <Link href="/blog/1/blog-post">
                                        Here’s an overview of how we made magic happen
                                    </Link>
                                </h2>

                                <p className="text-[#666666]">
                                    Nulla amet id arcu semper. Eget egestas mauris in tellus sed egestas eget tellus sit. Congue dolor est.
                                </p>
                            </div>
                        </article>
                    </div>
				</section>
			</main>
		</>
	);
};

export default Blog;

Blog.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
