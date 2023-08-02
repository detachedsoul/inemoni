import Head from "next/head";
import Layout from "@pages/user/_layout";
import Referrals from "@components/user/referrals/Referrals";

const UserReferrals = () => {
    return (
        <>
            <Head>
                <title>Dashboard | Referrals</title>
                <meta
                    name="description"
                    content="View your referrals"
                />
            </Head>

            <main>
                <>
                    <h2 className="header font-normal text-2xl mb-6">
                        Referrals
                    </h2>

                    <Referrals />
                </>
            </main>
        </>
    );
};

export default UserReferrals;

UserReferrals.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
