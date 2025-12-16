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

import blog_img_1 from "@/assets/img/native/1.avif";
import blog_img_2 from "@/assets/img/native/2.avif";
import blog_img_3 from "@/assets/img/native/3.avif";
import blog_img_4 from "@/assets/img/native/4.jpg";
import blog_img_5 from "@/assets/img/native/5.avif";
import blog_img_6 from "@/assets/img/native/3.avif";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

// --- Native App cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // swap later with native/iOS image if you prefer
    title: "iOS Native (Swift / SwiftUI)",
    des: "Pixel-perfect apps aligned to Apple HIG with SwiftUI, StoreKit, Sign in with Apple, iCloud sync, and Core Data/Realm."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Android Native (Kotlin / Compose)",
    des: "Modern Material 3 UI with Jetpack Compose, Room, WorkManager, Play Billing, Google Maps, and deep links."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "FinTech & Wallet Apps",
    des: "Bank-grade auth (biometrics/OTP), 3-D Secure, KYC flows, ledgers, payouts, and real-time transaction updates."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "On-Demand & Delivery",
    des: "Live order tracking, driver app, route optimization, in-app chat/notifications, and ops dashboards."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "E-commerce & Marketplace",
    des: "High-speed catalog, variants, coupons, Stripe/PayPal/local gateways, order tracking, and vendor portals."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "EdTech & eLearning",
    des: "Courses, quizzes, progress tracking, offline downloads, and live classes with secure content delivery."
  }
];

// --- Native App hero content ---
const hero_contact: HeroDetails = {
  title: "Build High-Performance Native Mobile Apps That Deliver Exceptional Experiences",
  description: `We create fast, secure, and platform-optimized mobile apps tailored for iOS and Android using native technologies. Perfect for businesses that need speed, precision, and complete device integration.

Native mobile apps are developed specifically for a particular operating system—Swift/Objective-C for iOS and Kotlin/Java for Android. These apps deliver the best possible performance, responsiveness, and integration with device features like GPS, camera, sensors, and more.

Whether you’re building an app for consumers, employees, or enterprise operations, we develop native apps that are powerful, reliable, and future-ready.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Native App Development?",
  features: [
    { title: "Unmatched Performance", subtitle: "Fast and responsive apps with smooth animations and transitions.", icon: "⚡", href: "/performance" },
    { title: "Full Device Access", subtitle: "Leverage GPS, camera, notifications, Bluetooth, sensors, and more.", icon: "📶", href: "/offline" },
    { title: "Better UX", subtitle: "Native apps follow platform-specific UI/UX guidelines, offering familiar navigation.", icon: "📲", href: "/install" },
    { title: "High Security", subtitle: "Greater control over platform-specific security and data handling.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Custom solutions tailored to your business goals.",
    "Expertise in both iOS and Android platforms.",
    "Scalable architecture for future upgrades.",
    "Faster loading times and enhanced user satisfaction.",
    "Post-launch maintenance and feature updates.",
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
            <BlogHomeOne heading="Types of Native Mobile Apps" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
