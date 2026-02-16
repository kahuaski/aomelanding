import fs from 'fs';
import path from 'path';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import en from '@/src/i18n/locales/en';
import es from '@/src/i18n/locales/es';

const publicAomePath = path.join(process.cwd(), 'public', 'aome');
const imageExt = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

export async function GET(request: NextRequest) {
  try {
    const files = fs.existsSync(publicAomePath) ? fs.readdirSync(publicAomePath) : [];
    const images = files
      .filter((f) => imageExt.includes(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((filename, idx) => {
        const src = `/aome/${filename}`;

        // Use provided captions (title + desc) for the first images if available
        const rawEnCap = (en.gallery && en.gallery.captions && (en.gallery.captions as any)[`img${idx + 1}`]);
        const rawEsCap = (es.gallery && es.gallery.captions && (es.gallery.captions as any)[`img${idx + 1}`]);

        const enTitle = rawEnCap && rawEnCap.title ? rawEnCap.title : `Project ${idx + 1}`;
        const esTitle = rawEsCap && rawEsCap.title ? rawEsCap.title : `Proyecto ${idx + 1}`;

        const enDesc = rawEnCap && rawEnCap.desc ? rawEnCap.desc : en.gallery.subtitle;
        const esDesc = rawEsCap && rawEsCap.desc ? rawEsCap.desc : es.gallery.subtitle;

        return {
          filename,
          src,
          title: { en: enTitle, es: esTitle },
          description: { en: enDesc, es: esDesc },
        };
      });

    return NextResponse.json({ images });
  } catch (err) {
    return NextResponse.json({ images: [], error: (err as Error).message }, { status: 500 });
  }
}
