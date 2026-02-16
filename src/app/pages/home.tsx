"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/src/i18n";
import Carousel from "@/src/common/Carousel";
import dynamic from "next/dynamic";

const CommentForm = dynamic(() => import("@/src/components/CommentForm"), { ssr: false, loading: () => <div className="p-4">Cargando formulario...</div> });
const CommentsList = dynamic(() => import("@/src/components/CommentsList"), { ssr: false, loading: () => <div className="p-4">Cargando comentarios...</div> });

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-gray-800 font-sans">
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                id="inicio"
            >
                <Image
                    src="/aomeElectric.jpeg"
                    alt="Aome Electric background"
                    priority
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover"
                    width={1920}
                    height={1080}
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
                            <div className="mb-6 rounded-lg overflow-hidden">
                                <Image src="/aome/aome-3.jpeg" alt="Instalación" width={1200} height={800} className="h-[300px] w-full object-cover" sizes="(max-width: 768px) 100vw, 380px" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.webDev.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.webDev.description}
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="mb-6 rounded-lg overflow-hidden">
                                <Image src="/aome/aome-18.jpeg" alt="Reparación" width={1200} height={800} className="h-[300px] w-full object-cover" sizes="(max-width: 768px) 100vw, 380px" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.design.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.design.description}
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="mb-6 rounded-lg overflow-hidden">
                                <Image src="/aome/aome-23.jpeg" alt="Iluminación" width={1200} height={800} className="h-[300px] w-full object-cover" sizes="(max-width: 768px) 100vw, 380px" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.mobile.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {t.services.mobile.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
                            { src: "/aome/aome-25.jpeg", alt: "Instalación", caption: t.gallery.captions.img1.title },
                            { src: "/aome/aome-15.jpeg", alt: "Reparación", caption: t.gallery.captions.img2.title },
                            { src: "/aome/aome-3.jpeg", alt: "Iluminación", caption: t.gallery.captions.img3.title },
                            { src: "/aome/aome-4.jpeg", alt: "Aome Electric", caption: t.gallery.captions.img4.title },
                        ]}
                        autoPlay={true}
                        interval={5000}
                        height="h-[450px] sm:h-[500px]"
                    />
                </div>
            </section>
          
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto px-4 py-8">
    <div className="col-span-full text-center mb-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{t.comments.title}</h2>
        <p className="mt-2 text-gray-500 max-w-3xl mx-auto">{t.comments.description}</p>
    </div>
    <div className="p-4">
        <CommentForm />
    </div>
    <div className="p-4">
        <CommentsList />
    </div>
</div>
        </div>
    );
};

export default Home;