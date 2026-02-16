"use client";

import  { useState } from 'react';
import { useTranslation } from '@/src/i18n';
import Image from 'next/image';

interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    span?: string;
}
const services: Service[] = [
    {
        id: '1',
        title: 'Instalaciones Eléctricas Completas',
        description: 'Proyectos de instalación eléctrica integral para residencial y comercial',
        image: '/aome/aome-10.jpeg',
        span: 'col-span-2 row-span-2',
    },
    {
        id: '2',
        title: 'Reparaciones Eléctricas',
        description: 'Diagnóstico y reparación de problemas eléctricos',
        image: '/aome/aome-20.jpeg',
        span: 'col-span-1',
    },
    {
        id: '3',
        title: 'Actualización de Instalaciones',
        description: 'Modernización de sistemas eléctricos antiguos',
        image: '/aome/aome-3.jpeg',
        span: 'col-span-1',
    },
    {
        id: '4',
        title: 'Iluminación Profesional',
        description: 'Diseño e instalación de sistemas de iluminación LED',
        image: '/aome/aome-14.jpeg',
        span: 'col-span-2',
    },
   {
        id: '5',
        title: 'Iluminación Profesional',
        description: 'Diseño e instalación de sistemas de iluminación LED',
        image: '/aome/aome-24.jpeg',
        span: 'col-span-2',
    },
   {
        id: '6',
        title: 'Iluminación Profesional',
        description: 'Diseño e instalación de sistemas de iluminación LED',
        image: '/aome/aome-8.jpeg',
        span: 'col-span-2',
    },
   
];

interface Translation {
    services?: {
        items?: { title?: string; description?: string }[];
        headline?: string;
        lead?: string;
    };
    gallery?: {
        captions?: Record<string, { title?: string; desc?: string } | undefined>;
    };
}

function CaptionFromSrc({ src, t, fallbackSrc }: Readonly<{ src: string; t: Translation; fallbackSrc?: string }>) {
    // try to extract number from filenames like aome-10.jpeg or aome10.png or aome-30.mp4
    const m = src.match(/aome[-_]?([0-9]{1,3})/i) || src.match(/aome([0-9]{1,3})/i);
    const key = m ? `img${m[1]}` : null;
    const caption = key && t?.gallery?.captions ? t.gallery.captions[key] : null;

    if (caption) {
        return (
            <div>
                <h4 className="text-lg font-semibold">{caption.title}</h4>
                <p className="mt-1 text-sm text-gray-200">{caption.desc}</p>
            </div>
        );
    }

    // fallback: try to use services mapping or filename
    return (
        <div>
            <h4 className="text-lg font-semibold">{fallbackSrc}</h4>
        </div>
    );
}

export default function Services() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const { t } = useTranslation();
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t.services.headline}</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">{t.services.lead}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                        {services.map((service) => {
                                return (
                                <div
                                        key={service.id}
                                        onClick={() => setModalSrc(service.image)}
                                        className={`${service.span} group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                                >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            priority={service.id === '1'}
                                            fetchPriority={service.id === '1' ? 'high' : 'auto'}
                                            className={`object-cover group-hover:scale-105 transition-transform duration-300`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                        {/* Compact info overlay */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                            <h3 className="text-xl font-bold mb-2 group-hover:translate-y-1 transition-transform">
                                                {t.services.items[parseInt(service.id, 10) - 1]?.title ?? service.title}
                                            </h3>
                                            <p className="text-sm text-gray-200 opacity-90">
                                                {t.services.items[parseInt(service.id, 10) - 1]?.description ?? service.description}
                                            </p>
                                        </div>
                                </div>
                                );
                        })}
                </div>

                {/* Lightbox modal */}
                {modalSrc && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setModalSrc(null)}>
                        <div className="relative max-w-5xl w-full max-h-[90vh] bg-black" onClick={(e) => e.stopPropagation()}>
                            {modalSrc.endsWith('.mp4') ? (
                                <video src={modalSrc} controls className="w-full h-auto max-h-[80vh] object-contain bg-black" />
                            ) : (
                                <img src={modalSrc} alt="preview" className="w-full h-auto max-h-[80vh] object-contain" />
                            )}

                            {/* Caption bar (Bento style) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:w-[95%] bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                                <div className="max-w-4xl mx-auto">
                                    {/* derive caption key from filename e.g. aome-10.jpeg -> img10 */}
                                    <CaptionFromSrc src={modalSrc} t={t} fallbackSrc={modalSrc} />
                                </div>
                            </div>

                            <button
                                onClick={() => setModalSrc(null)}
                                className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 rounded px-3 py-1"
                            >Cerrar</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}