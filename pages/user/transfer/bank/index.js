import Head from "next/head";
import Layout from "@pages/user/_layout";
import BankTransferInitiationForm from "@components/user/transfer/BankTransferInitiationForm";

const Bank = () => {
    return (
        <>
            <Head>
                <title>Transfer Funds | Bank Transfer</title>
                <meta
                    name="description"
                    content="Send funds to a local bank account"
                />
            </Head>

            <main>
                <section className="grid gap-6">
                    <h2 className="header font-medium text-2xl">
                        Send Money
                    </h2>

                    <BankTransferInitiationForm />
                </section>
            </main>
        </>
    );
};

export default Bank;

Bank.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
