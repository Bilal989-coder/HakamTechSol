
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import VideoPopup from '@/components/modals/VideoPopup';
import CaseStudy, { CaseStudyItem } from '@/components/casestudy/CaseStudy';
import cs1 from '@/assets/img/5.jpg';
import cs2 from '@/assets/img/3.jpg';
import cs3 from '@/assets/img/6.jpg';

const items: CaseStudyItem[] = [
  {
    title: 'Pure Plank',
    image: cs1,
    tags: [
      { label: 'UI/UX Design', tone: 'neutral' },
      { label: 'Mobile App Development', tone: 'green' },
    ],
    description:
      'Pure Plank is a fitness app designed to guide users through effective plank exercises for optimal health and fitness results.',
    metrics: [
      { value: '98%', label: 'User Satisfaction Rate' },
      { value: '50%', label: 'Increase in User Engagement' },
      { value: 'Top-Rated', label: 'Fitness App in App Store' },
    ],
    cta: { label: 'View Case Study', href: '/case-studies/pure-plank' },
  },
  {
    title: 'QuickServe',
    image: cs2,
    tags: [
      { label: 'Product Strategy', tone: 'neutral' },
      { label: 'Web App Development', tone: 'blue' },
    ],
    description:
      'End-to-end ordering and delivery with scalable microservices and real-time order tracking.',
    metrics: [
      { value: '2.3x', label: 'Conversion Rate' },
      { value: '-38%', label: 'Cart Abandonment' },
    ],
    cta: { label: 'View Case Study', href: '/case-studies/quickserve' },
  },
  {
    title: 'FitPro Dash',
    image: cs3,
    tags: [
      { label: 'Dashboard UX', tone: 'neutral' },
      { label: 'SaaS', tone: 'orange' },
    ],
    description:
      'Analytics-driven coaching dashboard with cohort insights, funnels, and automated reporting.',
    metrics: [
      { value: '+64%', label: 'Coach Productivity' },
      { value: 'A+', label: 'Core Web Vitals' },
    ],
    cta: { label: 'View Case Study', href: '/case-studies/fitpro-dash' },
  },
];

// export const metadata = {
//   title: "| HakamTechSol",
// };


const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            
           
            <ServiceHomeOne />
            <CaseStudy heading="Case Studies" items={items} />;
            
            <BrandHomeOne style_2={false} />
            
            <Testimonial />
            <FunFactHomeOne />
            
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;