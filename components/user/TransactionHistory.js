import Image from "next/image";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import DollarCard from "@assets/img/transaction-dollar-card.svg";
import Bonus from "@assets/img/transaction-bonus.svg";

const TransactionHistory = () => {
    return (
        <div className="rounded-[20px] bg-[#F2F2F2] px-4 pb-4 overflow-x-auto">
            <table className="w-full border-collapse table-auto whitespace-nowrap h-full">
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
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={BankTransfer} alt="Bank Transfer" />

                            <div>
                                <p className="font-medium text-sm -mb-1.5">
                                    Joseph Chikadibia
                                </p>

                                <p className="bg-successful-bg text-successful rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Successful
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Bank Transfer
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-successful font-medium">
                            ₦5,780.00
                        </td>
                    </tr>

                    <tr className="border-b border-[#979797] last:border-none">
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={DollarCard} alt="Dollar Card" />

                            <div className="">
                                <p className="font-medium text-sm -mb-1.5">
                                    Dollar Virtual Card
                                </p>

                                <p className="bg-pending-bg text-pending rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Pending
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Virtual Card Creation
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-pending font-medium">
                            ₦5,780.00
                        </td>
                    </tr>

                    <tr className="border-b border-[#979797] last:border-none">
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={Bonus} alt="Inemoni Bonus" />

                            <div className="">
                                <p className="font-medium text-sm -mb-1.5">
                                    Top-Up
                                </p>

                                <p className="bg-failed-bg text-failed rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Failed
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Bonus Top-Up
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-failed font-medium">
                            ₦5,780.00
                        </td>
                    </tr>

                    <tr className="border-b border-[#979797] last:border-none">
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={BankTransfer} alt="Bank Transfer" />

                            <div className="">
                                <p className="font-medium text-sm -mb-1.5">
                                    Joseph Chikadibia
                                </p>

                                <p className="bg-successful-bg text-successful rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Successful
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Bank Transfer
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-successful font-medium">
                            ₦5,780.00
                        </td>
                    </tr>

                    <tr className="border-b border-[#979797] last:border-none">
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={DollarCard} alt="Dollar Card" />

                            <div className="">
                                <p className="font-medium text-sm -mb-1.5">
                                    Dollar Virtual Card
                                </p>

                                <p className="bg-pending-bg text-pending rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Pending
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Virtual Card Creation
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-pending font-medium">
                            ₦5,780.00
                        </td>
                    </tr>

                    <tr className="border-b border-[#979797] last:border-none">
                        <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                            <Image className="h-11 w-11" src={Bonus} alt="Inemoni Bonus" />

                            <div className="">
                                <p className="font-medium text-sm -mb-1.5">
                                    Top-Up
                                </p>

                                <p className="bg-failed-bg text-failed rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none">
                                    Failed
                                </p>
                            </div>
                        </td>

                        <td className="pr-4 py-2 font-medium">
                            Bonus Top-Up
                        </td>

                        <td className="pr-4 py-2 -space-y-1.5">
                            <p className="font-medium">
                                15 June, 2023
                            </p>

                            <p className="text-[#666666]">
                                10:02AM
                            </p>
                        </td>

                        <td className="pr-4 py-2 text-failed font-medium">
                            ₦5,780.00
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
