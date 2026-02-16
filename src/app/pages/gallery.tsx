"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/src/i18n";

type ImgItem = {
  filename: string;
  src: string;
  // allow titles/descriptions for any locale key (en, es, fr, hi, ja, zh, ...)
  title: Record<string, string>;
  description: Record<string, string>;
};

const GalleryPage: React.FC = () => {
  const { t, locale } = useTranslation();
  const [images, setImages] = useState<ImgItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (!cancelled) setImages(data.images || []);
      } catch (err) {
        console.error('Failed to load gallery', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchImages();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="gallery" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {t.gallery.title}
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </div>

        {(() => {
          if (loading) {
            return <div className="text-center py-16 text-gray-500">Cargando galería...</div>;
          }
          if (images.length === 0) {
            return <div className="text-center py-16 text-gray-500">No hay imágenes en public/aome</div>;
          }
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img, idx) => {
                const captionKey = `img${idx + 1}`;
                type Caption = { title?: string; desc?: string };
                const captions: Record<string, Caption> = t.gallery.captions || {};
                const title = (img.title && img.title[locale]) || captions[captionKey]?.title || img.filename;
                const rawDesc = (img.description && img.description[locale]) || captions[captionKey]?.desc || "";
                let shortDesc: string;
                if (rawDesc) {
                  if (rawDesc.length > 100) {
                    shortDesc = rawDesc.slice(0, 100).trim() + "...";
                  } else {
                    shortDesc = rawDesc;
                  }
                } else {
                  shortDesc = t.gallery.subtitle;
                }

                return (
                  <figure key={img.filename} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="w-full h-56 relative bg-gray-100">
                      <Image src={img.src} alt={title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" loading={idx === 0 ? "eager" : "lazy"} />
                    </div>
                    <figcaption className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                      <p className="text-sm text-gray-500">{shortDesc}</p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default GalleryPage;
