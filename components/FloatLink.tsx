'use client';
import Link from "next/link";
import { useState } from "react";

const FloatLink = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                className={`fixed z-50 bottom-6 right-6 p-2 pb-12 rounded-lg bg-primary shadow-md base-font text-white transition-all duration-150 ${
                    isOpen ? "opacity-1 visible" : "opacity-0 invisible"
                }`}
            >
                <ul>
                    <li>
                        <Link href="/">
                            <span className="link">TOP</span>
                        </Link>
                        <Link href="/effects">
                            <span className="link">配信背景エフェクト</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div
                className={`fixed z-50 inline-block bottom-6 right-6 bg-primary rounded-lg`}
            >
                <button
                    onClick={handleClick}
                    className="w-12 h-12"
                    value="menu"
                >
                    <span
                        className={`absolute left-1/2 -translate-x-1/2 h-1 w-6 bg-white transition-all ease-in-out duration-300  ${
                            isOpen ? "rotate-45" : "rotate-0 -translate-y-2"
                        }`}
                    ></span>
                    <span
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 w-6 bg-white transition-all ease-in-out duration-100 ${
                            isOpen ? "invisible" : "visible"
                        }`}
                    ></span>
                    <span
                        className={`absolute left-1/2 -translate-x-1/2 h-1 w-6 bg-white transition-all ease-in-out duration-300 ${
                            isOpen ? "-rotate-45" : "rotate-0 translate-y-2"
                        }`}
                    ></span>
                </button>
            </div>
        </>
    );
};
export default FloatLink;
