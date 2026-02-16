"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslation } from "@/src/i18n";

const HiMenu = dynamic(() => import('react-icons/hi').then(m => m.HiMenu), { ssr: false });
const HiX = dynamic(() => import('react-icons/hi').then(m => m.HiX), { ssr: false });

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, locale, toggleLocale } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.about, href: "/about" },
        { name: t.nav.services, href: "/services" },
        { name: t.nav.contact, href: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex flex-row items-center gap-3">
                        <Image src="/aome111.png" alt="Aome Electric LLC Logo" width={40} height={40} className="rounded" priority={false} />
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            AomeElectricllc
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLocale}
                            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-400 px-3 py-1.5 rounded-full transition-all duration-200"
                            aria-label="Toggle language"
                        >
                            <span className="text-base">{locale === "es" ? "🇺🇸" : "🇲🇽"}</span>
                            {locale === "es" ? "EN" : "ES"}
                        </button>
                    </div>

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
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-2 py-1"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                        
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;