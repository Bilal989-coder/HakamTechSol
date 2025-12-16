// components/sections/WhyChoosePro.tsx
'use client';

import React from 'react';
import type { WhyChooseData, FeatureItem } from '@/components/hero/shared';

type Props = { data: WhyChooseData };

export default function WhyChoosePro({ data }: Props) {
  const {
    heading = 'Why Choose Us?',
    features = [],
    benefitsHeading = '🌟Key Benefits We Deliver',
    benefits = [],
    theme = {},
  } = data;

  const primary = theme.primary || '#6C5CE7';
  const accent = theme.accent || '#FF7A00';

  const Card = ({ f }: { f: FeatureItem }) => (
    <div className="item">
      <div className="card">
        <span className="stripe" />
        <div className="text p-2">
          <h6 className="title">{f.icon}{f.title}</h6>
          {f.subtitle ? <p className="sub text-primary">{f.subtitle}</p> : null}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="why"
      style={
        {
          // @ts-ignore CSS vars for quick tuning
          '--primary': primary,
          '--accent': accent,
          '--card-h': '220px', // ← set a single height for all cards
        }
      }
    >
      <div className="container">
        <div className="head">
          <h3 className="heading">{heading}</h3><br />
        </div>

        <div className="grid">
          {features.map((f, i) => <Card key={i} f={f} />)}
        </div>

        <div className="cs_height_70 cs_height_lg_60"></div>

        {!!benefits.length && (
          <>
            <div className="divider" />
            <div className="head benefitsHead">
              <h3 className="heading">{benefitsHeading}</h3><br />
            </div>

            <ul className="benefits">
              {benefits.map((b, i) => (
                <li key={i} className="chip">
                  <span className="check" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="cs_height_50 cs_height_lg_60"></div>
      </div>

      <style jsx>{`
        .why {
          padding: 72px 0;
          background:
            radial-gradient(1200px 400px at 10% -10%, rgba(108,92,231,0.14), transparent 60%),
            radial-gradient(900px 300px at 100% 10%, rgba(255,122,0,0.15), transparent 60%),
            #0B0F16;
          color: #EAF1FF;
        }
        .container { max-width: 1180px; margin: 0 auto; padding: 0 16px; }

        /* High-contrast heading for dark bg */
        .head { margin-bottom: 22px; }
        .heading {
          margin: 0;
          font-size: clamp(22px, 2.1vw, 28px);
          font-weight: 900;
          color: #FFFFFF;                 /* brighter */
          text-shadow: 0 1px 0 rgba(0,0,0,.35);
          letter-spacing: .2px;
        }

        /* Equal-height grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(260px, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        .item { height: 100%; display: flex; }
        .card {
          position: relative;
          display: flex; flex-direction: column;
          width: 100%;
          height: var(--card-h);          /* ← equal height for every card */
          padding: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          backdrop-filter: blur(6px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 10px 28px rgba(8,12,20,.45);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          overflow: hidden;               /* keeps all cards uniform visually */
        }
        .item:hover .card {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.18);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 18px 44px rgba(12,16,24,.6);
        }

        .stripe {
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          border-radius: 2px;
          opacity: .95;
          margin-bottom: 12px;
        }

        .title {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;                 /* max contrast */
          line-height: 1.35;
        }
        .sub {
          margin: 0;
          color: #EAF1FF;                 /* brighter for better visibility */
          line-height: 1.6;
          font-size: 15px;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          margin: 28px 0 18px;
        }

        .benefitsHead { margin-bottom: 10px; }
        .benefits {
          list-style: none; padding: 0; margin: 0;
          display: grid; gap: 12px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .chip {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: #FFFFFF;                 /* brighter for visibility */
          padding: 12px 14px; border-radius: 12px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .chip:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.16);
        }
        .check {
          width: 18px; height: 18px; border-radius: 999px;
          background: conic-gradient(from 220deg, var(--primary), var(--accent));
          box-shadow: 0 0 0 2px rgba(255,255,255,0.08) inset;
        }

        @media (max-width: 600px) {
          .heading { font-size: 22px; }
          .card { height: 200px; padding: 16px; }  /* slightly smaller on mobile */
          .title { font-size: 17px; }
          .sub { font-size: 14px; }
          .stripe { height: 3px; margin-bottom: 10px; }
        }
      `}</style>
    </section>
  );
}
