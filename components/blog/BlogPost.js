import Image from "next/image";
import FacebookLogo from "@assets/img/facebook.svg";
import TwitterLogo from "@assets/img/twitter.svg";
import InstagramLogo from "@assets/img/instagram.svg";
import Link from "next/link";

const BlogPost = () => {
    return (
		<article className="space-y-8">
            <div className="space-y-3">
                <h1 className="secondary-header leading-tight">
                    Here’s an overview of how we made magic happen
                </h1>

                <p className="font-medium text-[#666666]">
                    Jan 10, 2023 &bull; 6 Min Read
                </p>
            </div>

			<div className="relative h-[200px] w-full rounded-lg sm:h-[300px] lg:h-[400px]">
				<Image
					className="block w-full rounded-lg object-cover object-center"
					src="/img/blog-img-1.png"
					alt="Here’s an overview of how we made magic happen"
					title="Here’s an overview of how we made magic happen"
					quality={100}
					fill
					priority
				/>
			</div>

			<div className="space-y-12">
				<div className="grid gap-8 sm:grid-cols-12">
					<div className="sm:col-span-4">
						<div className="sm:space-y-8 sm:sticky sm:top-[18%]">
							<div className="flex items-center gap-4">
								<Image
									className="aspect-square rounded-full object-cover object-center"
									src="/img/blogAuthor.png"
									alt="Here’s an overview of how we made magic happen"
									title="Here’s an overview of how we made magic happen"
									quality={100}
									height={50}
									width={50}
								/>

								<div className="leading-normal">
									<h3 className="header leading-normal">
										Praise Dominic
									</h3>
									<small className="inline-block leading-normal text-[#666666]">
										Finance Consultant
									</small>
								</div>
							</div>

							<div className="hidden sm:block sm:space-y-3">
								<h3 className="header">Share This Article</h3>

								<div className="flex flex-wrap items-center gap-4">
									<Link
										href="/"
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-full bg-[#6912aa]/10 py-2 px-[0.7rem]"
										title="Share on Facebook"
									>
										<Image
											src={FacebookLogo}
											alt="Share on Facebook"
											quality={100}
										/>
									</Link>

									<Link
										href="/"
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-full bg-[#6912aa]/10 p-[0.6rem]"
										title="Share on Twitter"
									>
										<Image
											src={TwitterLogo}
											alt="Share on Twiiter"
											quality={100}
										/>
									</Link>

									<Link
										href="/"
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-full bg-[#6912aa]/10 p-2"
										title="Share on Instagram"
									>
										<Image
											src={InstagramLogo}
											alt="Share on Instagram"
											quality={100}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-4 sm:col-span-8">
						<p className="text-[#666666]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>

						<p className="text-[#666666]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default BlogPost;
