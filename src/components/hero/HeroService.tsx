'use client';

import React from 'react';
import Link from 'next/link';
import type { ServiceBanner } from '@/components/hero/shared';

type Props = {
  items: ServiceBanner[];
  heading?: string;
  defaultImageUrl?: string;
  defaultHref?: string;
};

const HeroService: React.FC<Props> = ({
  items,
  heading = 'Transform Your Online Presence with Our Digital Agency Services',
  defaultImageUrl = '/assets/img/project_successfull_1.jpg',
  defaultHref = '/service-details',
}) => {
  const twoDigits = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      <div className="cs_height_160 cs_height_lg_120" />
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">{heading}</h2>
            </div>
          </div>

          <div className="cs_height_100 cs_height_lg_60" />

          <div className="cs_card_1_list">
            {items.map((item, i) => {
              const href = item.href ?? defaultHref;
              const bg = item.imageUrl ?? defaultImageUrl;
              return (
                <div key={item.id} className="cs_card cs_style_1 anim_div_ShowDowns">
                  <div className="cs_card_left">
                    <div
                      className="cs_card_number cs_primary_font"
                      style={{ backgroundImage: `url('${bg}')` }}
                    >
                      {twoDigits(i + 1)}
                    </div>
                  </div>

                  <div className="cs_card_right">
                    <div className="cs_card_right_in">
                      <h2 className="cs_card_title">
                        <Link href={href}>{item.title}</Link>
                      </h2>
                      <div className="cs_card_subtitle">{item.description}</div>
                    </div>
                  </div>

                  <div className="cs_card_link_wrap">
                    <Link href={href} className="cs_card_link" aria-label={`Open ${item.title}`}>
                      <span>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
