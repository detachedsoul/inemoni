import Head from "next/head";
import Layout from "./_layout";
import IndexQuickActions from "@components/dashboard/IndexQuickActions";
import IndexTransactionHistory from "@components/dashboard/IndexTransactionHistory";
import {useState} from "react";
import { Eye, EyeOff } from "lucide-react";

const Dashboard = () => {
    const [isBalanceVisible, setBalanceIsVisible] = useState(false);

    return (
        <>
            <Head>
                <title>Overview | User Dashboard</title>
                <meta
                    name="description"
                    content="User dashboard"
                />
            </Head>

            <main className="space-y-12 pb-8">
                <section className="space-y-1">
                    <p className="flex items-center gap-2">
                        <span className="text-brand-purple">Total Balance</span>

                        <button type="button" aria-label={isBalanceVisible ? "Toggle balance off" : "Toggle balance on"} onClick={() => setBalanceIsVisible(() => !isBalanceVisible)}>
                            {isBalanceVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </p>

                    <p className="font-bold text-2xl">
                        {isBalanceVisible ? "₦ 130,096.97" : "****"}
                    </p>
                </section>

                <div className="space-y-10">
                    <section className="space-y-2">
                        <h2 className="text-[#666666] font-medium text-lg">
                            Quick Actions
                        </h2>

                        <IndexQuickActions />
                    </section>

                    <section className="space-y-2">
                        <h2 className="header text-[#666666] font-medium text-lg">
                            Recent Transactions
                        </h2>

                        <IndexTransactionHistory />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
