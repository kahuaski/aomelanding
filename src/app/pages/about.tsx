"use client";

import React from "react";
import { FiCheckCircle, FiTool, FiClock, FiDollarSign, FiHome, FiStar } from "react-icons/fi";
import { HiLightningBolt } from "react-icons/hi";
import { useTranslation } from "@/src/i18n";
import RatingSummary from "../../components/RatingSummary";
import Image from "next/image";

const About: React.FC = () => {
    const { t } = useTranslation();

    const values = [
        { icon: <FiCheckCircle className="w-7 h-7 text-blue-600" />, label: t.about.values.licensed },
        { icon: <FiTool className="w-7 h-7 text-blue-600" />, label: t.about.values.experts },
        { icon: <FiClock className="w-7 h-7 text-blue-600" />, label: t.about.values.availability },
        { icon: <FiDollarSign className="w-7 h-7 text-blue-600" />, label: t.about.values.pricing },
        { icon: <FiHome className="w-7 h-7 text-blue-600" />, label: t.about.values.residential },
        { icon: <FiStar className="w-7 h-7 text-blue-600" />, label: t.about.values.satisfaction },
    ];

    const stats = [
        { number: "10+", label: t.about.stats.experience },
        { number: "500+", label: t.about.stats.projects },
        { number: "300+", label: t.about.stats.clients },
        { number: "100%", label: t.about.stats.rate },
    ];

    return (
        <section id="about" className="bg-white">
            <div className="max-w-7xl mx-auto px-5 py-20 sm:py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        {t.about.sectionTitle} <span className="text-blue-500">{t.about.brand}</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Image / Icon */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        {/* Bento-style gallery: 2 large panels on top, smaller tiles below on wide screens */}
                        <div className="w-full max-w-lg">
                            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 h-96 lg:h-105">
                                {[
                                    '/aome/aome-11.jpeg',
                                    '/aome/aome-22.jpeg',
                                    '/aome/aome-3.jpeg',
                                    '/aome/aome-4.jpeg',
                                    '/aome/aome-12.jpeg',
                                    '/aome/aome-18.jpeg',
                                ].map((src, i) => (
                                    <div
                                        key={src}
                                        className={`${i < 2 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} rounded-2xl overflow-hidden shadow-md bg-gray-100 h-full`}
                                    >
                                                <div className="relative w-full h-full">
                                                    <Image src={src} alt={`Gallery ${i + 1}`} fill className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" sizes="(max-width: 1024px) 50vw, 380px" />
                                                </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                            {t.about.subtitle}
                        </h3>
                        <p className="text-lg text-gray-500 leading-relaxed mb-5">
                            {t.about.description1}
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            {t.about.description2}
                        </p>

                        {/* Values (photon-style icons with label below) */}
                        <div className="flex flex-wrap gap-6">
                            {values.map((item, index) => (
                                <div key={index} className="flex flex-col items-center w-28">
                                                <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                                                    {/* lightning badge */}
                                                    <div className="absolute top-2 right-2 bg-yellow-400 text-white rounded-full p-1 shadow-sm">
                                                        <HiLightningBolt className="w-4 h-4" />
                                                    </div>
                                                    {/* main icon */}
                                                    <div className="relative text-2xl text-blue-600">{item.icon}</div>
                                                </div>
                                    <span className="mt-3 text-center text-sm font-semibold text-gray-900">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats + Ratings */}
                <div className="flex flex-wrap justify-center gap-6 mt-20 p-8 bg-blue-600 rounded-2xl shadow-xl">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center min-w-37.5">
                            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-white text-base">{stat.label}</p>
                        </div>
                    ))}
                    {/* Rating summary component */}
                    <div className="text-center min-w-37.5">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;