import Link from "next/link";

const HeroText = () => {
    return (
        <div className="w-1/2 space-y-4">
            <h1 className="header">
                <span className="text-brand-purple">Financial Services</span> at your <span className="text-brand-orange">Doorsteps.</span>
            </h1>

            <p>
                Inemoni gives you free and easy access to financial services. Our watchword while creating an avenue for our agents to make money using our amazing services.
            </p>

            <div className="flex items-center gap-4">
                <Link className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in" href="/">
                    Download App
                </Link>

                <Link className="bg-brand-gray btn px-8 block hover:bg-brand-navlink hover:text-white transition-colors duration-300 ease-in" href="/">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default HeroText;