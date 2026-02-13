"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}

interface CarouselProps {
    images: CarouselImage[];
    autoPlay?: boolean;
    interval?: number;
    height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    images,
    autoPlay = true,
    interval = 4000,
    height = "h-[500px]",
}) => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const goTo = (index: number) => {
        setCurrent(index);
    };

    useEffect(() => {
        if (!autoPlay || isHovered) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, isHovered, next]);

    return (
        <div
            className={`relative w-full ${height} overflow-hidden rounded-2xl group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                >
                    <div className="relative w-full h-full">
                        <Image src={image.src} alt={image.alt} fill className="w-full h-full object-cover" sizes="100vw" />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Caption */}
                    {image.caption && (
                        <div className="absolute bottom-16 left-0 right-0 text-center px-4">
                            <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                                {image.caption}
                            </p>
                        </div>
                    )}
                </div>
            ))}

            {/* Left Arrow */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === current
                                ? "w-8 h-3 bg-white"
                                : "w-3 h-3 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
