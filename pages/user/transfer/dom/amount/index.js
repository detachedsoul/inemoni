import Head from "next/head";
import Layout from "@pages/user/_layout";
import DOMTransferAmount from "@components/user/dom/DOMTransferAmount";

const DOMTransferAmountIput = () => {
    return (
        <>
            <Head>
                <title>Dashboard | DOM Transfer</title>
                <meta
                    name="description"
                    content="Transfer funds to a DOM account"
                />
            </Head>

            <main>
                <section className="grid gap-8">
                    <h2 className="header font-normal text-2xl">
                        DOM Transfer
                    </h2>

                    <div className="grid gap-6 max-w-full overflow-x-auto">
                        <DOMTransferAmount />
                    </div>
                </section>
            </main>
        </>
    );
};

export default DOMTransferAmountIput;

DOMTransferAmountIput.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
