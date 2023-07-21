import Image from "next/image";
import Link from "next/link";
import MoneyTransfer from "@assets/img/quick-action-money-transfer.svg";
import BillPayment from "@assets/img/quick-action-bill-payment.svg";
import FundAccount from "@assets/img/quick-action-fund-account.svg";
import ViewCards from "@assets/img/quick-action-view-cards.svg";
import Popup from "@components/user/Popup";
import FundAccountPopup from "@components/user/FundAccountPopup";
import { useState } from "react";

const IndexQuickActions = () => {
    const [popup, setPopup] = useState(false);

    return (
        <>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <Link className="rounded-[10px] bg-[#E7D9F2] px-4 py-8 grid place-content-center" href="/user/transfer">
                    <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                        <Image className="h-12 w-12" src={MoneyTransfer} alt="Money Transfer" />

                        <p className="font-medium leading-tight">
                            Money Transfer
                        </p>
                    </div>
                </Link>

                <Link className="rounded-[10px] bg-[#EFF2D9] px-4 py-8 grid place-content-center" href="/user/services/">
                    <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                        <Image className="h-12 w-12" src={BillPayment} alt="Bill Payment" />

                        <p className="font-medium leading-tight">
                            Bill Payment
                        </p>
                    </div>
                </Link>

                <button className="rounded-[10px] bg-[#EBE0E9] px-4 py-8 grid place-content-center " type="button" onClick={() => setPopup(() => true)}>
                    <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                        <Image className="h-12 w-12" src={FundAccount} alt="Fund your Account" />

                        <p className="font-medium leading-tight text-left">
                            Fund your Account
                        </p>
                    </div>
                </button>

                <Link className="rounded-[10px] bg-[#D6F5E2] px-4 py-8 grid place-content-center" href="/user/cards">
                    <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                        <Image className="h-12 w-12" src={ViewCards} alt="View your Cards" />

                        <p className="font-medium leading-tight">
                            View your Cards
                        </p>
                    </div>
                </Link>
            </div>

            <Popup isActive={ popup } setIsActive={ setPopup }>
                <FundAccountPopup />
            </Popup>
        </>
    );
};

export default IndexQuickActions;
