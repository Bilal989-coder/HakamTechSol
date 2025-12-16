 
 'use client'


import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Service from '@/components/service/Service';
import Testimonial from '@/components/testimonial/Testimonial';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import type { ServiceBanner } from '@/components/hero/shared';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';


// export const metadata = {
//   title: "Service | HakamTechSol",
// };
const banner_data: ServiceBanner[] = [
  {
    id: 1,
    title: 'Graphic Designing',
    description:
      'We craft visually stunning designs that communicate your story, captivate your audience, and give your brand a lasting impression.',
    href: '/designing-&-marketing/graphic-designing',
  },
  {
    id: 2,
    title: '2D & 3D Art',
    description:
      'From sleek 2D illustrations to realistic 3D models, we create high-quality visual assets that elevate your brand, products, and digital experiences.',
    href: '/designing-&-marketing/2d-&-3d',
  },
  {
    id: 3,
    title: 'SEO & SMM',
    description:
      'We help businesses increase visibility, drive traffic, and engage customers through powerful Search Engine Optimization (SEO) and Social Media Marketing (SMM) strategies tailored to their goals.',
    href: '/designing-&-marketing/seo-&-smm',
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