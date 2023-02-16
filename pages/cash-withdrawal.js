"use client";

import { useRef } from "react";
import InemoniCard from "@assets/img/inemoni-card.png";
import PurpleBackgroundPOS from "@assets/img/purple-background-pos.png";
import HeroText from "@components/cash-withdrawal/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import Head from "next/head";
import Layout from "./_layout";

const CashWithdrawal = () => {
	const parentElement = useRef(null);

	const toggleAccordion = (e) => {
		const elementsToTraverse = parentElement.current.childNodes;

		elementsToTraverse.forEach((elements) => {
			if (elements.firstElementChild !== e.currentTarget) {
				if (
					elements.lastElementChild.classList.contains("max-h-full")
				) {
					elements.lastElementChild.classList.replace(
						"max-h-full",
						"max-h-0",
					);

					elements.firstElementChild.lastElementChild.classList.replace(
						"fi-rr-angle-up",
						"fi-rr-angle-down",
					);
				}

				elements.firstElementChild.firstElementChild.classList.remove(
					"font-bold",
				);
			} else {
				if (
					elements.lastElementChild.classList.contains("max-h-full")
				) {
					elements.lastElementChild.classList.replace(
						"max-h-full",
						"max-h-0",
					);

					e.currentTarget.lastElementChild.classList.replace(
						"fi-rr-angle-up",
						"fi-rr-angle-down",
					);

					e.currentTarget.firstElementChild.classList.remove(
						"font-bold",
					);
				} else {
					elements.lastElementChild.classList.replace(
						"max-h-0",
						"max-h-full",
					);

					e.currentTarget.lastElementChild.classList.replace(
						"fi-rr-angle-down",
						"fi-rr-angle-up",
					);

					e.currentTarget.firstElementChild.classList.add(
						"font-bold",
					);
				}
			}
		});
	};

	return (
		<>
			<Head>
				<title>Inemoni | Cash Withdrawal</title>
				<meta
					name="description"
					content="Cash withdrawal feature of Inemoni"
				/>
			</Head>

			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 lg:grid-cols-12">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="secondary-header">
								Say Goodbye to Cash Hassles, Hello to Seamless
								Payments with Your Card Anywhere.
							</h2>

							<p>
								Enjoy seamless access to your favorite
								entertainment and payments with our cards on
								Spotify, Netflix, Prime Video, Showmax, and
								more.
							</p>
						</div>

						<div className="relative mx-auto h-[400px] w-3/5 sm:w-4/5 lg:col-span-5 sm:ml-auto sm:mr-0 lg:h-[500px]">
							<Image
								className="h-full w-full"
								src={InemoniCard}
								alt="Inemonoi card for cash withdrawal"
								quality={100}
								fill
							/>
						</div>
					</article>
				</section>

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 sm:grid-cols-2">
						<Image
							className="h-full w-full"
							src={PurpleBackgroundPOS}
							alt="Inemonoi POS"
							quality={100}
						/>

						<div
							className="grid gap-4"
							ref={parentElement}
						>
							<div className="border-b border-gray-200">
								<button
									className="flex w-full items-center justify-between gap-4"
									type="button"
									onClick={(element) =>
										toggleAccordion(element)
									}
								>
									<span className="text-left font-bold">
										Inemoni POS
									</span>

									<i className="fi-rr-angle-up"></i>
								</button>

								<div className="max-h-full space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<p>
										Streamline your business with Inemoni
										POS Terminal - effortless transactions,
										seamless experience, and unmatched
										convenience.
									</p>
								</div>
							</div>

							<div className="border-b border-gray-200">
								<button
									className="flex w-full items-center justify-between gap-4"
									type="button"
									onClick={(element) =>
										toggleAccordion(element)
									}
								>
									<span className="text-left">
										Inemoni for Retail
									</span>

									<i className="fi-rr-angle-down"></i>
								</button>

								<div className="max-h-0 space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<p>
										Empower your retail business with
										Inemoni’s Fintech Solutions - effortless
										payments, seamless transactions, and
										unmatched financial control.
									</p>
								</div>
							</div>

							<div className="border-b border-gray-200">
								<button
									className="flex w-full items-center justify-between gap-4"
									type="button"
									onClick={(element) =>
										toggleAccordion(element)
									}
								>
									<span className="text-left">
										Inemoni Appointments
									</span>

									<i className="fi-rr-angle-down"></i>
								</button>

								<div className="max-h-0 space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<p>
										Transform your appointments with
										Inemoni’s Fintech Solutions - effortless
										payments, seamless scheduling, and
										unmatched convenience.
									</p>
								</div>
							</div>
						</div>
					</article>
				</section>
			</main>

			<FooterCard />
			<FooterBanner />
		</>
	);
};

export default CashWithdrawal;

CashWithdrawal.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
