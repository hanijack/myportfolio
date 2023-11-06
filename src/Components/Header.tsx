"use client"


import React, { useEffect } from "react";
import Link from "next/link"
import Theme from "./Theme";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai"


const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    function openMenu() {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return null
    }
    return (
        <header className="fixed top-0 w-full z-30 mb-16 bg-white/75 py-6 dark:bg-[#20232a]/75  ">
            <nav className="hidden  mx-auto md:flex w-full max-w-3xl flex-row-reverse items-center justify-between px-6">
                <h2 className="slogan">
                    <Link href="/">MD</Link>
                </h2>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <Theme />
                </i>
                <ul className="flex justify-between w-2/4 ">
                    <li>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="nav-link">
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="md:hidden flex mx-auto justify-between items-center px-4">
                <h2>
                    <Link className="slogan" href="/">MD</Link>
                </h2>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <Theme />
                </i>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <AiOutlineMenu
                    onClick={() => openMenu()} />
                </i>
            
                
                <ul className={`absolute p-16 top-0 right-0 flex flex-col  justify-between items-end h-screen bg-[#20232a] w-2/3 ease-out duration-300  `} style={{ right: isOpen ? "0" : "-100vw" }}>

                    <i className="text-2xl hover:text-[#3e93d5] cursor-pointer">

                        <AiOutlineCloseCircle

                            onClick={() => { setIsOpen(false) }} />

                    </i>
                    <li>
                        <Link href="/" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>


            </nav>
        </header>
    );
};

export default Header;

// get navlin active state and hover state 