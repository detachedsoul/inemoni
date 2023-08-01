import Head from "next/head";
import Layout from "@pages/user/_layout";
import TransactionFilter from "@components/user/transactions/TransactionFilter";

const Transactions = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Transaction History</title>
                <meta
                    name="description"
                    content="View your transaction history"
                />
            </Head>

            <main>
                <section className="grid gap-8">
                    <h2 className="header font-normal text-2xl">
                        Transactions
                    </h2>

                    <div className="grid gap-6 max-w-full overflow-x-auto">
                        <TransactionFilter />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Transactions;

Transactions.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
