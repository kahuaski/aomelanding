"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "@/src/i18n";

const WHATSAPP_NUMBER = "14044880557"; 
const DEFAULT_MESSAGE = "Hola, me gustaría obtener más información sobre sus servicios eléctricos.";

const WhatsAppButton: React.FC = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    const { t } = useTranslation();

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group ring-0 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
            <FaWhatsapp className="w-8 h-8 text-white drop-shadow-sm" />

            {/* Tooltip */}
            <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-md">
                {t.contact.whatsappTooltip}
            </span>
        </a>
    );
};

export default WhatsAppButton;
