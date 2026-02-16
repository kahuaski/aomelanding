"use client";
import React, { useState } from "react";
import { useTranslation } from "@/src/i18n";

const IconStarFilled = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.5 5.366L19.336 24 12 20.125 4.664 24l1.336-8.884L.5 9.75l7.832-1.732L12 .587z" />
  </svg>
);

const IconStarOutline = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
import dynamic from "next/dynamic";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase.config";

const AiOutlineStar = dynamic(() => import('react-icons/ai').then(m => m.AiOutlineStar), { ssr: false });

type Props = {
  page?: string;
};

export default function CommentForm({ page = "general" }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    if (!comment.trim()) {
      setStatusMessage(t.comments.validation_no_comment);
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "comments"), {
        name: name?.trim() || "Anónimo",
        email: email?.trim() || null,
        comment: comment.trim(),
        rating: typeof rating === "number" ? rating : null,
        page,
        createdAt: serverTimestamp(),
      });
      setStatusMessage(t.comments.thank_you);
      setName("");
      setEmail("");
      setComment("");
      setRating(null);
    } catch (err) {
      // eslint-disable-next-line no-console
      setStatusMessage(t.comments.send_error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 w-full flex flex-col justify-items-center items-center max-w-lg px-4 py-6 bg-white rounded-lg shadow-sm border border-slate-200/60">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setRating((prev) => (prev === s ? null : s))}
                  aria-label={`${s} ${t.comments.starLabel}`}
                  className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {rating && rating >= s ? (
                <IconStarFilled className="w-9 h-9 text-blue-600 drop-shadow-md transition-transform transform scale-110" />
              ) : (
                <AiOutlineStar className="w-9 h-9 text-gray-300 hover:text-blue-500 transition-colors hover:scale-105" />
              )}
            </button>
          ))}
         
        </div>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">{t.comments.nameLabel}</label>
        <input
          className="w-54 border rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.comments.namePlaceholder}
        />
      </div>


      <div className="mb-3">
        <label className="block text-sm font-medium">{t.comments.emailLabel}</label>
        <input
          className="w-54 border rounded-lg px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.comments.emailPlaceholder}
          type="email"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium">{t.comments.commentLabel}</label>
        <textarea
          className="w-54 border rounded-lg px-3 py-2 min-h-32 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t.comments.commentPlaceholder}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md disabled:opacity-60"
        >
          {loading ? t.comments.sending : t.comments.submit}
        </button>
        {statusMessage && <p className="text-sm text-gray-700">{statusMessage}</p>}
      </div>
    </form>
  );
}
