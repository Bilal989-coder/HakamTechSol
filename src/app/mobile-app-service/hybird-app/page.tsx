'use client';

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Testimonial from '@/components/testimonial/Testimonial';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Service from '@/components/service/Service';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';

import blog_img_1 from "@/assets/img/hybird/1.avif";
import blog_img_2 from "@/assets/img/hybird/2.avif";
import blog_img_3 from "@/assets/img/hybird/3.jpg";
import blog_img_4 from "@/assets/img/hybird/4.avif";
import blog_img_5 from "@/assets/img/hybird/5.jpg";
import blog_img_6 from "@/assets/img/hybird/6.avif";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

// --- Hybrid App cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // swap later with a React Native image if you like
    title: "React Native (JS/TS)",
    des: "Shared codebase with native bridges for camera, maps, and secure storage. Fast iteration, OTA updates, and truly native feel."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Flutter (Dart)",
    des: "Beautiful, consistent UI with Material/Cupertino widgets, smooth 60fps animations, and a single codebase for iOS/Android/web."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Ionic + Capacitor",
    des: "Web tech + native plugins: build once with Angular/React/Vue, ship to iOS/Android with access to device APIs and push."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Enterprise / B2B"
    ,
    des: "Role-based access, SSO (OAuth/SAML), offline forms, secure data sync, and admin dashboards for field & back-office teams."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Media & Streaming",
    des: "Player controls, background audio, downloads, analytics, and subscriptions/billing across platforms."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Field Ops & Logistics",
    des: "GPS tracking, barcode/QR, offline tasks, and safe conflict resolution when the network returns."
  }
];

// --- Hybrid App hero content ---
const hero_contact: HeroDetails = {
  title: "Cost-Effective Hybrid Mobile Apps That Work Across All Devices",
  description: `We build responsive hybrid apps using modern frameworks like Ionic and Cordova—delivering cross-platform functionality with a single codebase. Perfect for startups and businesses looking to launch fast and stay efficient.

Hybrid mobile apps combine the flexibility of web technologies (HTML, CSS, JavaScript) with native app containers, allowing you to launch your product on both iOS and Android from a single development effort. They offer a cost-effective, fast, and scalable solution for businesses that don’t require heavy native functionality but still want a mobile presence.

Our hybrid apps are optimized for performance and designed to feel like native experiences—smooth, functional, and user-focused.`,
  
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Hybrid App Development?",
  features: [
    { title: "Lower Cost, One Codebase", subtitle: "No need to build separate apps for Android and iOS.", icon: "⚡", href: "/performance" },
    { title: "Consistent User Experience", subtitle: "Unified look and feel across platforms.", icon: "📶", href: "/offline" },
    { title: "Faster Time to Market", subtitle: "Launch sooner and iterate faster.", icon: "📲", href: "/install" },
    { title: "Easy Maintenance", subtitle: "Updates and fixes are faster with a single codebase.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Faster development cycles.",
    "Budget-friendly for startups and small businesses.",
    "Easy integration with third-party APIs and plugins.",
    "Lightweight apps with modern UI/UX.",
    "Optimized for offline capabilities and performance.",
  ],
  theme: { primary: "#6C5CE7", accent: "#FF7A00" },
};

const Page = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails data={hero_contact} />
            <WhyChoosePro data={whyPWA} />
            <BlogHomeOne heading="Types of Hybrid Mobile Apps" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
