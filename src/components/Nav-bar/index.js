import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 410) {
                navbar.style.backgroundColor = "#ddd";
            } else {
                navbar.style.backgroundColor = "transparent";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar fixed top-0 left-0 w-full flex justify-between items-center z-10 bg-transparent transition-all duration-300">
            <div className="header flex justify-between w-full px-5 py-3 items-center">
                <div className="nav-logo">
                    <h3 className="text-white text-2xl font-semibold">StoryPlus</h3>
                </div>
                <div className="nav-menu lg:hidden">
                    <button
                        className="text-white text-3xl focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
                <div
                    className={`nav-links lg:flex ${
                        isMenuOpen ? "block" : "hidden"
                    } absolute lg:static top-full left-0 w-full bg-[#333] lg:bg-transparent lg:w-auto lg:mt-0 mt-2 lg:py-0 py-3 z-10`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center list-none m-0 p-0">
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                to="/"
                                className="text-white text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                to="/about"
                                className="text-white text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                to="/popular-stories"
                                className="text-white text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Popular Stories
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                to="/archives"
                                className="text-white text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Archives
                            </Link>
                        </li>
                        <li className="mx-5 my-2 lg:my-0">
                            <Link
                                to="/profile"
                                className="text-white text-lg font-medium hover:text-[#ff7e5f] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
