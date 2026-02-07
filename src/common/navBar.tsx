"use client";

import React, { useState } from "react";
import { useTranslation } from "@/src/i18n";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, locale, toggleLocale } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: t.nav.home, href: "#inicio" },
        { name: t.nav.about, href: "#conocenos" },
        { name: t.nav.services, href: "#servicios" },
        { name: t.nav.contact, href: "#contacto" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#inicio" className="text-2xl font-bold text-blue-600">
                            AomeElectricllc
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#registrate"
                            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
                        >
                            {t.nav.register}
                        </a>
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLocale}
                            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-400 px-3 py-1.5 rounded-full transition-all duration-200"
                            aria-label="Toggle language"
                        >
                            <span className="text-base">{locale === "es" ? "🇺🇸" : "🇲🇽"}</span>
                            {locale === "es" ? "EN" : "ES"}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLocale}
                            className="flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-300 px-2 py-1 rounded-full"
                            aria-label="Toggle language"
                        >
                            <span>{locale === "es" ? "🇺🇸" : "🇲🇽"}</span>
                            {locale === "es" ? "EN" : "ES"}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-2 py-1"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#registrate"
                                onClick={() => setIsOpen(false)}
                                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                            >
                                {t.nav.register}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;