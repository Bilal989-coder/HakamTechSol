'use client';

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import blog_img_1 from "@/assets/img/design/1.jpg";
import blog_img_2 from "@/assets/img/design/2.jpg";
import blog_img_3 from "@/assets/img/design/3.jpg";
import blog_img_4 from "@/assets/img/design/4.webp";
import blog_img_5 from "@/assets/img/design/5.jpg";
import blog_img_6 from "@/assets/img/design/6.jpg";
import blog_img_7 from "@/assets/img/design/7.jpg";
import blog_img_8 from "@/assets/img/design/8.webp";
import blog_img_9 from "@/assets/img/design/9.jpg";
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: 'Logo Design & Branding', des: 'Unique, timeless logos with full brand guidelines.' },
  { id: 2, img: blog_img_2, title: 'Web & App Graphics', des: 'UI assets, banners, icons, and custom illustrations.' },
  { id: 3, img: blog_img_3, title: 'Packaging Design', des: 'Eye-catching and functional packaging that sells.' },
  { id: 4, img: blog_img_4, title: 'Social Media Designs', des: 'Engaging posts, stories, and ads optimized for platforms.' },
  { id: 5, img: blog_img_5, title: 'Marketing Collateral', des: 'Brochures, flyers, business cards, presentations, and posters.' },
  { id: 6, img: blog_img_6, title: 'Infographics', des: 'Simplifying complex data into visually appealing storytelling.' },
  { id: 6, img: blog_img_7, title: 'Print & Publication Design', des: 'Professional layouts for magazines, catalogs, reports, and books.' },
  { id: 7, img: blog_img_8, title: 'Brand Style Guides', des: 'Comprehensive guidelines covering typography, color palettes, logo usage, and visual tone.' },
  { id: 7, img: blog_img_9, title: 'Motion Graphics', des: 'Animated graphics for ads, explainer videos, and promos.' },
];

const hero_contact: HeroDetails = {
  title: 'Creative Designs That Define Your Brand Identity',
  description:
    `We craft visually stunning designs that communicate your story, captivate your audience, and give your brand a lasting impression.In today’s competitive digital world, first impressions matter more than ever. Whether it’s your logo, website, social media, or marketing material, your design speaks volumes about your business before you say a single word.Our graphic design services focus on creating designs that are not just beautiful, but also strategic, memorable, and impactful. We blend creativity with your brand’s personality to deliver visuals that resonate with your audience and build trust.`,
  imageUrl: '/assets/img/motion.jpg',
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Creative & Original Designs", subtitle: "that make your brand stand out.", icon: "⚡", href: "/performance" },
    { title: "Multi-Platform Ready", subtitle: "designs optimized for digital, print, and social media.", icon: "📶", href: "/offline" },
    { title: "Consistent Branding", subtitle: "to ensure your visuals look cohesive everywhere.", icon: "📲", href: "/install" },
    { title: "Strategic Approach", subtitle: "with focus on marketing goals and brand identity.", icon: "🛡️", href: "/security" },
    { title: "Fast Turnaround", subtitle: "without compromising on quality.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="Graphic Design Services We Offer" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
