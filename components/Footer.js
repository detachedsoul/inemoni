import Image from "next/image";
import Link from "next/link";
import NigeriaFlag from "@assets/img/nigeria-flag.svg";;

const Footer = () => {
    const footerLinks = [
        {
            linkGroup: "Company",
            links: [
                {
                    linkName: "Cash Withdrawal",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Money Transfer",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Pay Bills",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Savings",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Careers",
                    isLink: true,
                    route: "/"
                }
            ]
        },
        {
            linkGroup: "Developers",
            links: [
                {
                    linkName: "Api Documentation",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "API Status",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "API Reference",
                    isLink: true,
                    route: "/"
                }
            ]
        },
        {
            linkGroup: "Support",
            links: [
                {
                    linkName: "Give Us Feedback",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Help Center",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Live Chat",
                    isLink: true,
                    route: "/"
                }
            ]
        },
        {
            linkGroup: "Resources",
            links: [
                {
                    linkName: "FAQ",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "Blog",
                    isLink: true,
                    route: "/"
                }
            ]
        },
        {
            linkGroup: "Contact",
            links: [
                {
                    linkName: "support@inemoni.com",
                    isLink: true,
                    route: "/"
                },
                {
                    linkName: "No. 67 Bakori road, FHA, Kubwa, Abuja",
                    isLink: false,
                    route: null
                }
            ]
        }
    ];

    return (
        <footer className="p-[5%] bg-white">
            <div className="grid grid-cols-5 gap-4 border-b border-footer-border pb-12">
                {footerLinks.map((footerLink, id) => (
                    <ul className="space-y-4" key={id}>
                        <h4 className="font-semibold">
                            {footerLink.linkGroup}
                        </h4>

                        {footerLink.links.map((link, id) => (
                            link.isLink ? (
                                <li key={id}>
                                    <Link className="hover:text-brand-navlink" href={link.route}>
                                        {link.linkName}
                                    </Link>
                                </li>
                            ) : (
                                <li key={id}>
                                    {link.linkName}
                                </li>
                            )
                        ))}
                    </ul>
                ))}
            </div>

            <div className="flex items-center justify-between gap-4 py-[2%]">
                <span className="flex items-center gap-4">
                    <Image className="rounded-full" src={NigeriaFlag} alt="Nigeria's flag" />
                    Nigeria
                </span>

                <ul className="flex items-center gap-8">
                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Twitter
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Instagram
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Facebook
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Linkedin
                        </Link>
                    </li>
                </ul>
            </div>

             <div className="flex items-center justify-between gap-4 py-[2%] border-t border-footer-border pt-8">
                <span className="flex items-center gap-4">
                    &copy; 2022 Inemoni. All right reserved.
                </span>

                <ul className="flex items-center gap-8">
                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Privacy Policy
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-brand-navlink" href="/">
                            Terms of Use
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;