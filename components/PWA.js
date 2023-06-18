import { X } from "lucide-react";
import {useEffect, useState} from "react";

const PWA = () => {
    const [isActive, setIsActive] = useState(false);
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        if (isActive) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }

        const handler = (e) => {
            e.preventDefault();

            setIsActive(() => true);

            setSupportsPWA(true);

            setPromptInstall(e);
        };

        // Show the PWA installation banner if all requirements are met
        window.addEventListener("beforeinstallprompt", handler);

        // Close the banner once the PWA is installed
        window.addEventListener("appinstalled", () => {
            setIsActive(() => false);
        });

        return () => window.removeEventListener("transitionend", handler);

    }, [isActive]);

    const installPWA = (e) => {
        e.preventDefault();

        if (!promptInstall) {
            return;
        }

        promptInstall.prompt();
    };

    return supportsPWA ? (
        <div
            className={ `fixed top-0 bottom-0 left-0 z-[1024] flex h-full w-full flex-col place-content-center bg-black/60 transition-transform duration-500 ease-linear ${isActive ? "translate-y-0" : "translate-y-full"
                }` }
        >
            <div className="z-[1024] ml-[5%] w-[calc(100%-10%)] rounded-2xl bg-white text-center min-[500px]:ml-[calc((100%-60%)/2)] min-[500px]:w-3/5 min-[600px]:ml-[calc((100%-50%)/2)] min-[600px]:w-1/2 lg:ml-[calc((100%-30%)/2)] lg:w-[30%]">
                <div className="flex items-center justify-between px-4 py-2 bg-white rounded-t-2xl">
                    <h1 className="header text-xl">
                        Install PWA App
                    </h1>

                    <button className="bg-[#F2F2F2] rounded-lg p-2" type="button" onClick={ () => setIsActive(() => false) }>
                        <X size={ 20 } />
                    </button>
                </div>

                <div className="p-4 rounded-b-2xl bg-[#F2F2F2] space-y-4">
                    <p>
                        This site can be installed as an application. Click “Install” to install this site as a PWA.
                    </p>

                    <button className="btn bg-brand-purple text-white hover:bg-brand-dark-purple transition-colors duration-300 ease-in rounded-lg py-1" type="button" onClick={installPWA}>
                        Install
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default PWA;
