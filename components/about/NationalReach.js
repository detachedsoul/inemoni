"use client";

import Globe from "@assets/img/globe.png";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const NationalReach = () => {
	const globe = useRef(null);
	const container = useRef(null);
	let [height, setHeight] = useState("100%");
	let [width, setWidth] = useState("100%");

	useEffect(() => {
		// if (typeof window !== "undefined") {
		// }
		window.addEventListener("resize", () => {
			setHeight(() => (height = container.current.offsetHeight));
			setWidth(() => (width = container.current.offsetWeight));
		});

		console.log(height);
		console.log("Hello" + container.current.clientHeight);
	}, []);

	if (typeof window !== "undefined") {
		useLayoutEffect(() => {
			setHeight(() => (height = container.current.offsetHeight));
			setWidth(() => (width = container.current.offsetWeight));
			// window.addEventListner("resize", () => {
			// });

			// console.log(height);
			// console.log("Hello" + container.current.clientHeight);
		}, []);
	}

	return (
		<section
			className="space-y-12 relative px-[5%] xl:px-[10%] pb-[10%]"
			ref={container}
		>
			<h2 className="header text-5xl">
				Our <span className="text-brand-purple">national</span> reach
			</h2>

			<div className="space-y-8 border-l border-dashed border-brand-black sm:w-3/5">
				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						Cash Withdrawal
					</h3>

					<p>Withdraw cash at our agents outlet closest to you.</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						Bills Payment
					</h3>

					<p>
						Bill payments per day, peaking at 231 requests per
						second.
					</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						500k+ Payments Daily
					</h3>

					<p>Average number of payments processed daily.</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						Standard Payment Options
					</h3>

					<div className="grid grid-cols-2 gap-2">
						<p>Debit & Credit Cards</p>

						<p>Bank Account</p>

						<p>Mobile Money</p>

						<p>POS</p>

						<p>Mobile App</p>

						<p>VISA QR</p>

						<p>Bank Transfer</p>

						<p>USSD</p>
					</div>
				</div>
			</div>

			<div
				className={`absolute -top-24 -bottom-24 right-0 w-3/5 max-h-[${height}px] h-[${height}px] hidden not-sr-only sm:block -z-50`}
			>
				<Image
					className="h-full w-full aspect-square object-contain"
					src={Globe}
					alt=""
					priority={true}
					quality={100}
				/>
			</div>
		</section>
	);
};

export default NationalReach;
