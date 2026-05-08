import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';


export default function NavBarComp() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled
                    ? "bg-white/70 backdrop-blur-md shadow-md"
                    : "bg-transparent"}
        `}
        >
            <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

                <a href="/" className="text-xl font-anton font-semibold">
                    Afdhal<span className="text-yellow-500">.</span>
                </a>

                <ul className="font-roboto hidden md:flex space-x-8 text-gray-600 font-medium">
                    <HashLink className="transition-in duration-150 hover:border-b-2 hover:border-amber-400 hover:font-bold" smooth to="/#header">
                        <li>Home</li>
                    </HashLink>
                    <HashLink className="transition-in duration-150 hover:border-b-2 hover:border-amber-400 hover:font-bold" smooth to="/#about">
                        <li>About</li>
                    </HashLink>
                    <HashLink className="transition-in duration-150 hover:border-b-2 hover:border-amber-400 hover:font-bold" smooth to="/#tech">
                        <li>Skills</li>
                    </HashLink>
                    <HashLink className="transition-in duration-150 hover:border-b-2 hover:border-amber-400 hover:font-bold" smooth to="/#work">
                        <li>Projects</li>
                    </HashLink>
                    <HashLink className="transition-in duration-150 hover:border-b-2 hover:border-amber-400 hover:font-bold" smooth to="/#contact">
                        <li>Contacts</li>
                    </HashLink>
                </ul>

            </div>
        </nav>
    );
}