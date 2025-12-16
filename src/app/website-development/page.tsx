'use client';

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Testimonial from '@/components/testimonial/Testimonial';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Service from '@/components/service/Service';
import HeroService from '@/components/hero/HeroService';
import type { ServiceBanner } from '@/components/hero/shared';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';

const banner_data: ServiceBanner[] = [
  {
    id: 1,
    title: 'Blog Websites',
    description:
      'We design and develop custom blog websites that are fast, user-friendly, SEO-optimized, and easy to manage. Whether you\'re a solo writer, news publisher, or brand building thought leadership—we’ve got you covered.',
    href: '/website-development/blog-website',
  },
  {
    id: 2,
    title: 'Portfolio Websites',
    description:
      'We build beautiful, responsive, and high-converting portfolio websites that help you stand out, get noticed, and win more clients. Perfect for freelancers, creatives, professionals, and agencies.',
    href: '/website-development/portfolio-website',
  },
  {
    id: 3,
    title: 'E-Commerce Websites',
    description:
      'We design and develop powerful, scalable, and conversion-focused eCommerce websites that help you sell products online with ease—whether you have 10 items or 10,000.',
    href: '/website-development/ecomerce-website',
  },
  {
    id: 4,
    title: 'CMS-Based Websites',
    description:
      'We build user-friendly CMS-based websites that put you in charge—update, edit, and publish content without touching a single line of code.',
    href: '/website-development/cms-website',
  },
];

const Page = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroService items={banner_data} />
            <Service />
            <AboutHomeFour />
          </main>
          
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
