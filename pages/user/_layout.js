import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/img/logo.svg";
import Navigation from "@components/user/Navigation";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";
import useUser from "@store/useUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuIcon, X, Bell } from "lucide-react";
import { usePrimaryDetails } from "@store/useServices";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const Layout = ({ children }) => {
    const router = useRouter();

    const userToken = useUser((state) => state.userToken);
    const setUserToken = useUser((state) => state.setUserToken);

    const userDetails = useUser((state) => state.userDetails);
    const setUserDetails = useUser((state) => state.setUserDetails);

    const setUserCards = useUser((state) => state.setUserCards);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setUserBalance = useUser((state) => state.setUserBalance);

    const { data: balance } = useFetch(userToken ? `https://www.inemoni.org/api/user-balance/${userToken}` : null, fetcher);

    const { data: userData } = useFetch(userToken ? `https://www.inemoni.org/api/user-data/${userToken}` : null, fetcher);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUserToken(getCookie("user_token").sanitizedValue);
        }

        if (balance) {
            setUserBalance(balance.balance_formatted);
        }

        if (userData) {
            setUserDetails(userData);
        }

    }, [balance, userData, userToken, setUserToken, setUserBalance, setUserDetails]);

    useEffect(() => {
        if (userToken) {
            // const cards = [];

            const fetchUserCards = async () => {
                const getURLOrigin = window.location.origin;

                const data = {
                    user_token: userToken
                };

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    redirect: "follow",
                };

                try {
                    const request = await fetch(
                        // `${getURLOrigin}/api/virtual-cards/my-cards`,
                        `https://justcors.com/tl_763c4ef/https://www.inemoni.org/api/virtual-cards/my-cards`,
                        requestOptions,
                    );

                    const response = await request.json();

                    if (response.error === false) {
                        setUserCards(response.data);
                    } else {
                        setErrorMessage("There was an error getting your card details. Please try again or contact support if the issue persists.");
                    }
                } catch(error) {
                    setErrorMessage("There was an error getting your card details. Please try again or contact support if the issue persists.");
                }

            };

            fetchUserCards();
        }
    }, [userToken, setUserCards, setErrorMessage]);

    useEffect(() => {
        setNavIsOpen(() => false);
    }, [router.pathname]);

    const fname = userDetails?.fname?.toLowerCase().split(" ");
    const username = fname?.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const [navIsOpen, setNavIsOpen] = useState(false);
	const handleNavClick = () => {
		setNavIsOpen(() => !navIsOpen);
	};

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <div className="min-h-screen">
                <div className="sticky top-0 z-50 lg:fixed lg:w-1/4 bg-[#F2F2F2] text-[#666666] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-screen lg:overflow-y-auto lg:no-scrollbar">
                    <header className="px-4 py-6 flex items-center justify-between lg:hidden">
                        <Link href="/user">
                            <Image
                                src={Logo}
                                alt="Inemoni"
                                quality={100}
                                priority={true}
                            />
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link
                                className="md:not-sr-only md:hidden"
                                href="/user/notifications"
                                aria-label="View notifications"
                            >
                                <Bell size={30} strokeWidth={1} />
                            </Link>

                            <button
                                className="md:not-sr-only md:hidden"
                                type="button"
                                aria-label="Navbar toggle button"
                                onClick={handleNavClick}
                            >
                                {navIsOpen ? (
                                    <X size={30} strokeWidth={1} />
                                ) : (
                                    <MenuIcon size={30} strokeWidth={1} />
                                )}
                            </button>
                        </div>
                    </header>

                    <nav className={`lg:space-y-4 p-4 absolute lg:static top-full z-50 transition-transform duration-500 ease-in-out w-full h-[calc(100vh-100%)] overflow-y-auto no-scrollbar lg:h-full lg:translate-y-0 bg-[#F2F2F2] text-[#666666] ${navIsOpen ? "translate-y-0" : "-translate-y-[200%]"}`}>
                        <div className="px-4 pt-4 bg-[#F2F2F2] lg:block lg:sticky top-0 hidden">
                            <Link className="inline-block" href="/user">
                                <Image
                                    src={Logo}
                                    alt="Inemoni"
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                        </div>

                        <Navigation />
                    </nav>
                </div>

                <div className="lg:space-y-8 lg:w-3/4 lg:ml-[25%] bg-white min-h-screen">
                    <div className="hidden lg:flex flex-wrap items-center gap-4 justify-between lg:sticky lg:top-0 bg-white p-4 lg:ml-[4px] lg:px-8 z-50">
                        <h1 className="header font-normal text-2xl">
                            Welcome back, <span className="font-bold">{ username }</span> 👋
                        </h1>

                        <div className="flex items-center gap-4">
                            <Link href="/user/notifications">
                                <Image src="/img/notification-bell.svg" alt="Your Notifications" width={20} height={20} />
                            </Link>

                            <span className="bg-[#D9D9D9] rounded-full w-11 h-11 px-2 pb-2 py-1.5 text-center text-sm flex items-center place-content-center font-medium text-black">
                                {`${userDetails?.fname?.split("")[0]}${userDetails?.lname?.split("")[0]}`}
                            </span>
                        </div>
                    </div>

                    <div className="p-4 lg:pt-0 pb-8 lg:px-8">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
