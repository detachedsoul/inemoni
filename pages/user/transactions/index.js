import Head from "next/head";
import Layout from "@pages/user/_layout";
import TransactionHistory from "@components/user/TransactionHistory";
import TransactionDetails from "@components/user/transactions/TransactionDetails";
import Popup from "@components/user/Popup";
import { Search } from "lucide-react";
import { useState } from "react";

const Transactions = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <Head>
                <title>Transaction History</title>
                <meta
                    name="description"
                    content="View your transaction history"
                />
            </Head>

            <main>
                <section className="grid gap-8">
                    <h2 className="header font-medium text-2xl">
                        Transactions
                    </h2>

                    <div className="space-y-6 max-w-full overflow-x-auto">
                        <form className="flex flex-wrap items-center gap-2 max-w-full" method="POST">
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
                                <Search className="text-[#666666]" size={25} />

                                <input className="dashboard-input px-4 py-2.5 pl-0 border-none" type="search" placeholder="Search" id="search" />
                            </label>

                            <button className="btn bg-brand-purple text-white transition-colors ease-in duration-300 hover:bg-brand-dark-purple" type="submit">
                                Request Statement
                            </button>
                        </form>

                        <TransactionHistory isActive={isActive} setIsActive={setIsActive} />
                    </div>

                </section>
            </main>

            <Popup isActive={isActive} setIsActive={setIsActive} width="lg:w-[45%]">
                <TransactionDetails />
            </Popup>
        </>
    );
};

export default Transactions;

Transactions.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
