import Image from "next/image";
import Link from "next/link";
import AccountSuccessfulImage from "@assets/img/account-creation-successful-img.svg";

const AccountCreationSuccessfulPopup = ({isActive}) => {
    return (
		<div
			className={
                `fixed top-0 bottom-0 left-0 z-[1024] h-full w-full bg-black/60 transition-transform duration-500 ease-linear flex flex-col place-content-center ${
                    isActive ? "translate-y-0" : "translate-y-[100%]"
                }`
            }
		>
			<div
				className={`z-[1024] w-[calc(100%-10%)] ml-[5%] lg:ml-[calc((100%-40%)/2)] min-[500px]:ml-[calc((100%-60%)/2)] min-[600px]:ml-[calc((100%-50%)/2)] space-y-6 rounded-md bg-white p-4 text-center min-[500px]:w-3/5 min-[600px]:w-1/2 lg:w-[40%] overflow-y-auto no-scrollbar`}
			>
				<div className="mx-auto text-center">
					<Image
						className="mx-auto text-center"
						src={AccountSuccessfulImage}
						height={100}
						alt=""
					/>
				</div>

				<div className="space-y-2.5 w-[90%] mx-auto">
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
				>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default AccountCreationSuccessfulPopup;
