"use client";

import React from "react";
import { useTranslation } from "@/src/i18n";

const About: React.FC = () => {
    const { t } = useTranslation();

    const values = [
        { icon: "✅", label: t.about.values.licensed },
        { icon: "🔧", label: t.about.values.experts },
        { icon: "⏰", label: t.about.values.availability },
        { icon: "💰", label: t.about.values.pricing },
        { icon: "🏠", label: t.about.values.residential },
        { icon: "⭐", label: t.about.values.satisfaction },
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
                        {t.about.sectionTitle} <span className="text-amber-500">{t.about.brand}</span>
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Image / Icon */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-lg h-[350px] bg-gray-900 rounded-2xl flex items-center justify-center shadow-xl">
                              <img src="/about.jpeg" alt="About Us" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
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

                        {/* Values */}
                        <div className="flex flex-wrap gap-4">
                            {values.map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-10 mt-20 p-10 bg-gray-900 rounded-2xl shadow-xl">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center min-w-[150px]">
                            <h3 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-gray-400 text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;