import Head from "next/head";
import Layout from "@pages/dashboard/_layout";
import BankTransferFinishForm from "@components/dashboard/transfer/BankTransferFinishForm";

const FinishBankTransfer = () => {
    return (
        <>
            <Head>
                <title>Transfer Funds | Finish Bank</title>
                <meta
                    name="description"
                    content="Complete your transfer"
                />
            </Head>

            <main className="pb-8">
                <section className="space-y-6">
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
