import HeroText from "@components/HeroText";
import FeatureReview from "@components/FeatureReview";
import TrackExpenses from "@components/TrackExpenses";
import PushNotifications from "@components/PushNotifications";
import GetStarted from "@components/GetStarted";
import Partners from "@components/Partners";

const Index = () => {
    return (
        <main className="space-y-[10%]">
            <HeroText />
            <FeatureReview />
            <TrackExpenses />
            <PushNotifications />
            <GetStarted />
            <Partners />
        </main>
    );
};

export default Index;