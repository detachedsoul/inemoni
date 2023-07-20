import Head from "next/head";
import Layout from "@pages/user/_layout";
import AccountManager from "@components/user/support/AccountManager";

const Support = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Customer Support</title>
                <meta
                    name="description"
                    content="Get in touch with your manager for any assistance"
                />
            </Head>

            <main>
                <section>
                    <h2 className="header font-normal text-2xl mb-6">
                        Support
                    </h2>

                    <AccountManager />
                </section>
            </main>
        </>
    );
};

export default Support;

Support.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
