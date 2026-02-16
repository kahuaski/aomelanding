"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslation } from "@/src/i18n";

const FiPhone = dynamic(() => import('react-icons/fi').then(m => m.FiPhone), { ssr: false });
const FiMail = dynamic(() => import('react-icons/fi').then(m => m.FiMail), { ssr: false });
const FiMapPin = dynamic(() => import('react-icons/fi').then(m => m.FiMapPin), { ssr: false });
const FaFacebookF = dynamic(() => import('react-icons/fa').then(m => m.FaFacebookF), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(m => m.FaInstagram), { ssr: false });
const FaTiktok = dynamic(() => import('react-icons/fa').then(m => m.FaTiktok), { ssr: false });
const FaYoutube = dynamic(() => import('react-icons/fa').then(m => m.FaYoutube), { ssr: false });

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">Aome Electric LLC</h3>
                        <p className="text-gray-100 leading-relaxed mb-6">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-white hover:text-amber-400 transition-colors duration-200">
                                    {t.nav.home}
                                </Link>
                            </li>
                            <li><a href="/about" className="text-white hover:text-amber-400 transition-colors duration-200">{t.nav.about}</a></li>
                            <li><a href="/services" className="text-white hover:text-amber-400 transition-colors duration-200">{t.nav.services}</a></li>
                            <li><a href="/contact" className="text-white hover:text-amber-400 transition-colors duration-200">{t.nav.contact}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">{t.footer.contactInfo}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiPhone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-white font-medium">+1 (404) 488-0557</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="mailto:Aomeelectricllc@hotmail.com" className="text-white font-medium hover:text-amber-400 transition-colors">Aomeelectricllc@hotmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                <p className="text-white font-medium">6319 Delnorte court Norcross ga 30093</p>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">{t.footer.followUs}</h4>
                        <div className="flex flex-wrap gap-3">
                            {/* Facebook */}
                            <a href="https://facebook.com/Chrisstdj91" target="_blank" rel="noopener noreferrer" aria-label="Aome Electric on Facebook" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
                                <FaFacebookF className="w-5 h-5 text-white" />
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/aome_electric_llc?igsh=aXMwNDlrbXFzZ3Fs  " target="_blank" rel="noopener noreferrer" aria-label="Aome Electric on Instagram" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
                                <FaInstagram className="w-5 h-5 text-white" />
                            </a>
                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@chrisstdj?_r=1&_t=ZP-93msowKdu87" target="_blank" rel="noopener noreferrer" aria-label="Aome Electric on TikTok" className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md border border-transparent hover:border-white">
                                <FaTiktok className="w-5 h-5 text-white" />
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Aome Electric on YouTube" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
                                <FaYoutube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
                <div className="border-t border-gray-100/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-100">
                        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Aome Electric LLC</span>. {t.footer.rights}
                    </p>
                    <p className="text-sm text-gray-100">
                        {t.footer.developedBy} <a href="https://github.com/kahuaski" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 rounded">kahuaski</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
