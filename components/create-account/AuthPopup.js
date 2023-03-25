import Image from "next/image";
import Link from "next/link";
import SuccessImage from "@assets/img/account-creation-successful-img.svg";
import ErrorImage from "@assets/img/auth-error.svg";

const AuthPopup = ({ isActive, setIsActive, header, message, isError }) => {
	return (
		<div
			className={`fixed top-0 bottom-0 left-0 z-[1024] flex h-full w-full flex-col place-content-center bg-black/60 transition-transform duration-500 ease-linear ${
				isActive ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div
				className={`no-scrollbar z-[1024] my-12 ml-[5%] w-[calc(100%-10%)] space-y-6 overflow-y-auto rounded-2xl bg-white p-4 text-center min-[500px]:ml-[calc((100%-60%)/2)] min-[500px]:w-3/5 min-[600px]:ml-[calc((100%-50%)/2)] min-[600px]:w-1/2 lg:ml-[calc((100%-30%)/2)] lg:w-[30%] ${!isError && 'py-6'}`}
			>
				<div className="mx-auto text-center">
					<Image
						className="mx-auto text-center"
						src={isError ? ErrorImage : SuccessImage}
						height={80}
						alt=""
					/>
				</div>

				<div className="mx-auto w-[90%] space-y-2">
					<h3 className="text-xl font-medium text-brand-dark-purple">
						{header}
					</h3>

					<p className="text-[#7e7e7e] leading-7">{message}</p>
				</div>

				{isError && (
					<button
						className="btn block w-full bg-brand-purple text-center text-white transition duration-500 ease-in-out hover:bg-brand-dark-purple"
						type="button"
						onClick={() => {
							setIsActive(() => false);
							document.querySelector("body").style.overflow =
								"auto";
						}}
					>
						Try Again
					</button>
				)}
			</div>
		</div>
	);
};

export default AuthPopup;
