// /components/hero/HeroServiceDetails.tsx
'use client';

import React from 'react';
import type { HeroDetails } from './shared';

type Props = { data: HeroDetails };

// Create 3–4 paragraphs from a single description string
function buildParagraphs(description: string, min = 3, max = 4): string[] {
  if (!description) return [];
  const paras = description.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
  if (paras.length >= min) return paras.slice(0, max);

  const sentences = description.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (!sentences.length) return [description];

  const target = Math.min(max, Math.max(min, Math.min(sentences.length, max)));
  const per = Math.ceil(sentences.length / target);
  const out: string[] = [];
  for (let i = 0; i < sentences.length; i += per) {
    out.push(sentences.slice(i, i + per).join(' '));
    if (out.length === target) break;
  }
  while (out.length < min && out.length > 0) out.push(out[out.length - 1]);
  return out.slice(0, max);
}

const HeroServiceDetails: React.FC<Props> = ({ data }) => {
  const { title, description } = data;
  const paragraphs = buildParagraphs(description, 3, 4);

  return (
    <>
      <div className="cs_height_85 cs_height_lg_120" />
      <section>
        <div className="container">
          {/* Heading on the left (no image on the right) */}
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="">
              <h4 className="anim_text_writting" style={{ margin: 0 }}>
                {title}
              </h4>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_60" />

          {/* Body: force full-width text by overriding any grid/flex layout */}
          <div className="cs_service_details" style={{ display: 'block', width: '100%' }}>
            <div className="cs_service_details_text" style={{ width: '100%', maxWidth: '100%' }}>
              <div className="cs_service_details_p">
                {paragraphs.map((p, i) => (
                  <p key={i} className="anim_text" style={{ marginTop: i === 0 ? 0 : 12, lineHeight: 1.7 }}>
                    {p}
                  </p>
                ))}

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroServiceDetails;
