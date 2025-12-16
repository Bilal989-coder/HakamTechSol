// 'use client';

// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// export type CaseTag = { label: string; tone?: 'neutral' | 'green' | 'blue' | 'orange' };
// export type Metric = { value: string; label: string };

// export type CaseStudyItem = {
//   title: string;
//   description: string;
//   image: StaticImageData | string;
//   imageAlt?: string;
//   tags?: CaseTag[];
//   metrics?: Metric[];
//   cta?: { label: string; href: string };
// };

// type Props = {
//   heading?: string;
//   items: CaseStudyItem[];
// };

// const toneBg = {
//   neutral: 'var(--pill-bg)',
//   green: '#d2f5df',
//   blue: '#dbe9ff',
//   orange: '#ffe3c9',
// };

// export default function CaseStudy({ heading = 'Case Studies', items }: Props) {
//   return (
//     <section className="cs-wrap">
//       <div className="container">
//         <h2 className="sec-heading">{heading}</h2>

//         <div className="list">
//           {items.map((it, i) => {
//             const invert = i % 2 === 1; // alternate layout like reference
//             return (
//               <article key={i} className={`row ${invert ? 'invert' : ''}`}>
//                 <div className="media">
//                   <div className="imgWrap">
//                     <Image
//                       src={it.image}
//                       alt={it.imageAlt || it.title}
//                       fill
//                       sizes="(min-width: 1200px) 720px, 100vw"
//                       className="img"
//                     />
//                   </div>
//                 </div>

//                 <div className="content">
//                   <h3 className="title">{it.title}</h3>

//                   {!!it.tags?.length && (
//                     <div className="tags">
//                       {it.tags.map((t, idx) => (
//                         <span
//                           key={idx}
//                           className="tag"
//                           style={{
//                             background: toneBg[t.tone || 'neutral'],
//                           }}
//                         >
//                           {t.label}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <p className="desc">{it.description}</p>

//                   {!!it.metrics?.length && (
//                     <div className="metrics">
//                       {it.metrics.map((m, idx) => (
//                         <div key={idx} className="metric">
//                           <strong className="val">{m.value}</strong>
//                           <span className="lab">{m.label}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {it.cta && (
//                     <Link href={it.cta.href} className="cta">
//                       {it.cta.label} <span className="arrow">→</span>
//                     </Link>
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         :root {
//           --ink: #263647;
//           --ink-2: #405266;
//           --muted: #667283;
//           --bg: #ffffff;
//           --section: linear-gradient(135deg, #f7f9fb 0%, #e9eef4 100%);
//           --accent: #ff7a00;
//           --pill-bg: #eef2f6;
//           --metric-bg: #eef2f6;
//           --radius-xl: 28px;
//           --shadow-soft: 0 10px 30px rgba(0, 20, 40, 0.1);
//           --shadow-glow: 0 20px 60px rgba(255, 122, 0, 0.15);
//           --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .cs-wrap {
//           background: var(--section);
//           padding: 80px 0 100px;
//           position: relative;
//           overflow: hidden;
//         }
//         .cs-wrap::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 20% 80%, rgba(255, 122, 0, 0.05) 0%, transparent 50%),
//                       radial-gradient(circle at 80% 20%, rgba(38, 54, 71, 0.03) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//           position: relative;
//           z-index: 1;
//         }

//         .sec-heading {
//           font-size: clamp(32px, 4vw, 64px);
//           line-height: 1.05;
//           margin: 0 0 32px;
//           color: var(--ink);
//           font-weight: 900;
//           letter-spacing: -0.5px;
//           text-align: center;
//           background: linear-gradient(135deg, var(--ink) 0%, var(--accent) 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .list {
//           display: grid;
//           gap: 60px;
//         }

//         .row {
//           display: grid;
//           grid-template-columns: 1.1fr 1fr;
//           align-items: center;
//           gap: 48px;
//           padding: 40px;
//           background: rgba(255, 255, 255, 0.8);
//           backdrop-filter: blur(10px);
//           border-radius: var(--radius-xl);
//           box-shadow: var(--shadow-soft);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0;
//           transform: translateY(30px);
//           animation: fadeInUp 0.8s ease-out forwards;
//           transition: var(--transition);
//           will-change: transform, box-shadow;
//         }
//         .row:nth-child(even) {
//           animation-delay: 0.2s;
//         }
//         .row:hover {
//           box-shadow: var(--shadow-glow);
//           transform: translateY(-5px);
//         }
//         .row.invert {
//           grid-template-columns: 1fr 1.1fr;
//         }

//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (max-width: 1024px) {
//           .row,
//           .row.invert {
//             grid-template-columns: 1fr;
//             padding: 32px;
//             gap: 32px;
//           }
//         }

//         .media {
//           order: 1;
//         }
//         .row.invert .media {
//           order: 2;
//         }

//         .imgWrap {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 16 / 9;
//           border-radius: var(--radius-xl);
//           overflow: hidden;
//           background: linear-gradient(135deg, #e9eef4 0%, #d1d9e6 100%);
//           box-shadow: var(--shadow-soft);
//           transition: var(--transition);
//           will-change: transform;
//         }
//         .imgWrap:hover {
//           transform: scale(1.05);
//           box-shadow: var(--shadow-glow);
//         }
//         .img {
//           object-fit: cover;
//           transition: var(--transition);
//         }

//         .content {
//           order: 2;
//         }
//         .row.invert .content {
//           order: 1;
//         }

//         .title {
//           font-size: clamp(32px, 3.5vw, 52px);
//           line-height: 1.05;
//           margin: 8px 0 20px;
//           color: var(--ink);
//           font-weight: 900;
//           letter-spacing: -0.3px;
//         }

//         /* tags */
//         .tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin-bottom: 20px;
//         }
//         .tag {
//           display: inline-flex;
//           align-items: center;
//           padding: 10px 16px;
//           border-radius: 999px;
//           color: #2a3846;
//           font-weight: 600;
//           font-size: 14px;
//           border: 1px solid rgba(0, 0, 0, 0.08);
//           transition: var(--transition);
//           will-change: transform;
//         }
//         .tag:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         }

//         .desc {
//           margin: 0 0 24px;
//           color: var(--ink-2);
//           font-size: 18px;
//           line-height: 1.7;
//         }

//         /* metrics pills */
//         .metrics {
//           display: grid;
//           gap: 12px;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           margin: 0 0 24px;
//         }
//         .metric {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           background: var(--metric-bg);
//           border: 1px solid rgba(0, 0, 0, 0.08);
//           color: var(--muted);
//           padding: 12px 16px;
//           border-radius: 999px;
//           white-space: nowrap;
//           transition: var(--transition);
//           will-change: box-shadow;
//         }
//         .metric:hover {
//           box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
//         }
//         .val {
//           background: linear-gradient(135deg, #111827 0%, #374151 100%);
//           color: #fff;
//           border-radius: 999px;
//           padding: 6px 12px;
//           font-weight: 800;
//           font-size: 14px;
//           letter-spacing: 0.2px;
//         }
//         .lab {
//           font-size: 14px;
//         }

//         .cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           color: var(--accent);
//           font-weight: 800;
//           text-decoration: none;
//           padding: 12px 0;
//           border-bottom: 2px solid transparent;
//           transition: var(--transition);
//           will-change: border-color, transform;
//         }
//         .cta:focus {
//           outline: 2px solid var(--accent);
//           outline-offset: 4px;
//         }
//         .cta:hover {
//           border-bottom-color: var(--accent);
//           transform: translateX(4px);
//         }
//         .cta .arrow {
//           transition: var(--transition);
//         }
//         .cta:hover .arrow {
//           transform: translateX(6px);
//         }
//       `}</style>
//     </section>
//   );
// }

// components/case-study/CaseStudy.tsx
// 'use client';

// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// export type CaseTag = { label: string; tone?: 'neutral' | 'green' | 'blue' | 'orange' };
// export type Metric  = { value: string; label: string };

// export type CaseStudyItem = {
//   title: string;
//   description: string;
//   image: StaticImageData | string;
//   imageAlt?: string;
//   tags?: CaseTag[];
//   metrics?: Metric[];
//   cta?: { label: string; href: string };
// };

// type Props = {
//   heading?: string;
//   items: CaseStudyItem[];
// };

// const toneBg: Record<NonNullable<CaseTag['tone']> | 'neutral', string> = {
//   neutral: 'rgba(17, 24, 39, .04)',
//   green:   'rgba(16, 185, 129, .16)',
//   blue:    'rgba(59, 130, 246, .16)',
//   orange:  'rgba(255, 122, 0, .18)',
// };

// export default function CaseStudy({ heading = 'Case Studies', items }: Props) {
//   return (
//     <section className="cs-wrap">
//       <div className="container">
//         <div className="heading-wrap">
//           <h2 className="sec-heading">{heading}</h2>
//           <div aria-hidden className="ghost">Our Portfolio</div>
//         </div>

//         <div className="list">
//           {items.map((it, i) => {
//             const invert = i % 2 === 1;
//             return (
//               <article
//                 key={i}
//                 className={`row ${invert ? 'invert' : ''}`}
//                 style={{ animationDelay: `${i * 90}ms` }}
//               >
//                 {/* Media */}
//                 <div className="media">
//                   <div className="imgWrap">
//                     <Image
//                       src={it.image}
//                       alt={it.imageAlt || it.title}
//                       fill
//                       sizes="(min-width: 1200px) 720px, 100vw"
//                       className="img"
//                       priority={i < 2}
//                     />
//                     <span className="shine" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="content">
//                   <h3 className="title">{it.title}</h3>

//                   {!!it.tags?.length && (
//                     <div className="tags">
//                       {it.tags.map((t, idx) => (
//                         <span
//                           key={idx}
//                           className="tag"
//                           style={{ background: toneBg[t.tone || 'neutral'] }}
//                         >
//                           <i />
//                           {t.label}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <p className="desc">{it.description}</p>

//                   {!!it.metrics?.length && (
//                     <div className="metrics">
//                       {it.metrics.map((m, idx) => (
//                         <div key={idx} className="metric">
//                           <span className="val">{m.value}</span>
//                           <span className="lab">{m.label}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {it.cta && (
//                     <Link href={it.cta.href} className="cta">
//                       <span>{it.cta.label}</span>
//                       <svg width="18" height="18" viewBox="0 0 24 24" className="arrow" aria-hidden>
//                         <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"/>
//                       </svg>
//                     </Link>
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         :root{
//           --ink:#1f2b3a;
//           --ink-2:#405266;
//           --muted:#6a7a8c;
//           --bg:#ffffff;
//           --accent:#ff7a00;
//           --radius-xl:26px;
//         }

//         .cs-wrap{
//           position: relative;
//           background: var(--bg);
//           padding: 72px 0 96px;
//           overflow: hidden;
//         }
//         .container{ max-width: 1200px; margin: 0 auto; padding: 0 16px; }

//         .heading-wrap{
//           position: relative;
//           margin-bottom: 24px;
//         }
//         .sec-heading{
//           position: relative;
//           z-index: 2;
//           font-size: clamp(28px, 3.6vw, 56px);
//           line-height: 1.06;
//           margin: 0;
//           color: var(--ink);
//           font-weight: 900;
//           letter-spacing: .2px;
//         }
//         .ghost{
//           position: absolute;
//           inset: -10px auto auto 0;
//           font-size: clamp(64px, 12vw, 160px);
//           font-weight: 900;
//           line-height: .9;
//           color: #1f2b3a;
//           opacity: .06;
//           pointer-events: none;
//         }

//         .list{ display: grid; gap: 54px; }

//         .row{
//           display: grid;
//           grid-template-columns: 1.15fr 1fr;
//           gap: 36px;
//           align-items: center;
//           animation: reveal .6s ease both;
//         }
//         .row.invert{ grid-template-columns: 1fr 1.15fr; }
//         @media (max-width: 1024px){
//           .row, .row.invert{ grid-template-columns: 1fr; }
//         }

//         /* Media */
//         .media{ order:1; }
//         .row.invert .media{ order:2; }
//         .imgWrap{
//           position: relative;
//           width: 100%;
//           aspect-ratio: 16/9;
//           border-radius: var(--radius-xl);
//           overflow: hidden;
//           background: #e8eef6;
//           box-shadow: 0 24px 60px rgba(3, 20, 40, .12);
//           transform: translateZ(0);
//         }
//         .img{ object-fit: cover; transition: transform .6s cubic-bezier(.2,.6,.2,1); }
//         .shine{
//           position: absolute; inset: 0;
//           background: radial-gradient(800px 240px at -10% -10%, rgba(255,255,255,.45), transparent 35%),
//                       linear-gradient(120deg, transparent 0%, rgba(255,255,255,.08) 40%, transparent 70%);
//           mix-blend-mode: screen;
//           opacity: .6; pointer-events: none;
//           transition: opacity .35s ease;
//         }
//         .imgWrap:hover .img{ transform: scale(1.04); }
//         .imgWrap:hover .shine{ opacity: .85; }

//         /* Content */
//         .content{ order:2; }
//         .row.invert .content{ order:1; }

//         .title{
//           margin: 2px 0 12px;
//           color: var(--ink);
//           font-weight: 900;
//           font-size: clamp(28px, 3vw, 48px);
//           line-height: 1.05;
//           letter-spacing: .1px;
//         }

//         /* Tags (glass pills) */
//         .tags{
//           display: flex; flex-wrap: wrap; gap: 10px;
//           margin-bottom: 14px;
//         }
//         .tag{
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 8px 14px;
//           border-radius: 999px;
//           border: 1px solid rgba(0,0,0,.06);
//           color: #2a3846;
//           font-weight: 700; font-size: 14px;
//           backdrop-filter: blur(6px);
//           box-shadow: 0 6px 20px rgba(17,24,39,.06) inset;
//         }
//         .tag i{
//           width: 8px; height: 8px; border-radius: 999px;
//           background: currentColor; opacity: .6;
//         }

//         .desc{
//           margin: 0 0 18px;
//           color: var(--ink-2);
//           font-size: 18px;
//           line-height: 1.7;
//         }

//         /* Metrics (elevated pills) */
//         .metrics{
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 12px;
//           margin: 0 0 22px;
//         }
//         .metric{
//           display: inline-flex; align-items: center; gap: 10px;
//           padding: 10px 14px;
//           border-radius: 999px;
//           background: #eef2f6;
//           border: 1px solid rgba(0,0,0,.06);
//           color: #516175;
//           box-shadow: 0 4px 14px rgba(12,20,35,.06) inset;
//           white-space: nowrap;
//         }
//         .val{
//           background: linear-gradient(90deg, #111827, #233048);
//           color: #fff;
//           border-radius: 999px;
//           padding: 4px 10px;
//           font-weight: 900;
//           font-size: 14px;
//           letter-spacing: .2px;
//         }
//         .lab{ font-size: 14px; }

//         /* CTA (gradient button) */
//         .cta{
//           display: inline-flex; align-items: center; gap: 10px;
//           background: linear-gradient(135deg, #ff8a2a, #ff6b00);
//           color: #fff;
//           padding: 12px 18px;
//           border-radius: 12px;
//           text-decoration: none;
//           font-weight: 900;
//           letter-spacing: .2px;
//           box-shadow: 0 10px 26px rgba(255,107,0,.28);
//           transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
//         }
//         .cta:hover{ transform: translateY(-2px); box-shadow: 0 14px 30px rgba(255,107,0,.34); filter: brightness(1.03); }
//         .cta:focus-visible{ outline: 3px solid #ffd7bf; outline-offset: 3px; }
//         .arrow{ transform: translateX(0); transition: transform .18s ease; }
//         .cta:hover .arrow{ transform: translateX(4px); }

//         /* Reveal */
//         @keyframes reveal{
//           from{ opacity: 0; transform: translateY(14px); }
//           to{ opacity: 1; transform: translateY(0); }
//         }

//         /* Respect reduced motion */
//         @media (prefers-reduced-motion: reduce){
//           .img, .shine, .cta, .row{ transition: none !important; animation: none !important; }
//         }
//       `}</style>
//     </section>
//   );
// }

// components/case-study/CaseStudyPro.tsx
// 'use client';

// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import React, { useMemo } from 'react';

/* === Types (compatible with your current data) === */
// export type CaseTag = { label: string; tone?: 'neutral' | 'green' | 'blue' | 'orange' };
// export type Metric  = { value: string; label: string };
// export type CaseStudyItem = {
//   title: string;
//   description: string;
//   image: StaticImageData | string;
//   imageAlt?: string;
//   tags?: CaseTag[];
//   metrics?: Metric[];
//   cta?: { label: string; href: string };
// };
// type Props = {
//   heading?: string;
//   items: CaseStudyItem[];
//   dark?: boolean;             // optional dark theme
//   compact?: boolean;          // tighter spacing if you want
// };

// const tone: Record<NonNullable<CaseTag['tone']> | 'neutral', {bg:string; dot:string}> = {
//   neutral: { bg: 'rgba(17,24,39,.06)', dot:'#64748b' },
//   green:   { bg: 'rgba(16,185,129,.16)', dot:'#10b981' },
//   blue:    { bg: 'rgba(59,130,246,.16)', dot:'#3b82f6' },
//   orange:  { bg: 'rgba(255,122,0,.18)',  dot:'#ff7a00' },
// };

// export default function CaseStudyPro({ heading='Case Studies', items, dark=false, compact=false }: Props) {
//   const cls = useMemo(() => (dark ? 'is-dark' : 'is-light') + (compact ? ' is-compact' : ''), [dark, compact]);

//   return (
//     <section className={`csx ${cls}`}>
//       <div className="container">
//         <header className="head">
//           <h2 className="title">{heading}</h2>
//           <div aria-hidden className="ghost">Our Portfolio</div>
//         </header>

//         <div className="stack">
//           {items.map((it, idx) => {
//             const invert = idx % 2 === 1;
//             return (
//               <article key={idx} className={`card-row ${invert ? 'invert' : ''}`} style={{ animationDelay: `${idx * 90}ms` }}>
//                 {/* MEDIA */}
//                 <div className="media">
//                   <div className="frame">
//                     <Image
//                       src={it.image}
//                       alt={it.imageAlt || it.title}
//                       fill
//                       sizes="(min-width: 1200px) 720px, 100vw"
//                       className="img"
//                       priority={idx < 2}
//                     />
//                     <span className="shine" />
//                     <span className="ring" />
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="content glass">
//                   <h3 className="h3">{it.title}</h3>

//                   {!!it.tags?.length && (
//                     <div className="tags">
//                       {it.tags.map((t, i) => (
//                         <span key={i} className="tag" style={{ background: (tone[t.tone || 'neutral'].bg) }}>
//                           <i style={{ background: tone[t.tone || 'neutral'].dot }} />
//                           {t.label}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <p className="desc">{it.description}</p>

//                   {!!it.metrics?.length && (
//                     <div className="metrics">
//                       {it.metrics.map((m, i) => (
//                         <div key={i} className="metric">
//                           <span className="val">{m.value}</span>
//                           <span className="lab">{m.label}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {it.cta && (
//                     <Link href={it.cta.href} className="cta">
//                       <span>{it.cta.label}</span>
//                       <svg width="18" height="18" viewBox="0 0 24 24" className="arr" aria-hidden>
//                         <path fill="currentColor" d="M5 13h11.17l-4.59 4.59L13 19l7-7-7-7-1.41 1.41L16.17 11H5z"/>
//                       </svg>
//                     </Link>
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>


//     </section>
//   );
// }

'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

/* === Types (same as before) === */
export type CaseTag = { label: string; tone?: 'neutral' | 'green' | 'blue' | 'orange' };
export type Metric  = { value: string; label: string };
export type CaseStudyItem = {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt?: string;
  tags?: CaseTag[];
  metrics?: Metric[];
  cta?: { label: string; href: string };
};

type Props = {
  heading?: string;
  items: CaseStudyItem[];
  dark?: boolean;     // optional dark theme
  compact?: boolean;  // tighter spacing if you want
};

const tone: Record<NonNullable<CaseTag['tone']> | 'neutral', { bg: string; dot: string }> = {
  neutral: { bg: 'rgba(17,24,39,.06)', dot: '#64748b' },
  green:   { bg: 'rgba(16,185,129,.16)', dot: '#10b981' },
  blue:    { bg: 'rgba(59,130,246,.16)', dot: '#3b82f6' },
  orange:  { bg: 'rgba(255,122,0,.18)', dot: '#ff7a00' },
};

export default function CaseStudyPro({ heading = 'Case Studies', items, dark = false, compact = false }: Props) {
  const cls = useMemo(
    () => `csx ${dark ? 'is-dark' : 'is-light'}${compact ? ' is-compact' : ''}`,
    [dark, compact]
  );

  return (
    <section className={cls}>
      <div className="container">
        <header className="head">
          <h2 className="title">{heading}</h2>
          <div aria-hidden className="ghost">Our Portfolio</div>
        </header>

        <div className="stack">
          {items.map((it, idx) => {
            const invert = idx % 2 === 1;
            return (
              <article
                key={idx}
                className={`card-row ${invert ? 'invert' : ''}`}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                {/* MEDIA */}
                <div className="media">
                  <div className="frame">
                    <Image
                      src={it.image}
                      alt={it.imageAlt || it.title}
                      fill
                      sizes="(min-width: 1200px) 720px, 100vw"
                      className="img"
                      priority={idx < 2}
                    />
                    <span className="shine" />
                    <span className="ring" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="content glass">
                  <h3 className="h3">{it.title}</h3>

                  {!!it.tags?.length && (
                    <div className="tags">
                      {it.tags.map((t, i) => (
                        <span
                          key={i}
                          className="tag"
                          style={{ background: tone[t.tone || 'neutral'].bg }}
                        >
                          <i style={{ background: tone[t.tone || 'neutral'].dot }} />
                          {t.label}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="desc">{it.description}</p>

                  {!!it.metrics?.length && (
                    <div className="metrics">
                      {it.metrics.map((m, i) => (
                        <div key={i} className="metric">
                          <span className="val">{m.value}</span>
                          <span className="lab">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {it.cta && (
                    <Link href={it.cta.href} className="cta">
                      <span>{it.cta.label}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" className="arr" aria-hidden>
                        <path fill="currentColor" d="M5 13h11.17l-4.59 4.59L13 19l7-7-7-7-1.41 1.41L16.17 11H5z"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
