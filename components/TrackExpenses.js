import Image from "next/image";
import Link from "next/link";
import ColorBlock from "@assets/img/color-block.svg";

const TrackExpenses = () => {
    return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-[5%] lg:gap-12 xl:px-[10%]">
			<div className="space-y-4 order-last sm:order-first">
				<h2 className="header-secondary font-semibold text-brand-dark-purple">
					Track expenses and manage funds with ease.
				</h2>

				<p>
					Track all orders, invoices, loans, savings, transactions and
					even monitor your business on one screen. Get detailed
					reports for audits and accounting.
				</p>

				<Link
					className="bg-brand-black hover:bg-brand-dark-purple text-white btn inline-block transition-colors duration-300 ease-in"
					href="/"
				>
					Get Started
				</Link>
			</div>

			<Image className="order-first sm:order-last" src={ColorBlock} alt="" />
		</section>
	);
};

export default TrackExpenses;