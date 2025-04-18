"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white py-3 px-4 shadow-lg">
            <ul className="flex justify-between">
                <li>
                    <Link href="/">
                        <IoHomeOutline size={24} className={pathname === "/" ? "text-red-300" : "text-neutral-400"} />
                    </Link>
                </li>
                <li>
                    <Link href="favoritsView">
                        <FaRegStar size={24} className={pathname === "/favoritsView" ? "text-red-300" : "text-neutral-400"} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <FaRegMessage size={24} className="text-neutral-400" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <VscAccount size={24} className="text-neutral-400" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
