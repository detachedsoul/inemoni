const HeroText = () => {
	return (
		<div className="grid gap-8 md:grid-cols-12 items-center place-content-center text-center px-[5%] lg:gap-12 md:pt-[10%] xl:px-[10%] py-[20%] md:pb-0 md:text-left">
			<div className="space-y-4 md:col-span-7">
				<h1 className="header">
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
