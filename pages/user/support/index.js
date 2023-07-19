import Head from "next/head";
import Layout from "@pages/user/_layout";
import AccountManager from "@components/user/support/AccountManager";

const Support = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Services</title>
                <meta
                    name="description"
                    content="Choose one of the servies offered by Inemoni"
                />
            </Head>

            <main>
                <section>
                    <h2 className="header font-medium text-2xl mb-6">
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
