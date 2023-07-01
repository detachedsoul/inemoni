import Head from "next/head";
import Layout from "@pages/user/_layout";
import BankTransferFinishForm from "@components/user/transfer/BankTransferFinishForm";

const FinishBankTransfer = () => {
    return (
        <>
            <Head>
                <title>Transfer Funds | Finish Bank Transfer</title>
                <meta
                    name="description"
                    content="Complete your transfer"
                />
            </Head>

            <main>
                <section className="grid gap-6">
                    <h2 className="header font-medium text-2xl">
                        Send Money
                    </h2>

                    <BankTransferFinishForm />
                </section>
            </main>
        </>
    );
};

export default FinishBankTransfer;

FinishBankTransfer.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
