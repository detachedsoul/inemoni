import Link from "next/link";
import Image from "next/image";
import InfoIcon from "@assets/img/info-icon.svg";

const BVNForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 md:shadow-none lg:w-1/2"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Hi, Welcome</h1>

					<p className="text-base">
						Create an account with us and enjoy your life!
					</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-0.5"
						htmlFor="bvn"
					>
						<span className="font-bold text-brand-dark-purple">
							BVN
						</span>

						<input
							type="text"
							name="bvn"
							id="bvn"
							className="input-form"
							placeholder="Enter BVN number"
						/>
					</label>

					<p className="text-sm font-medium text-brand-dark-purple">
						Tip: Dial *565*0# on your registered number to get your
						BVN
					</p>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="submit"
					>
						Validate Details
					</button>
				</div>

				<div className="space-y-8">
					<p className="text-center">
                        <span className="mr-4">
                            <Image className="inline" src={InfoIcon} alt="" height={20} width={20} quality={100} />
                        </span>

						<Link
							className="text-center font-normal"
							href="/legal/faqs"
						>
							Why do we need your BVN?
						</Link>
					</p>

					<p className="text-center text-[#979797]">
						Already have an account?{" "}
						<Link
							className="font-medium text-brand-dark-purple"
							href="/sign-in"
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</form>
	);
};

export default BVNForm;
