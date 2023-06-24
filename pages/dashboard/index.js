import Head from "next/head";
import Layout from "./_layout";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import { Eye, EyeOff } from "lucide-react";
import MoneyTransfer from "@assets/img/quick-action-money-transfer.svg";
import BillPayment from "@assets/img/quick-action-bill-payment.svg";
import FundAccount from "@assets/img/quick-action-fund-account.svg";
import ViewCards from "@assets/img/quick-action-view-cards.svg";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import DollarCard from "@assets/img/transaction-dollar-card.svg";
import Wallet from "@assets/img/transaction-wallet.svg";

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

                        <div className="grid gap-4 lg:grid-cols-4">
                            <Link className="rounded-[10px] bg-[#E7D9F2] px-4 py-8 grid place-content-center" href="/dashboard">
                                <div className="flex items-center gap-4">
                                    <Image className="h-12 w-12" src={MoneyTransfer} alt="Money Transfer" />

                                    <p className="font-medium leading-tight">
                                        Money Transfer
                                    </p>
                                </div>
                            </Link>

                            <Link className="rounded-[10px] bg-[#EFF2D9] px-4 py-8 grid place-content-center" href="/dashboard">
                                <div className="flex items-center gap-4">
                                    <Image className="h-12 w-12" src={BillPayment} alt="Bill Payment" />

                                    <p className="font-medium leading-tight">
                                        Bill Payment
                                    </p>
                                </div>
                            </Link>

                            <Link className="rounded-[10px] bg-[#EBE0E9] px-4 py-8 grid place-content-center" href="/dashboard">
                                <div className="flex items-center gap-4">
                                    <Image className="h-12 w-12" src={FundAccount} alt="Fund your Account" />

                                    <p className="font-medium leading-tight">
                                        Fund your Account
                                    </p>
                                </div>
                            </Link>

                            <Link className="rounded-[10px] bg-[#D6F5E2] px-4 py-8 grid place-content-center" href="/dashboard">
                                <div className="flex items-center gap-4">
                                    <Image className="h-12 w-12" src={ViewCards} alt="View your Cards" />

                                    <p className="font-medium leading-tight">
                                        View your Cards
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-[#666666] font-medium text-lg">
                            Recent Transactions
                        </h2>

                        <div className="rounded-[20px] bg-[#F2F2F2] px-4 pb-4 overflow-x-auto">
                            <table className="w-full whitespace-nowrap table-auto border-collapse">
                                <thead className="border-b border-[#979797] text-left">
                                    <tr className="text-[#666666]">
                                        <th className="font-normal pt-4 pb-2">
                                            Name
                                        </th>

                                        <th className="font-normal pt-4 pb-4">
                                            Type
                                        </th>

                                        <th className="font-normal pt-4 pb-4">
                                            Date
                                        </th>

                                        <th className="font-normal pt-4 pb-4">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={BankTransfer} alt="Bank Transfer" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Joseph Chikadibia
                                                </h4>

                                                <p className="bg-successful-bg text-successful rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Successful
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Bank Transfer
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-successful font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>

                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={DollarCard} alt="Dollar Card" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Dollar Virtual Card
                                                </h4>

                                                <p className="bg-pending-bg text-pending rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Pending
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Virtual Card Creation
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-pending font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>

                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={Wallet} alt="Inemoni Wallet" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Top-Up
                                                </h4>

                                                <p className="bg-failed-bg text-failed rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Failed
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Wallet Top-Up
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-failed font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>

                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={BankTransfer} alt="Bank Transfer" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Joseph Chikadibia
                                                </h4>

                                                <p className="bg-successful-bg text-successful rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Successful
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Bank Transfer
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-successful font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>

                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={DollarCard} alt="Dollar Card" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Dollar Virtual Card
                                                </h4>

                                                <p className="bg-pending-bg text-pending rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Pending
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Virtual Card Creation
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-pending font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>

                                    <tr className="border-b border-[#979797] last:border-none">
                                        <td className="py-3 flex items-center gap-2.5">
                                            <Image className="h-12 w-12" src={Wallet} alt="Inemoni Wallet" />

                                            <div className="-space-y-2">
                                                <h4 className="font-medium leading-none">
                                                    Top-Up
                                                </h4>

                                                <p className="bg-failed-bg text-failed rounded-full py-1 px-3 text-center font-medium uppercase text-[0.6rem] inline-block leading-none">
                                                    Failed
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-3 font-medium">
                                            Wallet Top-Up
                                        </td>

                                        <td className="py-3 -space-y-1">
                                            <p className="font-medium">
                                                15 June, 2023
                                            </p>

                                            <p className="text-[#666666]">
                                                10:02AM
                                            </p>
                                        </td>

                                        <td className="py-3 text-failed font-medium">
                                            ₦5,780.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
