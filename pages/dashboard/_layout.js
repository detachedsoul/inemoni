import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/img/logo.svg";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <div className="">
                <div className="lg:fixed lg:w-1/4 bg-[#F2F2F2] text-[#666666] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-screen overflow-y-auto no-scrollbar">
                    <header className="lg:hidden">

                    </header>

                    <nav className="space-y-4 px-4 pb-4">
                        <div className="px-4 pt-4 bg-[#F2F2F2] sticky top-0">
                            <Link className="inline-block" href="/dashboard">
                                <Image
                                    src={Logo}
                                    alt="Inemoni"
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                        </div>

                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link className="flex items-center gap-4 font-bold btn px-4 bg-white text-[#262626]" href="/dashboard">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/dashboard">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Send Money
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/dashboard">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Cards
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/services">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/services">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Transactions
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/services">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Referrals
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/services">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Support
                                </Link>
                            </li>

                            <li>
                                <Link className="flex items-center gap-4 btn px-4 font-normal transition-color ease-in duration-100 hover:bg-white hover:text-[#262626] hover:font-bold" href="/services">
                                    <Image src="/img/home-icon.png" alt="Home" width={20} height={20} />

                                    Account
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="space-y-8 lg:w-3/4 lg:ml-[25%] bg-white min-h-screen">
                    <div className="flex flex-wrap items-center gap-4 justify-between sticky top-0 bg-white p-4 ml-[4px]">
                        <h1 className="text-2xl">
                            Welcome back, <span className="font-bold">Wisdom</span> 👋
                        </h1>

                        <div className="flex items-center gap-4">
                            <Link href="/dashboard">
                                <Image src="/img/notification-bell.png" alt="Your Notifications" width={20} height={20} />
                            </Link>

                            <span className="bg-[#D9D9D9] rounded-full px-2.5 py-3 font-medium text-black text-sm">
                                WO
                            </span>
                        </div>
                    </div>

                    <div className="px-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
