'use client';

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Testimonial from '@/components/testimonial/Testimonial';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Service from '@/components/service/Service';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData } from '@/components/hero/shared';
import blog_img_1 from "@/assets/img/pwa/1.avif";
import blog_img_2 from "@/assets/img/pwa/2.avif";
import blog_img_3 from "@/assets/img/pwa/3.avif";
import blog_img_4 from "@/assets/img/pwa/4.avif";
import blog_img_5 from "@/assets/img/pwa/5.jpg";
import blog_img_6 from "@/assets/img/pwa/6.avif";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import type { BlogItem } from '@/components/hero/shared';

// --- PWA cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // swap later with a retail/ecom PWA image
    title: "Retail / E-commerce PWA",
    des: "Installable storefront with offline catalog, smart caching, web payments, push promos, and Add-to-Home-Screen."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "News & Publishing PWA",
    des: "Fast article loads, background sync, reading lists offline, and web push alerts for breaking news."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Booking & On-Demand PWA",
    des: "Real-time status, live maps, push notifications, and offline fallbacks for rides, food, or service bookings."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "SaaS Dashboard PWA",
    des: "App-shell architecture with instant navigation, cached reports, and secure auth—works great on desktop & mobile."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Media & Streaming PWA",
    des: "Optimized streaming UI with ‘install’ prompt, mini-player, picture-in-picture, and background playback options."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Offline-First / Field Service PWA",
    des: "Work anywhere: geolocation, camera/QR, background sync, and conflict-safe data when the network returns."
  }
];

// --- PWA hero content ---
const hero_contact: HeroDetails = {
  title: "Progressive Web Apps That Combine the Power of Web and Mobile",
  description: `We build fast, reliable, and installable Progressive Web Apps (PWAs) that deliver native-like experiences—without the app store barrier. Reach your users everywhere with a single, seamless solution.

Progressive Web Apps are modern web applications that offer a mobile app-like experience through the browser. Built using standard web technologies like HTML, CSS, and JavaScript, PWAs work across all devices and platforms while offering offline access, push notifications, and lightning-fast performance.

Whether you need an e-commerce platform, content site, or custom dashboard, our PWAs deliver speed, reliability, and convenience—without requiring a download.`,
  
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us to Build Your PWA?",
  features: [
    { title: "Installable Without App Stores", subtitle: "Users can install your app directly from the browser.", icon: "⚡", href: "/performance" },
    { title: "Fast & Reliable", subtitle: "Loads instantly, even on slow networks or offline.", icon: "📶", href: "/offline" },
    { title: "Cross-Platform", subtitle: "One app for mobile, tablet, and desktop.", icon: "📲", href: "/install" },
    { title: "Push Notifications", subtitle: "Re-engage users with timely, targeted updates.", icon: "🛡️", href: "/security" },
    { title: "Cost-Effective", subtitle: "Build once, run everywhere—without separate native development.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Quick development and deployment.",
    "Improved user engagement and retention.",
    "Lower bounce rates and higher conversions.",
    "SEO-friendly architecture and indexable content.",
    "Lightweight, fast-loading, and secure.",
    
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
            <BlogHomeOne heading="Types of Progressive Web Apps (PWA)" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
