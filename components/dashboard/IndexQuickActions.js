import Image from "next/image";
import Link from "next/link";
import MoneyTransfer from "@assets/img/quick-action-money-transfer.svg";
import BillPayment from "@assets/img/quick-action-bill-payment.svg";
import FundAccount from "@assets/img/quick-action-fund-account.svg";
import ViewCards from "@assets/img/quick-action-view-cards.svg";

const IndexQuickActions = () => {
    return (
        <div className="grid gap-4 lg:grid-cols-4">
            <Link className="rounded-[10px] bg-[#E7D9F2] px-4 py-8 grid place-content-center" href="/dashboard/transfer">
                <div className="flex items-center gap-4">
                    <Image className="h-12 w-12" src={MoneyTransfer} alt="Money Transfer" />

                    <p className="font-medium leading-tight">
                        Money Transfer
                    </p>
                </div>
            </Link>

            <Link className="rounded-[10px] bg-[#EFF2D9] px-4 py-8 grid place-content-center" href="/dashboard/services/pay-bills">
                <div className="flex items-center gap-4">
                    <Image className="h-12 w-12" src={BillPayment} alt="Bill Payment" />

                    <p className="font-medium leading-tight">
                        Bill Payment
                    </p>
                </div>
            </Link>

            <Link className="rounded-[10px] bg-[#EBE0E9] px-4 py-8 grid place-content-center" href="/dashboard/transfer/fund-account">
                <div className="flex items-center gap-4">
                    <Image className="h-12 w-12" src={FundAccount} alt="Fund your Account" />

                    <p className="font-medium leading-tight">
                        Fund your Account
                    </p>
                </div>
            </Link>

            <Link className="rounded-[10px] bg-[#D6F5E2] px-4 py-8 grid place-content-center" href="/dashboard/cards">
                <div className="flex items-center gap-4">
                    <Image className="h-12 w-12" src={ViewCards} alt="View your Cards" />

                    <p className="font-medium leading-tight">
                        View your Cards
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default IndexQuickActions;
