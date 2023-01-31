import Link from "next/link";

const FooterCard = () => {
    return (
		<div className="bg-[#121212] px-[10%] py-[8%] rounded-3xl items-center sm:px-[6%] sm:rounded-[2.5rem] text-white shadow-[0px_5px_10px_rgba(10,14,39,0.05)] my-12 mx-[5%] xl:mx-[7%]">
			<div className="space-y-6 md:space-y-8 sm:w-[70%]">
				<p>Send money to anyone</p>

				<h2 className="header text-2xl sm:text-5xl leading-10 sm:text-[3.125rem] sm:leading-[4.063rem]">
					Technology To Keep Our Services{" "}
					<span className="text-brand-orange">99% Uptime</span>
				</h2>

				<div className="flex flex-wrap items-center gap-4">
					<Link
						className="bg-white text-brand-black btn block"
						href="/"
					>
						Get Started
					</Link>

					<Link
						className="text-white btn block"
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
