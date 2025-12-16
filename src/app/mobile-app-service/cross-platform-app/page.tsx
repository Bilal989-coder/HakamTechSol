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

import blog_img_1 from "@/assets/img/cross/1.avif";
import blog_img_2 from "@/assets/img/cross/2.avif";
import blog_img_3 from "@/assets/img/cross/3.avif";
import blog_img_4 from "@/assets/img/cross/4.avif";
import blog_img_5 from "@/assets/img/cross/5.avif";
import blog_img_6 from "@/assets/img/cross/6.jpg";
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

// --- Cross-Platform App cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // placeholder; swap later
    title: "React Native (JS/TS)",
    des: "One codebase for iOS & Android with native modules for camera, maps, biometrics, and secure storage."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Flutter (Dart)",
    des: "Beautiful UI with Material/Cupertino widgets, smooth animations, and consistent performance across platforms."
  },
  {
    id: 3,
    img: blog_img_3,
    title: ".NET MAUI",
    des: "C#/.NET stack to target iOS, Android, macOS & Windows with shared UI and access to native APIs."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Kotlin Multiplatform Mobile (KMM)",
    des: "Share business logic in Kotlin while keeping native UIs for iOS and Android where it matters."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Unity (2D/3D, AR)",
    des: "High-performance cross-platform apps/games with 2D/3D rendering, AR support, and fast iteration."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Ionic + Capacitor",
    des: "Web tech (React/Vue/Angular) + native plugins for push, camera, and file access—ship to stores quickly."
  }
];

// --- Cross-Platform hero content ---
const hero_contact: HeroDetails = {
  title: "Cross-Platform Mobile Apps That Perform Like Native—Built Faster and Smarter",
  description: `We develop high-performance cross-platform mobile apps using Flutter and React Native, enabling you to reach iOS and Android users with a single codebase—without compromising on speed or experience.

Cross-platform mobile apps are built using a single codebase that runs seamlessly on both Android and iOS. With tools like Flutter and React Native, we deliver apps that combine the cost-efficiency of hybrid apps with the performance of native apps.

If you want to reduce time to market and save development costs—without sacrificing app quality—our cross-platform development service is the ideal solution.`,
  
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Cross-Platform App Development?",
  features: [
    { title: "One Codebase, Multiple Platforms", subtitle: "Reduce development effort and cost.", icon: "⚡", href: "/performance" },
    { title: "Faster Development Cycle", subtitle: "Deliver your app to users sooner.", icon: "📶", href: "/offline" },
    { title: "Modern Tech Stack", subtitle: "Powered by Flutter and React Native for high-quality results.", icon: "📲", href: "/install" },
    { title: "Native-like Performance", subtitle: "Built with frameworks that compile to native code.", icon: "🛡️", href: "/security" },
    { title: "Easy Updates & Maintenance", subtitle: "Simplify version control and debugging.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Reduced cost and time-to-market.",
    "Consistent performance and UI across devices.",
    "Future-ready architecture for scaling.",
    "Smooth animations and responsive interfaces.",
    "Access to native features like camera, GPS, push notifications, etc.",
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
            <BlogHomeOne heading="Types of Cross-Platform Mobile Apps" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
