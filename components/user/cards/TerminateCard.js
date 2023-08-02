import FailedPopup from "@components/user/FailedPopup";

const TerminateCard = ({ setIsPopupActive }) => {
    return (
        <FailedPopup header="Coming Soon" text={`This feature is currently being developed. Stay tuned!`}>
            <button
                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                type="button"
                onClick={() => setIsPopupActive(() => false)}
            >
                Close
            </button>
        </FailedPopup>
    );
};

export default TerminateCard;
