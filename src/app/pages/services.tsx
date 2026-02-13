"use client";

import React, { useState } from 'react';
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

export default function Services() {
    const [activeId, setActiveId] = useState<string | null>(null);
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
                                const isActive = activeId === service.id;
                                return (
                                <div
                                        key={service.id}
                                        onClick={() => setActiveId(isActive ? null : service.id)}
                                        className={`${service.span} group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                                >
                                        <Image
                                                src={service.image}
                                    alt={service.title}
                                                fill
                                                className={`object-cover ${isActive ? 'scale-105' : 'group-hover:scale-105'} transition-transform duration-300`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                        {/* Default compact info */}
                                        {!isActive && (
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                                <h3 className="text-xl font-bold mb-2 group-hover:translate-y-1 transition-transform">
                                                    {t.services.items[parseInt(service.id, 10) - 1]?.title ?? service.title}
                                                </h3>
                                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {t.services.items[parseInt(service.id, 10) - 1]?.description ?? service.description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Expanded info when clicked */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-black/70 p-6 text-white flex flex-col">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-2xl font-bold">{t.services.items[parseInt(service.id, 10) - 1]?.title ?? service.title}</h3>
                                                        <p className="mt-2 text-sm text-gray-200 max-w-prose">{t.services.items[parseInt(service.id, 10) - 1]?.description ?? service.description}</p>
                                                    </div>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                                                        className="ml-4 text-white bg-white/10 hover:bg-white/20 rounded px-3 py-1"
                                                    >Cerrar</button>
                                                </div>
                                                <div className="mt-4 text-sm text-gray-300">
                                                    <p>{t.services.moreInfo}</p>
                                                </div>
                                            </div>
                                        )}
                                </div>
                                );
                        })}
                </div>
            </div>
        </section>
    );
}