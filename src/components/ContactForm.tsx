"use client";

import React from "react";
import { useTranslation } from "@/src/i18n";

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const mailtoLink = `mailto:Aomeelectricllc@hotmail.com?subject=${encodeURIComponent(
      `Free Estimate Request from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    )}`;
    if (typeof globalThis !== "undefined") {
      globalThis.location.href = mailtoLink;
    }
  };

  return (
    <div className="bg-blue-100/40 rounded-xl p-8 border border-slate-200/60">
      <h3 className="text-2xl font-bold text-black mb-6">{t.contact.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">{t.contact.namePlaceholder}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            placeholder={t.contact.namePlaceholder}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">{t.contact.emailPlaceholder}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-1">Service Type</label>
          <select id="service" name="service" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition">
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="emergency">Emergency (24/7)</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">{t.contact.messagePlaceholder}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
            placeholder={t.contact.messagePlaceholder}
          />
        </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-yellow-500/25">{t.contact.submit}</button>
      </form>
    </div>
  );
}
