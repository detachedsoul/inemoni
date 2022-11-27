import HeroText from "@components/HeroText";
import FeatureReview from "@components/FeatureReview";
import TrackExpenses from "@components/TrackExpenses";
import PushNotifications from "@components/PushNotifications";
import GetStarted from "@components/GetStarted";

const Index = () => {
    return (
        <main className="p-[5%] space-y-[10%]">
            <HeroText />
            <FeatureReview />
            <TrackExpenses />
            <PushNotifications />
            <GetStarted />
        </main>
    );
};

export default Index;