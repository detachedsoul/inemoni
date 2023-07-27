/* eslint-disable react-hooks/exhaustive-deps */
import Popup from "@components/user/Popup";
import TransactionDetails from "@components/user/transactions/TransactionDetails";
import Image from "next/image";
import NoTransaction from "@assets/img/no-transaction.svg";
import useUser from "@store/useUser";
import Link from "next/link";
import { usePrimaryDetails } from "@store/useServices";
import { useEffect, useState } from "react";

const TransactionHistory = ({ showViewAll = false, children }) => {
    const [isActive, setIsActive] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const setIsLoading =  usePrimaryDetails((state) => state.setIsLoading);

    const transactions = useUser((state) => state.transactions);
    const setTransactions = useUser((state) => state.setTransactions);

    const userToken = useUser((state) => state.userToken);
    const transactionLimit = useUser((state) => state.transactionLimit);

    const fetchUserTransactions = async (limit) => {
        const getURLOrigin = window.location.origin;

        const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			redirect: "follow",
		};

        if (userToken) {
            setIsLoading(true);

            try {
                const request = await fetch(
                    `${getURLOrigin}/api/user-transactions/${userToken}?limit=${limit}`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setIsLoading(false);

                    setTransactions(response.data);
                } else {
                    setIsLoading(false);

                    setErrorMessage("There was an error fetching your transaction history. Please try again later or contact support.");
                }
            } catch(error) {
                setIsLoading(false);

                setErrorMessage("There was an error fetching your transaction history. Please try again later or contact support.");
            }
        }
    };

    useEffect(() => {
        const fetchTransactions = async () => {
            const transactionResponse = await fetchUserTransactions(transactionLimit);

            return transactionResponse;
        };

        fetchTransactions();
    }, [userToken, transactionLimit]);

    // Format transaction date to be in the form Day month, year time
    const formatTransactionDate = (date) => {
        const trimmedDate = date.trim();

        const paths = trimmedDate.split(",");
        const getYearTime = paths[1].trim().split(" ");

        const dayMonth = paths[0];
        const year = getYearTime[0];
        const time = getYearTime[1];

        const dayMonthYear = `${dayMonth}, ${year}`;

        return {
            dayMonthYear,
            time
        }
    };

    return errorMessage ? (
        <p className="font-medium text-lg">
            { errorMessage }
        </p>
    ) : transactions?.length > 0 ? (
        <>
            <div className="rounded-[20px] bg-[#F2F2F2] px-4 pb-4 overflow-x-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse table-auto whitespace-nowrap h-full">
                        <thead className="border-b border-[#979797] text-left">
                            <tr className="text-[#666666]">
                                <th className="font-normal pt-4 pb-2 sticky top-0">
                                    Name
                                </th>

                                <th className="font-normal pt-4 pb-4 sticky top-0">
                                    Type
                                </th>

                                <th className="font-normal pt-4 pb-4 sticky top-0">
                                    Date
                                </th>

                                <th className="font-normal pt-4 pb-4 sticky top-0">
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions && transactions?.map(transaction => (
                                <tr className={`border-b border-[#979797] ${showViewAll ? '' : 'last:border-none'} cursor-pointer`}
                                    onClick={() => {
                                        setIsActive(() => true);
                                        setTransactionDetails(transaction);
                                    }}
                                    key={ transaction.trans_id }
                                >
                                    <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                                        <Image className="h-11 w-11" src={ transaction.image } alt={ transaction.typeText } width={ 44 } height={ 44 } />

                                        <div>
                                            <p className="font-medium text-sm -mb-1.5">
                                                { transaction.details.source_account_name ? transaction.details.source_account_name : transaction.typeSubText ? transaction.typeSubText : transaction.typeText }
                                            </p>

                                            <p className={`${transaction.transType === 'debit' ? 'bg-failed-bg text-failed' : 'bg-successful-bg text-successful'} rounded-full py-1 px-3 text-center font-medium uppercase text-[0.5rem] inline-block leading-none`}>
                                                {transaction.transType === 'debit' ? 'Debit' : 'Credit'}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="pr-4 py-2 font-medium">
                                    { transaction.typeText }
                                    </td>

                                    <td className="pr-4 py-2 -space-y-1.5">
                                        <p className="font-medium">
                                            { formatTransactionDate(transaction.date_formatted).dayMonthYear }
                                        </p>

                                        <p className="text-[#666666]">
                                            { formatTransactionDate(transaction.date_formatted).time }
                                        </p>
                                    </td>

                                    <td className={`pr-4 py-2 ${transaction.transType === 'debit' ? 'text-failed' : 'text-successful'} font-medium`}>
                                        { transaction.transType === 'debit' ? '-' : '+' }{ transaction.amount_formatted }
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                    { showViewAll && transactions && (
                        <div className="py-4 mx-auto text-center">
                            <Link className="text-brand-purple inline-block" href="/user/transactions">
                                View All Transactions
                            </Link>
                        </div>
                    ) }
            </div>

            { children }

            <Popup isActive={isActive} setIsActive={setIsActive} width="lg:w-[45%]">
                {transactionDetails && <TransactionDetails transaction={ transactionDetails } />}
            </Popup>
        </>
    ) : (
        <div className="bg-[#F2F2F2] grid text-center place-content-center gap-4 p-8 h-[500px] rounded-[1.25rem] text-[#666666]">
            <Image className="mx-auto" src={ NoTransaction } alt="" />

            <p className="text-lg text-center">
                You haven’t made any transactions yet
            </p>
        </div>
    );
};

export default TransactionHistory;
