import Image from "next/image";
import Link from "next/link";
import AccountSuccessfulImage from "@assets/img/account-creation-successful-img.svg";

const AccountCreationSuccessfulPopup = ({isActive}) => {
    return (
		<div
			className={`fixed top-0 bottom-0 left-0 z-[1024] flex h-full w-full flex-col place-content-center bg-black/60 transition-transform duration-500 ease-linear ${
				isActive ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div
				className={`no-scrollbar z-[1024] my-12 ml-[5%] w-[calc(100%-10%)] space-y-6 overflow-y-auto rounded-md bg-white px-4 py-6 text-center min-[500px]:ml-[calc((100%-60%)/2)] min-[500px]:w-3/5 min-[600px]:ml-[calc((100%-50%)/2)] min-[600px]:w-1/2 lg:ml-[calc((100%-40%)/2)] lg:w-[40%]`}
			>
				<div className="mx-auto text-center">
					<Image
						className="mx-auto text-center"
						src={AccountSuccessfulImage}
						height={100}
						alt=""
					/>
				</div>

				<div className="mx-auto w-[90%] space-y-2.5">
					<h3 className="text-xl font-medium">
						Account Created Successfully
					</h3>

					<p className="text-[#7e7e7e]">
						Congratulations! You have successfully opened an account
						with Inemoni and can now access all of the features and
						benefits of our platform.
					</p>
				</div>

				<Link
					className="btn block bg-brand-purple text-center text-white transition duration-500 ease-in-out hover:bg-brand-dark-purple"
					href="/sign-in"
					onClick={() => document.querySelector("body").style.overflow = "auto"}
				>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default AccountCreationSuccessfulPopup;
