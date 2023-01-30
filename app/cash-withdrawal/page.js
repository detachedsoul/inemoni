"use client";

import { useRef } from "react";
import InemoniCard from "@assets/img/inemoni-card.png";
import PurpleBackgroundPOS from "@assets/img/purple-background-pos.png";
import HeroText from "@components/cash-withdrawal/HeroText";
import FooterCard from "@components/FooterCard";
import Image from "next/image";

const Index = () => {
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
			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Need to Pay with Cash? Use your Card Anywhere.
							</h2>

							<p>
								Our cards are accepted on Spotify, Netflix,
								Prime Video, Showmax! and even POS stalls.
							</p>
						</div>

						<div className="relative h-[400px] text-right lg:col-span-5 lg:h-[500px]">
							<Image
								className="h-full w-full aspect-square"
								src={InemoniCard}
								alt="Inemonoi card for cash withdrawal"
								quality={100}
								fill
							/>
						</div>
					</article>
				</section>

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-2">
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

									<i className="fr fi-rr-angle-down"></i>
								</button>

								<div className="max-h-0 space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<h2 className="font-semibold">Inemoni for Restaurants</h2>

									<div className="space-y-2">
										<p>
											Inemoni for Restaurants mobile POS
											on Square Terminal lets you cover
											more tables and deliver a better
											guest experience by taking orders
											and payments tableside.
										</p>
									</div>
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
									<span className="text-left font-bold">
										Inemoni for Retail
									</span>

									<i className="fr fi-rr-angle-down"></i>
								</button>

								<div className="max-h-0 space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<h2 className="font-semibold">Inemoni for Restaurants</h2>

									<div className="space-y-2">
										<p>
											Inemoni for Restaurants mobile POS
											on Square Terminal lets you cover
											more tables and deliver a better
											guest experience by taking orders
											and payments tableside.
										</p>
									</div>
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
									<span className="text-left font-bold">
										Inemoni Appointments
									</span>

									<i className="fr fi-rr-angle-down"></i>
								</button>

								<div className="max-h-0 space-y-1 overflow-y-hidden pt-4 pb-2 transition-all duration-[50ms] ease-linear">
									<h2 className="font-semibold">Inemoni for Restaurants</h2>

									<div className="space-y-2">
										<p>
											Inemoni for Restaurants mobile POS
											on Square Terminal lets you cover
											more tables and deliver a better
											guest experience by taking orders
											and payments tableside.
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
			</main>

			<FooterCard />
		</>
	);
};

export default Index;
