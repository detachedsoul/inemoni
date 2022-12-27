const HeroText = () => {
	return (
		<div className="grid gap-8 md:grid-cols-12 items-center place-content-center px-[5%] lg:gap-12 md:pt-[10%] xl:px-[7%] py-[20%] md:pb-0">
			<div className="space-y-4 md:col-span-7">
				<h1 className="header text-4xl leading-[3rem] sm:text-[3.125rem] sm:leading-[4.063rem]">
					<span className="text-brand-purple">
						Endless possibilities
					</span>{" "}
					for every customer.
				</h1>
			</div>
		</div>
	);
};

export default HeroText;
