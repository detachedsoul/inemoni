import { usePrimaryDetails } from "@store/useServices";
import { useState } from "react";

const PinPopup = ({ endpoint, buttonText="Transfer" }) => {
    const message = usePrimaryDetails((state) => state.message);
    const setMessage = usePrimaryDetails((state) => state.setMessage);

    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setIsSuccessful = usePrimaryDetails((state) => state.setIsSuccessful);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);
    const parameters = usePrimaryDetails((state) => state.parameters);

    const [isProcessing, setIsProcessing] = useState(false);

    // Store the user pin in a state
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");

    const handlePin1Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin1(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin2Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin2(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin3Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin3(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin4Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin4(e.target.value);
	};

    // Merge all the pin to one value
	const pin = `${pin1}${pin2}${pin3}${pin4}`;

    // Enable the submit button when all the pin fields are filled
	const pins = [pin1, pin2, pin3, pin4];
	const isDisabled = pins.some((pin) => pin === "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const getURLOrigin = window.location.origin;

        console.log(parameters)

        const data = {
            pin: pin,
            ...parameters
        };

        const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
			redirect: "follow",
		};

        setIsProcessing(() => true);
        setIsLoading(true);
        setPinPopup(false);

        try {
            const request = await fetch(
                `${getURLOrigin}/api/${endpoint}`,
                requestOptions,
            );

            const response = await request.json();

            if (response.error === false) {
                setIsProcessing(() => false);

                setIsLoading(false);

                setIsSuccessful(true);

                setMessage(message ? message : response.message);
            } else {
                setIsProcessing(() => false);

                setIsLoading(false);

                setIsFailed(true);

                setErrorMessage(response.message);
            }
        } catch(error) {
            setIsProcessing(() => false);

            setIsLoading(false);

            setIsFailed(true);

            setErrorMessage(error.message);
        }
    };

    return (
        <form
            className="p-4 lg:px-8 space-y-6"
            method="POST"
            onSubmit={handleSubmit}
        >
            <div className="space-y-1.5">
                <h2 className="font-medium text-xl text-[#262626]">
                    Enter your PIN
                </h2>

                <p className="leading-snug">
                    Please enter your Transaction PIN to approve transaction
                </p>
            </div>

            <div className="space-y-2 lg:w-4/5 lg:mx-auto">
                <h3 className="font-medium">
                    Pin
                </h3>

                <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto" id="create-pin">
                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin1}
                        onChange={handlePin1Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-2"
                        id="create-pin-value-2"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin2}
                        onChange={handlePin2Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-3"
                        id="create-pin-value-3"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin3}
                        onChange={handlePin3Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-4"
                        id="create-pin-value-4"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin4}
                        onChange={handlePin4Change}
                    />
                </div>
            </div>

            <button
                className={`btn block w-full rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'} ${isDisabled && !isProcessing ? 'bg-brand-purple/30' : ''}`}
                type="submit"
                disabled={(isDisabled && !isProcessing) || isProcessing}
            >
                { isProcessing ? "Processing..." : buttonText }
            </button>
        </form>
    );
};

export default PinPopup;
