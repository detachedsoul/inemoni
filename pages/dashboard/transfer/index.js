import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "@pages/dashboard/_layout";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import Wallet from "@assets/img/transaction-wallet.svg";

const Transfer = () => {
    return (
        <>
            <Head>
                <title>Transfer Funds</title>
                <meta
                    name="description"
                    content="Select transfer method"
                />
            </Head>

            <main>
                <section className="space-y-6">
                    <h2 className="header font-medium text-2xl">
                        Send Money
                    </h2>

                    <div className="space-y-4 lg:w-3/5">
                        <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5" href="/dashboard/transfer/bank">
                            <Image className="h-12 w-12" src={BankTransfer} alt="Send to a local bank" />

                            <div>
                                <p className="font-medium text-lg leading-none text-black">
                                    Send to Bank Account
                                </p>

                                <p className="text-sm">
                                    Send to a Local Bank Account
                                </p>
                            </div>
                        </Link>

                        <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5" href="/dashboard/transfer/bank">
                            <Image className="h-12 w-12" src={Wallet} alt="Send to any Inemoni account" />

                            <div>
                                <p className="font-medium text-lg leading-none text-black">
                                    Send to Wallet
                                </p>

                                <p className="text-sm">
                                    Send to any Inemoni Account
                                </p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Transfer;

Transfer.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
