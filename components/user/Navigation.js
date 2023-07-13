import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navigation = () => {
    const router = useRouter();

    const paths = router.pathname.split("/");
    const firstPath = `/${paths[1]}/${paths[2]}`;

    const links = [
        {
            name: "Home",
            route: "/user",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/home-icon-active.svg" : "/img/home-icon.svg"
            }
        },
        {
            name: "Send Money",
            route: "/user/transfer",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/send-money-icon-active.svg" : "/img/send-money-icon.svg"
            }
        },
        {
            name: "Cards",
            route: "/user/cards",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/cards-icon-active.svg" : "/img/cards-icon.svg"
            }
        },
        {
            name: "Services",
            route: "/user/services",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/services-icon-active.svg" : "/img/services-icon.svg"
            }
        },
        {
            name: "Transactions",
            route: "/user/transactions",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/transactions-icon-active.svg" : "/img/transactions-icon.svg"
            }
        },
        {
            name: "Referrals",
            route: "/user/referrals",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/referrals-icon-active.svg" : "/img/referrals-icon.svg"
            }
        },
        {
            name: "Support",
            route: "/user/support",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/support-icon-active.svg" : "/img/support-icon.svg"
            }
        },
        {
            name: "Account",
            route: "/user/account",
            get icon() {
                return router.pathname === this.route || this.route === firstPath ? "/img/account-icon-active.svg" : "/img/account-icon.svg"
            }
        },
    ];

    return (
        <ul className="flex flex-col gap-2">
            {links.map((link, id) => (
                <li key={id}>
                    <Link className={`flex items-center gap-4 font-bold btn px-4 ${link.route === router.pathname || firstPath === link.route ? "bg-white text-[#262626]" : "hover:bg-white hover:text-[#262626]"}`} href={link.route}>
                        <Image src={link.icon} alt={link.name} width={20} height={20} priority />

                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
