"use client";

import React from "react";
import { useTranslation } from "@/src/i18n";
import About from "./about";
import Carousel from "@/src/common/Carousel";

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-gray-800 font-sans">
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                id="inicio"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/aomeElectric.jpeg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/60 to-yellow-900/50" />

                <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative z-10 text-center px-4 justify-center max-w-3xl mx-auto flex flex-col">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                        {t.hero.welcome}<br /><span className=" decoration-4 underline-offset-4">{t.hero.brand}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.description}
                    </p>
                    <a
                        href="#servicios"
                        className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
                    >
                        {t.hero.cta}
                    </a>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-10 sm:py-14 bg-gray-50" id="servicios">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                        {t.services.title}
                    </h2>
                    <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
                        {t.services.subtitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <img src="/instalacion.jpeg" alt="Instalación" className="mb-6 rounded-lg h-[300px] w-full object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.webDev.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.webDev.description}
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <img src="/reparacion.jpeg" alt="Reparación" className="mb-6 rounded-lg h-[300px] w-full object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.design.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.design.description}
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <img src="/iluminacion.jpeg" alt="Iluminación" className="mb-6 rounded-lg h-[300px] w-full object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.mobile.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.mobile.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería / Carrusel */}
            <section className="py-10 sm:py-14 bg-gray-50" id="galeria">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                        {t.gallery.title}
                    </h2>
                    <p className="text-center text-gray-500 mb-4 max-w-xl mx-auto">
                        {t.gallery.subtitle}
                    </p>
                    <Carousel
                        images={[
                            { src: "/instalacion.jpeg", alt: "Instalación", caption: t.gallery.captions.img1 },
                            { src: "/reparacion.jpeg", alt: "Reparación", caption: t.gallery.captions.img2 },
                            { src: "/iluminacion.jpeg", alt: "Iluminación", caption: t.gallery.captions.img3 },
                            { src: "/aomeElectric.jpeg", alt: "Aome Electric", caption: t.gallery.captions.img4 },
                        ]}
                        autoPlay={true}
                        interval={5000}
                        height="h-[450px] sm:h-[500px]"
                    />
                </div>
            </section>
            {/* Nosotros */}
            <section className="py-20 sm:py-28 bg-white" id="nosotros">
                    <About />
            </section>


            {/* Contacto */}
            <section className="py-20 sm:py-28 bg-gray-50" id="contacto">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
                        {t.contact.title}
                    </h2>
                    <p className="text-center text-gray-500 mb-12">
                        {t.contact.subtitle}
                    </p>
                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder={t.contact.namePlaceholder}
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-sm hover:shadow-md"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder={t.contact.emailPlaceholder}
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-sm hover:shadow-md"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder={t.contact.messagePlaceholder}
                                rows={5}
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-sm hover:shadow-md resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg"
                        >
                            {t.contact.submit}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;