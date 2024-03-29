import Link from "next/link";

const FooterCard = () => {
    return (
		<div className="my-12 mx-4 items-center rounded-[30px] bg-white px-[5%] py-[8%] text-[#262626] xl:mx-8">
			<div className="space-y-6 md:space-y-8 text-center sm:text-left">
				<p className="rounded-full py-1 px-4 border-[0.5px] border-[#262626] inline-block break-normal whitespace-nowrap max-w-full overflow-y-auto no-scrollbar">Speed and Savings Combined</p>

				<h2 className="secondary-header text-[#262626]">
					Fast, Affordable Financial Solutions, Anytime, Anywhere.
				</h2>

                <p className="sm:w-1/2">
                    With our easy-to-use tools, you can manage your finances effortlessly, without sacrificing speed or reliability.
                </p>

				<div className="flex flex-col place-items-center gap-4 sm:flex-row">
					<Link
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						href="/create-account"
					>
						Get Started
					</Link>

					<Link
						className="btn block hover:bg-[#F2F2F2] text-[#666666] transition-colors duration-300 ease-in"
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
