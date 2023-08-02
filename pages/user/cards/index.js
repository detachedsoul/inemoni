import Head from "next/head";
import Layout from "@pages/user/_layout";
import CardOverview from "@components/user/cards/CardOverview";
import ViewCards from "@components/user/cards/ViewCards";
import useUser from "@store/useUser";

const Cards = () => {
    const userDetails = useUser((state) => state.userDetails);

    return (
        <>
            <Head>
                <title>Dashboard | Inemoni Cards</title>
                <meta
                    name="description"
                    content="Get your Inemoni Card instantly"
                />
            </Head>

            <main>
                <section className="grid gap-6">
                    <h2 className="header font-normal text-2xl">
                        Inemoni Cards
                    </h2>

                    {userDetails && Object.keys(userDetails).length < 1 ? (
                        <div className="bg-[#D9D9D9] p-3 h-[300px] rounded-[20px] animate-pulse lg:h-[350px]"></div>
                    ) : (
                        <>
                            {userDetails.hasVirtualCard && <ViewCards />}

                            {!userDetails.hasVirtualCard && <CardOverview />}
                        </>
                    )}
                </section>
            </main>
        </>
    );
};

export default Cards;

Cards.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
