import Head from "next/head";
import Layout from "@pages/user/_layout";
import TransactionHistory from "@components/user/TransactionHistory";
import { Search } from "lucide-react";

const Transactions = () => {
    return (
        <>
            <Head>
                <title>Transactions</title>
                <meta
                    name="description"
                    content="View your transaction history"
                />
            </Head>

            <main>
                <section className="grid gap-8">
                    <h2 className="header font-medium text-2xl">
                        Inemoni Transactions
                    </h2>

                    <div className="space-y-6">
                        <form className="flex flex-wrap items-center gap-2" method="POST">
                            <button className="btn bg-[#E7D9F2] text-brand-purple transition-colors ease-in duration-300" type="button">
                                All Transactions
                            </button>

                            <button className="btn bg-[#E6E6E6] text-[#666666] transition-colors ease-in duration-300 hover:bg-[#E7D9F2] hover:text-brand-purple" type="button">
                                Money In
                            </button>

                            <button className="btn bg-[#E6E6E6] text-[#666666] transition-colors ease-in duration-300 hover:bg-[#E7D9F2] hover:text-brand-purple" type="button">
                                Money Out
                            </button>

                            <label className="flex items-center rounded-md gap-2 pl-4 border border-[#cccccc] grow" htmlFor="search">
                                <Search size={25} />

                                <input className="dashboard-input px-4 py-2.5 pl-0 border-none" type="search" placeholder="Search" id="search" />
                            </label>

                            <button className="btn bg-brand-purple text-white transition-colors ease-in duration-300 hover:bg-brand-dark-purple" type="submit">
                                Request Statement
                            </button>
                        </form>

                        <TransactionHistory />
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
