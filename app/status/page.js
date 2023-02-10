import StatusIndicator from "@components/status/StatusIndicator";
import FooterBanner from "@components/FooterBanner";

const Index = () => {
    return (
		<>
			<main className="pt-[10%] pb-[15%] px-[5%] xl:px-[7%]">
				<StatusIndicator />
			</main>

			<FooterBanner />
		</>
	);
};

export default Index;
