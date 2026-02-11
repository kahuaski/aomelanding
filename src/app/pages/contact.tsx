"use client";

import React from "react";
import ContactForm from "@/src/components/ContactForm";
import { useTranslation } from "@/src/i18n";

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-600/30 to-white py-20">
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl text-white md:text-6xl font-extrabold tracking-tight mb-4">
                        {t.contact.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90">
                        {t.contact.subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600 mb-6">
                                {t.contact.info.heading}
                            </h2>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                {t.contact.info.paragraph}
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-5">
                            {/* Phone */}
                            <div className="flex items-start gap-4 bg-blue-600 rounded-xl p-5 border shadow-md border-gray-200 hover:border-slate-500 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                        {t.contact.info.phoneLabel}
                                    </h3>
                                    <a
                                        href="tel:+14044880557"
                                        className="text-xl font-bold text-white hover:text-yellow-400 transition-colors"
                                    >
                                        +1 (404) 488-0557
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 bg-blue-600 rounded-xl p-5 border shadow-md border-gray-200 hover:border-slate-500 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                        {t.contact.info.emailLabel}
                                    </h3>
                                    <a
                                        href="mailto:Aomeelectricllc@hotmail.com"
                                        className="text-lg font-bold text-white hover:text-yellow-400 transition-colors break-all"
                                    >
                                        Aomeelectricllc@hotmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4 bg-blue-600 rounded-xl p-5 border shadow-md border-gray-200 hover:border-slate-500 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                        {t.contact.info.addressLabel}
                                    </h3>
                                    <p className="text-lg font-bold text-white">
                                        6319 Delnorte Court
                                    </p>
                                    <p className="text-white">Norcross, GA 30093</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4 bg-blue-600 rounded-xl p-5 border shadow-md border-gray-200 hover:border-slate-500 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                                        {t.contact.info.hoursLabel}
                                    </h3>
                                    <p className="text-xl font-bold text-white">
                                        {t.contact.info.open24}
                                    </p>
                                    <p className="text-white">
                                        {t.contact.cta.text}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-turquoise-500/30 rounded-xl p-5 text-center shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 mx-auto mb-2 text-yellow-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
                                    />
                                </svg>
                                <p className="font-bold text-white">{t.contact.badges.residential}</p>
                                <p className="text-sm text-gray-100">Services</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-turquoise-500/30 rounded-xl p-5 text-center shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 mx-auto mb-2 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <p className="font-bold text-white">{t.contact.badges.commercial}</p>
                                <p className="text-sm text-gray-100">Services</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-5 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 mx-auto mb-2 text-green-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <p className="font-bold text-white">{t.contact.badges.freeEstimate}</p>
                                <p className="text-sm text-gray-100">No obligation</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-600/30 rounded-xl p-5 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 mx-auto mb-2 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                <p className="font-bold text-white">{t.contact.badges.licensed}</p>
                                <p className="text-sm text-gray-100">Fully certified</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map + Form */}
                    <div className="space-y-8">
                        {/* Google Maps */}
                        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                            <iframe
                                title="Aome Electric LLC Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5!2d-84.2133!3d33.9283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a574a9de3b0b%3A0x0!2s6319+Delnorte+Ct%2C+Norcross%2C+GA+30093!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>

                        {/* Contact Form (client) */}
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-gradient-to-r from-blue-600 to-turquoise-500 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        {t.contact.cta.title}
                    </h2>
                    <p className="text-lg text-white mb-6">
                        {t.contact.cta.text}
                    </p>
                    <a
                        href="tel:+14044880557"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition-colors shadow-xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        {t.contact.cta.callNow}
                    </a>
                </div>
            </section>

           
        </div>
    );
};

export default Contact;