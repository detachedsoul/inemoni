import HeroText from "@components/HeroText";
import FeatureReview from "@components/FeatureReview";
import TrackExpenses from "@components/TrackExpenses";
import PushNotifications from "@components/PushNotifications";
import Partners from "@components/Partners";

const Index = () => {
    return (
        <main className="space-y-[10%]">
            <HeroText />
            <FeatureReview />
            <TrackExpenses />
            <PushNotifications />
            <Partners />
        </main>
    );
};

export default Index;