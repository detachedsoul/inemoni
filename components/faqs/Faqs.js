"use client";
import { useRef } from "react";

const Faqs = () => {
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
		<div className="grid gap-8">
			<h1 className="header main-header">Frequently Asked Questions</h1>

			<div
				className="grid gap-4"
				ref={parentElement}
			>
				<div className="border-b border-gray-200">
					<button
						className="flex items-center gap-4 justify-between w-full"
						type="button"
						onClick={(element) => toggleAccordion(element)}
					>
						<span className="text-left">
							How do I open an account
						</span>

						<i className="fr fi-rr-angle-down"></i>
					</button>

					<div className="py-2 max-h-0 overflow-y-hidden transition-all ease-linear duration-[50ms]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat
						</p>
					</div>
				</div>

				<div className="border-b border-gray-200">
					<button
						className="flex items-center gap-4 justify-between w-full"
						type="button"
						onClick={(element) => toggleAccordion(element)}
					>
						<span className="text-left">
							What documents are required to complete my
							registration?
						</span>

						<i className="fr fi-rr-angle-down"></i>
					</button>

					<div className="py-2 max-h-0 overflow-y-hidden transition-all ease-linear duration-[50ms]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat
						</p>
					</div>
				</div>

				<div className="border-b border-gray-200">
					<button
						className="flex items-center gap-4 justify-between w-full"
						type="button"
						onClick={(element) => toggleAccordion(element)}
					>
						<span className="text-left">
							What do I do after registering?
						</span>

						<i className="fr fi-rr-angle-down"></i>
					</button>

					<div className="py-2 max-h-0 overflow-y-hidden transition-all ease-linear duration-[50ms]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
