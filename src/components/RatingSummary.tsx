"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../services/firebase.config";

type Summary = {
  average: number;
  percentage: number;
  count: number;
};

export default function RatingSummary({ page = "general" }: { page?: string }) {
  const [summary, setSummary] = useState<Summary>({ average: 0, percentage: 0, count: 0 });

  useEffect(() => {
    const q = query(collection(db, "comments"));
    const unsub = onSnapshot(q, (snap) => {
      const ratings: number[] = [];
      snap.forEach((doc) => {
        const data = doc.data() as any;
        if (data && typeof data.rating === "number") {
          // if page filtering is desired, check data.page === page
          if (!page || data.page === page || page === "general") ratings.push(data.rating);
        }
      });
      const count = ratings.length;
      const average = count ? ratings.reduce((a, b) => a + b, 0) / count : 0;
      const percentage = Math.round((average / 5) * 100);
      setSummary({ average, percentage, count });
    });
    return () => unsub();
  }, [page]);

  return (
    <div className="text-center min-w-[150px] p-4 bg-white/10 rounded">
      <h4 className="text-sm text-white/90">Calificaciones</h4>
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="text-3xl font-bold text-white">{summary.percentage}%</div>
        <div className="text-sm text-white/80">({summary.count} opiniones)</div>
      </div>
      <div className="mt-2 text-sm text-white/80">Promedio: {summary.average.toFixed(1)} / 5</div>
    </div>
  );
}
