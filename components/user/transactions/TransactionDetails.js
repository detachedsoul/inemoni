import Image from "next/image";
import Link from "next/link";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import ContactSupport from "@assets/img/transaction-support-icon.svg";

const TransactionDetails = ({ transaction }) => {
    const showTransactionDetails = (transaction) => {
        const notNullValues = Object.entries(transaction.details).filter(([field, value]) => value !== null && field !== 'text' && field !== 'provider' && field !== 'free_transfer' && field !== 'bank_code' && field !== 'remarks');

        const transactionArray = [];

        for (const [field, value] of notNullValues) {
            const fields = field.toLowerCase().split("_");

            const capitalizeFirstWord = fields.map((word) => {
                const formatWord = word.charAt(0).toUpperCase() + word.slice(1);

                return formatWord;
            }).join(" ");

            transactionArray.push({ name: capitalizeFirstWord === "Session Id" ? "Session ID" : capitalizeFirstWord, value: value});
        }

        return transactionArray;
    };

    return (
        <div className="py-4 px-8 grid gap-6">
            <div className="rounded-[10px] bg-[#E6E6E6] p-4 flex gap-4">
                <Image className="h-11 w-11" src={ transaction.image } alt={ transaction.typeText } width={ 44 } height={ 44 } />

                <div className="-space-y-0.5">
                    <h2 className="font-medium leading-normal text-[#262626]">
                        { transaction.details.account_name ? transaction.details.account_name : transaction.typeSubText ? transaction.typeSubText : transaction.typeText }
                    </h2>

                    <p>
                        { transaction.typeText }
                    </p>

                    <p className={`${transaction.transType === 'debit' ? 'text-failed' : 'text-successful'} font-bold`}>
                        { transaction.transType === 'debit' ? '-' : '+' }{ transaction.amount_formatted }
                    </p>
                </div>
            </div>

            <div className="grid gap-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Status
                    </span>

                    <span className="font-medium text-[#262626]">
                        <span className="inline-block rounded-full p-1 bg-successful"></span> Successful
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Type
                    </span>

                    <span className={`font-medium ${transaction.transType === 'debit' ? 'text-failed' : 'text-successful'}`}>
                       {transaction.transType === 'debit' ? 'Debit' : 'Credit'}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Transaction ID
                    </span>

                    <span className="font-medium text-[#262626]">
                        { transaction.trans_id }
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Balance Before
                    </span>

                    <span className="font-medium text-[#262626]">
                        { transaction.balance_before }
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Balance After
                    </span>

                    <span className="font-medium text-[#262626]">
                        { transaction.balance_after }
                    </span>
                </div>

                {showTransactionDetails(transaction).map((transaction, index) => (
                    <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2" key={index}>
                        <span>
                            { transaction.name }
                        </span>

                        <span className="font-medium text-[#262626]">
                            { transaction.value }
                        </span>
                    </div>
                ))}

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Commisson
                    </span>

                    <span className="font-medium text-[#262626]">
                        { transaction.commission }
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Date
                    </span>

                    <span className="font-medium text-[#262626]">
                        { transaction.date_formatted }
                    </span>
                </div>

                {transaction.fail_reason && (
                    <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                        <span>
                            Fail Reason
                        </span>

                        <span className="font-medium text-[#262626]">
                            { transaction.fail_reason }
                        </span>
                    </div>
                )}
            </div>

            <div className="rounded-[10px] bg-white p-4 flex gap-4 shadow-[0px_4px_40px_0px_rgba(102,102,102,0.15)]">
                <Image className="h-11 w-11" src={ContactSupport} alt="Contact support" />

                <Link href="/contact-us" target="_blank" rel="noopener noreferrer">
                    <p className="font-medium leading-normal text-black">
                        Contact Support
                    </p>

                    <p className="text-sm">
                        Have an issue with this transaction?
                    </p>
                </Link>
            </div>

            <button
                className="btn block w-auto mx-auto rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                type="submit"
            >
                Download Receipt
            </button>
        </div>
    );
};

export default TransactionDetails;
