/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import useUser from "@store/useUser";
import ReferralIcon from "@assets/img/referrals-section-icon.svg";
import CopyText from "@assets/img/copy-text.svg";
import NoTransaction from "@assets/img/no-transaction.svg";
import copyText from "@helpers/copyText";
import { usePrimaryDetails } from "@store/useServices";
import { useEffect, useState } from "react";

const Referrals = () => {
    const [referrals, setReferrals] = useState("");

    const userDetails = useUser((state) => state.userDetails);
    const userToken = useUser((state) => state.userToken);

    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);

    const message = usePrimaryDetails((state) => state.message);
    const setMessage = usePrimaryDetails((state) => state.setMessage);

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() =>  {
        if(userToken) {
            const getReferrals = async () => {
                const getURLOrigin = window.location.origin;

                const data = {
                    user_token: userToken,
                };

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    redirect: "follow",
                };

                try {
                    const request = await fetch(
                        `${getURLOrigin}/api/user-referrals`,
                        requestOptions,
                    );

                    const response = await request.json();

                    if (response.error === false) {
                        setIsLoading(false);
                        setReferrals(response.data);
                    } else {
                        setIsLoading(false);
                        setMessage(response.message);
                    }
                } catch(error) {
                    setIsLoading(false);
                    setMessage(error.message);
                }
            };

            getReferrals();
        }

    }, [userToken]);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(() => false);
            }, 3000);
        }
    }, [isCopied]);

    console.log(isCopied)

    return (
        <>
            <section className="bg-[#F2F2F2] rounded-[0.75rem] text-[#666666] p-4 grid items-center lg:grid-cols-12 mb-12">
                <div className="space-y-6 lg:col-span-8">
                    <div>
                        <h2 className="font-medium text-3xl leading-snug text-[#262626]">
                            Share the love!
                        </h2>

                        <p>
                            Invite others with your referral code and earn ₦100 when your referred friends sign up.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="text-lg flex items-center flex-wrap gap-y-2 gap-x-4">
                            <p>
                                Referral Code:
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <p className="bg-[#E7D9F2] text-[#390A5C] leading-none rounded-[0.3125rem] py-2 px-4 font-medium">
                                    { userDetails?.uid }
                                </p>

                                <button className="h-8" type="button" aria-label="Copy referral code" onClick={ () => copyText(userDetails?.uid, setIsCopied) }>
                                    <Image className="w-full h-full" src={ CopyText } alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="text-lg flex items-center flex-wrap gap-y-2 gap-x-4">
                            <p>
                                Referral Link:
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <p className="bg-[#E7D9F2] text-[#390A5C] leading-none rounded-[0.3125rem] py-2 px-4 font-medium">
                                    { userDetails?.referral_link }
                                </p>

                                <button className="h-8" type="button" aria-label="Copy referral link" onClick={ () => copyText(userDetails?.referral_link, setIsCopied) }>
                                    <Image className="w-full h-full" src={ CopyText } alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Image className="lg:col-span-4" src={ ReferralIcon } alt="" priority />
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-xl leading-snug text-[#666666]">
                    Your Referrals
                </h2>

                {message ? (
                    <p className="font-medium text-lg">
                        { message }
                    </p>
                ) : referrals?.length > 0 ? (
                    <div className="rounded-[20px] bg-[#F2F2F2] px-4 pb-4 overflow-x-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse table-auto whitespace-nowrap h-full">
                                <thead className="border-b border-[#979797] text-left">
                                    <tr className="text-[#666666]">
                                        <th className="font-normal pt-4 pb-2 sticky top-0">
                                            Name
                                        </th>

                                        <th className="font-normal pt-4 pb-4 sticky top-0">
                                            Phone
                                        </th>

                                        <th className="font-normal pt-4 pb-4 sticky top-0">
                                            Date
                                        </th>

                                        <th className="font-normal pt-4 pb-4 sticky top-0">
                                            Commission
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {referrals && referrals?.map(referral => (
                                        <tr
                                            className="border-b border-[#979797] last:border-none"
                                            key={ referral.id }
                                        >
                                            <td className="pr-4 py-2 flex items-center gap-2.5 min-w-max h-full w-max">
                                                <Image className="h-11 w-11" src="https://www.inemoni.org/mobile/assets/img/referral.png" alt="" width={ 44 } height={ 44 } />

                                                { referral.fname }
                                            </td>

                                            <td className="pr-4 py-2 font-medium">
                                                { referral.phone }
                                            </td>

                                            <td className="pr-4 py-2 font-medium">
                                                { referral.date_formatted }
                                            </td>

                                            <td className="pr-4 py-2 font-medium">
                                                { referral.total_commission }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="bg-[#F2F2F2] grid place-content-center text-center gap-4 p-8 h-[500px] rounded-[1.25rem] text-[#666666]">
                        <Image className="mx-auto" src={ NoTransaction } alt="" />

                        <p className="text-lg text-center">
                            You have no referral yet
                        </p>
                    </div>
                )}
            </section>

            <p className={`text-successful bg-successful-bg fixed ${isCopied ? 'top-4' : '-top-12'} z-50 ease-in duration-300 font-medium py-2 px-4 left-[calc(25%)] lg:left-[calc(45%-2rem)] text-center`}>
                Copied to clipboard
            </p>
        </>
    );
};

export default Referrals;
