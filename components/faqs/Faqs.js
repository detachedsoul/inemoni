"use client";
import { useRef } from "react";

const Faqs = () => {
	const accountSetupParent = useRef(null);
	const paymentTransactionParent = useRef(null);

	const toggleAccordion = (e, parentElement) => {

		const elementsToTraverse = parentElement.current.childNodes;

		console.log(e, elementsToTraverse);

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
		<section className="grid gap-12">
			<h1 className="header main-header">Frequently Asked Questions</h1>

			<article className="space-y-4">
				<h2 className="header secondary-header">
					Account Opening & Set-up
				</h2>

				<div
					className="grid gap-4"
					ref={accountSetupParent}
				>
					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								How long does it take to open an account?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								On average, it takes less than 3 minutes for you
								to create an account and take within an hour for
								your account to be approved once you’ve
								submitted your upgrade request; however, it can
								take up to 48 hours if we need more information
								from you.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								What documents do I need to open a
								business/personal account?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 space-y-4 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<div className="space-y-4">
								<p className="font-medium">
									Once your personal account is opened, to
									upgrade it, you’ll need:
								</p>

								<ul className="list-inside list-none space-y-2">
									<li>
										✅ A valid government ID (international
										passport, driver’s license, resident
										permit, permanent voter’s card, national
										I.D card, or NIN slip).
									</li>

									<li>
										✅ A valid proof of address (utility
										bill: electricity bill, water bill,
										waste bill), or your bank statement for
										the last 3 months. These documents
										should have the same address as your
										account on IneMoni.
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<p className="font-medium">
									For a business account, you’ll need the
									following:
								</p>

								<ul className="list-inside list-none space-y-2">
									<li>
										✅ The Certificate of Registration (CAC)
									</li>

									<li>✅ Tax Identification Number (TIN)</li>

									<li>
										✅ Director’s Page (Stamped CAC
										registration form Aka status report).
										Kindly provide all pages of your CAC
										form that carry al the names of the
										directors of your business.
									</li>

									<li>
										✅ Duly stamped Memorandum and Article
										of Association for company registration.
									</li>

									<li>
										✅ Means of Identification of the
										Director.
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								Why do you need my BVN?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								We use your BVN to verify your identity. We can
								only retrieve your name, date of birth, and
								mobile phone number attached to your BVN. We do
								not have access to any of your bank accounts,
								transaction history, or other sensitive
								financial data.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								What if I don’t know the bank connected to my
								BVN?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								If you have forgotten the bank connected to your
								BVN, you can get your BVN number by dialling
								this code{" "}
								<span className="font-bold">*565*0#</span> on
								any mobile network in Nigeria. This can only be
								done using the mobile number you registered
								with. Copy the code and visit any of your bank
								branches to check other details. as we do not
								have the authority to assist.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								My business does not have a memorandum of
								association. Can I still create an account?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								Yes, you can still create an account without an
								memorandum of association.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								How long does it take for compliance to be
								approved?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								Your documents will be approved within one hour
								if they are valid and credible.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(element, accountSetupParent)
							}
						>
							<span className="text-left">
								Why was my compliance rejected?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								If your compliance was rejected, it’s because
								the documents submitted were either invalid or
								not legible enough for us to review. Make
								corrections by re-uploading the right document
								so your account can be approved.
							</p>
						</div>
					</div>
				</div>
			</article>

			<article className="space-y-4">
				<h2 className="header secondary-header">
					Payments & Transactions
				</h2>

				<div
					className="grid gap-4"
					ref={paymentTransactionParent}
				>
					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(
									element,
									paymentTransactionParent,
								)
							}
						>
							<span className="text-left">
								How do I fund my account?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								You can transfer money directly from your other
								bank accounts into your IneMoni account. On the
								Mobile app, click on the top-up wallet to see
								your account number while on the web app, click
								on the fund wallet to see your account number.
								Copy this and make transfers from your other
								bank accounts into your IneMoni account.
							</p>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(
									element,
									paymentTransactionParent,
								)
							}
						>
							<span className="text-left">
								How do I transfer money?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 space-y-4 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								Once you are logged in, click on Send Money and
								tap on the send to bank account or send to
								recipient. Send to bank account is use to send
								money to any bank in Nigeria while send to
								recipient is use to send money to another
								IneMoni user
							</p>

							<div className="space-y-4">
								<p className="font-medium">
									For Send to Bank Account:
								</p>

								<ul className="list-inside list-disc space-y-2">
									<li>Enter Account Number</li>

									<li>
										Select Bank or Mobile Money Provider
									</li>

									<li>
										Wait for the account number to verify,
										then click next
									</li>

									<li>Enter the amount</li>

									<li>Enter Remarks then click Next</li>

									<li>
										Review all the information displayed on
										your screen
									</li>

									<li>
										Next, click transfer and confirm the
										transaction by inputting your PIN
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<p className="font-medium">
									For Send to Recipient:
								</p>

								<ul className="list-inside list-none space-y-2">
									<li>Enter the amount</li>

									<li>
										Enter the Phone number of the IneMoni
										user
									</li>

									<li>
										Click Next, review all the information
										displayed on your screen
									</li>

									<li>
										Click transfer and confirm the
										transaction by inputting your PIN
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-200">
						<button
							className="flex w-full items-center justify-between gap-4"
							type="button"
							onClick={(element) =>
								toggleAccordion(
									element,
									paymentTransactionParent,
								)
							}
						>
							<span className="text-left">
								Do I get an SMS alert for every transaction?
							</span>

							<i className="fr fi-rr-angle-down"></i>
						</button>

						<div className="max-h-0 overflow-y-hidden py-2 transition-all duration-[50ms] ease-linear">
							<p>
								Transaction alerts and all notifications are
								sent to you in-app or through a dashboard
								notification, phone number, and the email
								address used to signup on the account.
							</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Faqs;
