import Head from "next/head";
import Layout from "@pages/dashboard/_layout";
import CardOverview from "@components/dashboard/cards/CardOverview";
import ViewCards from "@components/dashboard/cards/ViewCards";

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

                    <ViewCards />
                </section>
            </main>
        </>
    );
};

export default Cards;

Cards.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
