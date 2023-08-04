import Head from "next/head";
import Layout from "@pages/user/_layout";
import DOMTransferInitiation from "@components/user/dom/DOMTransferInitiation";

const DOMTransfer = () => {
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
                        <DOMTransferInitiation />
                    </div>
                </section>
            </main>
        </>
    );
};

export default DOMTransfer;

DOMTransfer.getLayout = (page) => {
    return <Layout>{ page }</Layout>;
};
