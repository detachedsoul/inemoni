import Link from "next/link";

const FooterCard = () => {
    return (
		<div className="my-12 mx-[5%] items-center rounded-3xl bg-[#121212] px-[10%] py-[8%] text-white shadow-[0px_5px_10px_rgba(10,14,39,0.05)] sm:rounded-[2.5rem] sm:px-[6%] xl:mx-[7%]">
			<div className="space-y-6 sm:w-[70%] md:space-y-8">
				<p>Effortless Finance: Speed and Savings Combined</p>

				<h2 className="secondary-header">
					Fast, Affordable Financial Solutions, Anytime, Anywhere.
				</h2>

				<div className="flex flex-wrap items-center gap-4">
					<Link
						className="btn block bg-white text-brand-black"
						href="/create-account"
					>
						Get Started
					</Link>

					<Link
						className="btn block text-white"
						href="mailto:support@inemoni.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact Support
					</Link>
				</div>
			</div>
		</div>
	);
 };

export default FooterCard;
