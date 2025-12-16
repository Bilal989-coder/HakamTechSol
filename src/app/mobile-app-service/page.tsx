 
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
    title: 'Native Apps',
    description:
      'We create fast, secure, and platform-optimized mobile apps tailored for iOS and Android using native technologies. Perfect for businesses that need speed, precision, and complete device integration.',
    href: '/mobile-app-service/native-app',
  },
  {
    id: 2,
    title: 'Hybird Apps',
    description:
      'We build responsive hybrid apps with a single codebase.',
    href: '/mobile-app-service/hybird-app',
  },
  {
    id: 3,
    title: 'Cross Platform Apps',
    description:
      'High-performance Flutter and React Native apps for iOS and Android.',
    href: '/mobile-app-service/cross-platform-app',
  },
  {
    id: 4,
    title: 'Progressive Web Apps',
    description:
      'Installable PWAs that feel native—without app-store friction.',
    href: '/mobile-app-service/progressive-web-app',
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