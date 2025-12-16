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
    title: 'Portal Development',
    description:
      'We design and develop secure, scalable, and user-friendly portals that connect your teams, clients, and data—delivering efficiency and better decision-making.',
    href: '/web-app-development/portal-development',
  },
  {
    id: 2,
    title: 'ERP Development',
    description:
      'We design and develop powerful, scalable, and fully customized ERP systems that integrate your processes, data, and teams into one centralized platform—helping you work smarter, faster, and more efficiently.',
    href: '/web-app-development/erp-development',
  },
  {
    id: 3,
    title: 'SAAS Application',
    description:
      'From idea to deployment, we specialize in building Software as a Service (SaaS) platforms that empower businesses with cloud-native, scalable, and subscription-ready applications.',
    href: '/web-app-development/saas-application',
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
