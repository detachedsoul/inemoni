import Head from "next/head";
import Layout from "@pages/user/_layout";
import CardOverview from "@components/user/cards/CardOverview";
import ViewCards from "@components/user/cards/ViewCards";
import BlockedCard from "@components/user/cards/BlockedCard";

const Cards = () => {
    return (
        <>
            <Head>
                <title>Inemoni Cards</title>
                <meta
                    name="description"
                    content="Get your Inemoni Card instantly"
                />
            </Head>

            <main>
                <section className="grid gap-6">
                    <h2 className="header font-medium text-2xl">
                        Inemoni Cards
                    </h2>

                    {/* <CardOverview /> */}

                    {/* <ViewCards /> */}

                    <BlockedCard />
                </section>
            </main>
        </>
    );
};

export default Cards;

Cards.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
