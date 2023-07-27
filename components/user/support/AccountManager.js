import Popup from "@components/user/Popup";
import Image from "next/image";
import Link from "next/link";
import ContactSupport from "@assets/img/contact-support.svg";
import useUser from "@store/useUser";
import { useState } from "react";

const AccountManager = () => {
    const [popup, setPopup] = useState(false);

    const userDetails = useUser((state) => state.userDetails);

    return (
        <>
            <button className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 hover:bg-[#1C052E]/90 hover:text-[#F2F2F2] transition-colors duration-300 ease-in group" type="button" onClick={() => setPopup(() => !popup)}>
                <Image className="h-12 w-12" src={ ContactSupport } alt="Contact your account manager" />

                <div className="text-left space-y-0.5">
                    <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                        Contact your Account Manager
                    </p>

                    <p className="text-sm">
                        Get in touch with your manager for any assistance
                    </p>
                </div>
            </button>

            <Popup isActive={popup} setIsActive={setPopup}>
                <div className="p-4 lg:px-8 space-y-6 text-center">
                    <div>
                        <h2 className="font-medium text-2xl leading-snug text-[#262626]">
                            Account Manager
                        </h2>

                        <p className="text-[1.0625rem]">
                            Get in touch with your account manager
                        </p>
                    </div>

                    <Image className="rounded-full h-[150px] w-[150px] mx-auto object-center" src={ userDetails?.account_manager?.profilepic } alt={ userDetails?.account_manager?.name } width={ 100 } height={ 100 } quality={ 100 } />

                    <div className="text-center space-y-3">
                        <h2 className="font-medium text-xl leading-none text-[#262626]">
                            { userDetails?.account_manager?.name }
                        </h2>

                        <Link className="leading-none text-[1.0625rem] block" href={`tel:${ userDetails?.account_manager?.phone }`} target="_blank" rel="noopener noreferrer">
                            { userDetails?.account_manager?.phone }
                        </Link>

                        <Link className="leading-none text-[1.0625rem] block" href={`mailto:${ userDetails?.account_manager?.email }`} target="_blank" rel="noopener noreferrer">
                            { userDetails?.account_manager?.email }
                        </Link>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default AccountManager;
