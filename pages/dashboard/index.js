import Head from "next/head";
import Layout from "./_layout";
import IndexQuickActions from "@components/dashboard/IndexQuickActions";
import IndexBalance from "@components/dashboard/IndexBalance";
import IndexTransactionHistory from "@components/dashboard/IndexTransactionHistory";

const Dashboard = () => {
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
                <IndexBalance />

                <div className="space-y-10">
                    <section className="space-y-2">
                        <h2 className="text-[#666666] font-medium text-lg">
                            Quick Actions
                        </h2>

                        <IndexQuickActions />
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-[#666666] font-medium text-lg">
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
