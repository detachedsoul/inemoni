import Link from "next/link";

const GetStarted = () => {
    return (
        <section className="bg-brand-dark-purple p-[6%] sm:px-[4%] rounded-3xl text-white mx-[5%] mt-[5%] xl:mx-[7%]">
            <div className="md:w-3/5 space-y-6 md:space-y-8">
                <h2 className="header-secondary">
                    Ready to get started?
                </h2>

                <p>
                    We build the best financial infrastructure and provide the best technology to keep our services 99% uptime. Create an account now!
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link className="bg-white text-brand-dark-purple btn block" href="/">
                        Get Started
                    </Link>

                    <Link className="text-white btn block" href="/">
                        Contact Support
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;