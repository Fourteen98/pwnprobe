import React from "react";

interface NavbarProp {
    setBreachModalOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}
const Navbar: React.FC<NavbarProp> = ({setBreachModalOpen}) => {
    return (
        <>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                    </button>

                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item>
                        <a
                            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            href="#">
                            <h1 className="logo">PwnProbe</h1>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <a href="#" onClick={() => setBreachModalOpen(true)} className="btn btn-primary">
                            <h1 className="text-xl  font-bold">Notify Me!</h1>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;