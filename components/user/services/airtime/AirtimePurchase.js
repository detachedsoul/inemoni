import Image from "next/image";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const AirtimePurchase = ({handleAmountChange, amount, phoneNumber, handlePhoneNumberChange, network, handleNetworkChange, networkImage, setParameters}) => {
    // Get list of mobile network operators, error if any, and set the loading state
    const { data, isLoading, error } = useFetch(`https://www.inemoni.org/api/all-networks/airtime`, fetcher);

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Buy Airtime
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4 justify-between flex-wrap">
                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦50
                </button>

                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦100
                </button>

                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦200
                </button>

                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦500
                </button>

                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦1000
                </button>

                <button
                    className={ `rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` }
                    type="button"
                    onClick={ (e) => handleAmountChange(e) }
                >
                    ₦2000
                </button>
            </div>

            <div className="grid gap-6">
                <label className="grid gap-1" htmlFor="amount">
                    <span className="font-medium">
                        Amount
                    </span>

                    <span className="text-[#262626] font-bold">
                        { formatCurrency(amount) }
                    </span>

                    <input
                        className="dashboard-input no-number-increment"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter amount"
                        pattern="\d+"
                        id="amount"
                        value={ amount }
                        required
                        onChange={ handleAmountChange }
                    />
                </label>

                <label className="grid gap-1" htmlFor="phone-number">
                    <span className="font-medium">
                        Phone Number
                    </span>

                    <input
                        className="dashboard-input no-number-increment"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Phone Number"
                        pattern="\d+"
                        minLength={ 11 }
                        maxLength={ 11 }
                        id="phone-number"
                        value={ phoneNumber }
                        required
                        onChange={ handlePhoneNumberChange }
                    />
                </label>

                <label className="space-y-1" htmlFor="select-bank">
                    <span className="font-medium">
                        Select Network
                    </span>

                    { isLoading && (
                        <p>
                            Fetching networks...
                        </p>
                    ) }

                    { typeof error === "undefined" && typeof data === "undefined" && isLoading === false && (
                        <p>
                            An error occured. Please try again later.
                        </p>
                    ) }

                    { data && (
                        <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                            { networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            ) }

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleNetworkChange }
                            >

                                <option>
                                    Select Network
                                </option>

                                { data.map((network) => (
                                    <option value={ network.shortName } key={ network.id }>
                                        { network.name }
                                    </option>
                                )) }
                            </select>
                        </div>
                    ) }
                </label>
            </div>

            <button
                className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                disabled={ !(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) }
                type="button"
                onClick={ () => setParameters(() => {
                    setPinPopup(() => true);
                    setPreview(() => false);

                    return {
                        amount: amount,
                        network: network,
                        phone: phoneNumber,
                        user_token: getCookie("user_token").sanitizedValue,
                    };
                }) }
            >
                Continue
            </button>
        </div>
    );
};

export default AirtimePurchase;
