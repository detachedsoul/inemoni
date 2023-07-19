import Head from "next/head";
import Layout from "@pages/user/_layout";
import TransferDestination from "@components/user/transfer/TransferDestination";

const Transfer = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Transfer Funds</title>
                <meta
                    name="description"
                    content="Select transfer method"
                />
            </Head>

            <main>
                <section className="space-y-6">
                    <h2 className="header font-medium text-2xl">
                        Send Money
                    </h2>

                    <TransferDestination />
                </section>
            </main>
        </>
    );
};

export default Transfer;

Transfer.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
