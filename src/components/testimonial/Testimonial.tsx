// app/testimonials/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { createPortal } from 'react-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import avatar_img from '@/assets/img/avatar_1.jpg';

type TestimonialItem = {
  img: StaticImageData;
  name: string;
  location: string;
  des: string;
  videoUrl?: string;
};

const testimonial_data: TestimonialItem[] = [
  {
    img: avatar_img,
    name: 'Delores Olivo',
    location: 'From UK',
    des: '“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”',
    videoUrl: '/videos/client1.mp4',
  },
  {
    img: avatar_img,
    name: 'Delores Olivo',
    location: 'From USA',
    des: '“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”',
    videoUrl: '/videos/client1.mp4',
  },
  {
    img: avatar_img,
    name: 'Delores Olivo',
    location: 'From Astrolia',
    des: '“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”',
    videoUrl: '/videos/client1.mp4',
  },
];

export default function TestimonialsPage() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Pause any other <video> tags on the page when opening the modal
  const pauseOtherVideos = () => {
    const vids = Array.from(document.querySelectorAll('video')) as HTMLVideoElement[];
    vids.forEach(v => {
      // don’t pause the one in the modal (it doesn’t exist yet)
      try { v.pause(); } catch {}
    });
  };

  const handleOpen = (url?: string) => {
    if (!url) return;
    // Ensure the testimonial section is the “active” viewport area
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    pauseOtherVideos();
    // Small delay so scroll starts before modal paints
    setTimeout(() => setOpenVideo(url), 150);
  };

  return (
    <section ref={sectionRef} className="cs_primary_bg cs_shape_wrap_2">
      <div className="cs_height_150 cs_height_lg_60" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cs_testimonial cs_style_1 cs_color_1">
              <h2 className="cs_testimonial_title text-center">
                Some Of Our Respected Happy Clients Says
              </h2>

              <Swiper
                loop
                speed={1000}
                autoplay={{ delay: 3500 }}
                modules={[Autoplay]}
                pagination={{ el: '.cs_pagination', clickable: true }}
                className="cs_slider cs_slider_4"
              >
                {testimonial_data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="cs_testimonial_box">
                      <div className="cs_testimonial_quote_icon">
                        <svg width="61" height="44" viewBox="0 0 61 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z" fill="#FF6B00" />
                          <path d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z" fill="#FF6B00" />
                        </svg>
                      </div>

                      <blockquote className="cs_testimonial_text">{item.des}</blockquote>

                      <div className="cs_testimonial_meta ts_meta">
                        <button
                          type="button"
                          className="ts_avatar_btn"
                          onClick={() => handleOpen(item.videoUrl)}
                          aria-label="Play client video"
                        >
                          <span className="ts_avatar">
                            <Image
                              src={item.img}
                              alt={`${item.name} avatar`}
                              width={80}
                              height={80}
                              className="ts_avatar_img"
                            />
                            <span className="ts_play_overlay">
                              <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="rgba(0,0,0,0.55)" />
                                <path d="M11 8L20 14L11 20V8Z" fill="#fff" />
                              </svg>
                            </span>
                          </span>
                        </button>

                        <div className="cs_testimonial_meta_right">
                          <h3 className="cs_testimonial_avatar_name">{item.name}</h3>
                          <div className="cs_testimonial_avatar_designation">{item.location}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="cs_pagination cs_style1" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_150 cs_height_lg_60" />

      {/* Modal via portal to avoid stacking/transform issues */}
      {mounted && openVideo &&
        createPortal(
          <div className="ts_video_modal" role="dialog" aria-modal="true" onClick={() => setOpenVideo(null)}>
            <div className="ts_video_panel" onClick={(e) => e.stopPropagation()}>
              <button className="ts_video_close" onClick={() => setOpenVideo(null)} aria-label="Close video">
                ×
              </button>
              <div className="ts_video_wrap">
                <video
                  src={openVideo}
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>,
          document.body
        )
      }

      <style jsx>{`
        .text-center { text-align: center; }

        .ts_meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @media (min-width: 992px) {
          .ts_meta { gap: 16px; }
        }

        .ts_avatar_btn {
          border: 0;
          background: transparent;
          padding: 0;
          margin: 0;
          cursor: pointer;
          display: inline-block;
        }

        .ts_avatar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 999px;
          overflow: hidden;
          display: inline-block;
          flex-shrink: 0;
        }

        :global(.ts_avatar_img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
          display: block;
        }

        .ts_play_overlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          opacity: 0;
          transition: opacity .2s ease-in-out;
          pointer-events: none;
        }
        .ts_avatar:hover .ts_play_overlay { opacity: 1; }

        @media (hover: none) { .ts_play_overlay { opacity: 0.9; } }

        /* Portal modal */
        .ts_video_modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 10000; /* above everything */
          display: grid;
          place-items: center;
          padding: 16px;
        }
        .ts_video_panel {
          position: relative;
          width: min(900px, 92vw);
          background: #000;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          overflow: hidden;
        }
        .ts_video_wrap {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 */
        }
        .ts_video_wrap :global(video) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          outline: none;
          border: 0;
          background: #000;
        }
        .ts_video_close {
          position: absolute;
          top: 6px;
          right: 10px;
          font-size: 28px;
          line-height: 1;
          color: #fff;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 2;
        }
      `}</style>
    </section>
  );
}
