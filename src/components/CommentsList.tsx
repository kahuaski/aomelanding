"use client";

import React, { useEffect, useState } from "react";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { useTranslation } from "@/src/i18n";

type CommentItem = {
  id: string;
  name?: string;
  email?: string | null;
  phone?: string | null;
  comment: string;
  starts?: number | null;
  page?: string;
  createdAt?: Date | null;
};

export default function CommentsList({ page }: { page?: string }) {
  const { t, locale } = useTranslation();
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const col = collection(db, "comments");
    const q = page
      ? query(col, where("page", "==", page), orderBy("createdAt", "desc"))
      : query(col, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setLoading(true); 
        const items = snapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            name: data.name || "Anónimo",
            email: data.email || null,
            phone: data.phone || null,
            comment: data.comment || "",
            starts: typeof data.starts === "number" ? data.starts : null,
            page: data.page || null,
            createdAt: data.createdAt && data.createdAt.toDate ? data.createdAt.toDate() : data.createdAt || null,
          } as CommentItem;
        });
        setComments(items);
        setLoading(false);
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.error("Comments listener error:", err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [page]);

  if (loading) return <p>{t.comments.loading}</p>;
  if (!comments.length) return <p>{t.comments.none}</p>;

  return (
    <div className="space-y-4 m-5">
      {comments.map((c) => (
        <div key={c.id} className="p-3 border-2 border-slate-200 rounded shadow-sm bg-blue-200/20 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm font-medium"><AiOutlineUser /> {t.comments.nameLabel}: {c.name}</div>
            <div className="text-xs text-gray-500">
              {c.createdAt ? new Date(c.createdAt).toLocaleString(locale) : "—"}
            </div>
          </div>

          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const s = i + 1;
              return c.starts && c.starts >= s ? (
                <AiFillStar key={s} className="text-yellow-400" />
              ) : (
                <AiOutlineStar key={s} className="text-gray-300" />
              );
            })}
            {c.phone && <div className="ml-3 text-xs text-gray-600"><MdContactPhone /> {t.comments.phoneLabel}: {c.phone}</div>}
          </div>

          <div className="text-sm">{c.comment}</div>
        </div>
      ))}
    </div>
  );
}
