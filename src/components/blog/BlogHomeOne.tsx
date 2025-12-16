'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import type { BlogItem } from '../hero/shared';

type Props = {
  items: BlogItem[];
  heading: string;                 // <-- now required, no default here
  slidesPerView?: number | 'auto';
  loop?: boolean;
  speed?: number;
  className?: string;
  imageWidth?: number;             // fixed width in px
  imageHeight?: number;            // fixed height in px
  radius?: number;                 // corner radius
};

const BlogHomeOne: React.FC<Props> = ({
  items,
  heading,
  slidesPerView = 'auto',
  loop = true,
  speed = 1000,
  className = '',
  imageWidth = 360,
  imageHeight = 240,
  radius = 14,
}) => {
  return (
    <section>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <div className="cs_height_100 cs_height_lg_60" />
          </div>
        </div>

        <div className="cs_height_150 cs_height_lg_60">
          <h2>{heading}</h2>
        </div>

        <Swiper
          modules={[Pagination]}
          loop={loop}
          speed={speed}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          className={`cs_slider cs_slider_3 anim_blog ${className}`}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="cs_post cs_style_1">
                {/* Fixed-size image wrapper */}
                <div
                  className="cs_post_thumb"
                  style={{
                    position: 'relative',
                    width: imageWidth,
                    height: imageHeight,
                    borderRadius: radius,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes={`${imageWidth}px`}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="cs_post_info">
                  <h2 className="cs_post_title">{item.title}</h2>
                  <p className="cs_m0">{item.des}</p>
                </div>
              </div>
              <div className="cs_height_70 cs_height_lg_60"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogHomeOne;
