import TransactionHistory from "@components/user/TransactionHistory";
import useUser from "@store/useUser";
import { useState } from "react";
import { Search } from "lucide-react";

const TransactionFilter = () => {
    const transactions = useUser((state) => state.transactions);

    const [filterOption, setFilterOption] = useState("All Transactions");
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    const [searchValue, setSearchValue] = useState("");

    const filterCredit = () => {
        const creditTransactions = transactions.filter(transaction => transaction.transType === 'credit');
        setFilteredTransactions(creditTransactions);
    };

    const filterDebit = () => {
        const debitTransactions = transactions.filter(transaction => transaction.transType === 'debit');
        setFilteredTransactions(debitTransactions);
    };

    const resetTransactionTypeFilter = () => {
        setFilteredTransactions(transactions);
    };

    const searchFilter = (e) => {
        const { value } = e.target;

        setSearchValue(value);

        const filteredTransaction = transactions.filter((transaction) => {
            const keys = Object.keys(transaction);
            for (const key of keys) {
            if (
                String(transaction[key]).toLowerCase().includes(value.toLowerCase()) ||
                (transaction.details && String(transaction.details[key]).toLowerCase().includes(value.toLowerCase()))
            ) {
                return true;
            }
            }
            return false;
        });

        setFilteredTransactions(filteredTransaction);
    };

    return (
        <>
            <form className="flex flex-wrap items-center gap-2 max-w-full" method="POST">
                <button className={`btn transition-colors ease-in duration-300 hover:bg-[#E7D9F2] hover:text-brand-purple ${filterOption === 'All Transactions' ? 'bg-[#E7D9F2] text-brand-purple' : 'bg-[#E6E6E6] text-[#666666]'}`} type="button" onClick={() => {
                    setFilterOption(() => "All Transactions");
                    resetTransactionTypeFilter();
                }}>
                    All Transactions
                </button>

                <button className={`btn transition-colors ease-in duration-300 hover:bg-[#E7D9F2] hover:text-brand-purple ${filterOption === 'Money In' ? 'bg-[#E7D9F2] text-brand-purple' : 'bg-[#E6E6E6] text-[#666666]'}`} type="button" onClick={() => {
                    setFilterOption(() => "Money In");
                    filterCredit();
                }}>
                    Money In
                </button>

                <button className={`btn transition-colors ease-in duration-300 hover:bg-[#E7D9F2] hover:text-brand-purple ${filterOption === 'Money Out' ? 'bg-[#E7D9F2] text-brand-purple' : 'bg-[#E6E6E6] text-[#666666]'}`} type="button" onClick={() => {
                    setFilterOption(() => "Money Out");
                    filterDebit();
                }}>
                    Money Out
                </button>

                <label className="flex items-center rounded-md gap-2 pl-4 border border-[#cccccc] grow" htmlFor="search">
                    <Search className="text-[#cccccc]" size={25} />

                    <input className="dashboard-input px-4 py-2.5 pl-0 border-none" type="search" placeholder="Search" id="search" value={ searchValue } onChange={(e) => searchFilter(e) } />
                </label>

                <button className="btn bg-brand-purple text-white transition-colors ease-in duration-300 hover:bg-brand-dark-purple" type="submit">
                    Request Statement
                </button>
            </form>

            <TransactionHistory filteredTransactions={ filteredTransactions } />
        </>
    );
};

export default TransactionFilter;
