import Head from "next/head";
import Layout from "@pages/user/_layout";
import ServicesOverview from "@components/user/services/ServicesOverview";

const Services = () => {
    return (
        <>
            <Head>
                <title>Services</title>
                <meta
                    name="description"
                    content="Choose one of the servies offered by Inemoni"
                />
            </Head>

            <main>
                <section>
                    <h2 className="header font-medium text-2xl mb-6">
                        Services
                    </h2>

                    <ServicesOverview />
                </section>
            </main>
        </>
    );
};

export default Services;

Services.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
