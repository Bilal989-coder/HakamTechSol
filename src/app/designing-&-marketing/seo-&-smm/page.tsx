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

import blog_img_1 from "@/assets/img/seo&smm/1.jpg";
import blog_img_2 from "@/assets/img/seo&smm/2.jpg";
import blog_img_3 from "@/assets/img/seo&smm/3.jpg";
import blog_img_4 from "@/assets/img/seo&smm/4.jpg";
import blog_img_5 from "@/assets/img/seo&smm/5.jpg";
import blog_img_6 from "@/assets/img/seo&smm/6.jpg";
import blog_img_7 from "@/assets/img/seo&smm/7.webp";
import blog_img_8 from "@/assets/img/seo&smm/8.webp";
import blog_img_9 from "@/assets/img/seo&smm/9.jpg";
import blog_img_11 from "@/assets/img/seo&smm/11.webp";
import blog_img_12 from "@/assets/img/seo&smm/12.webp";

import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: 'Website Audit & Analysis', des: 'Identifying strengths, weaknesses, and opportunities.' },
  { id: 2, img: blog_img_2, title: 'Keyword Research', des: 'Finding the terms your customers are actually searching.' },
  { id: 3, img: blog_img_3, title: 'On-Page Optimization', des: 'Optimizing meta tags, content, structure, and internal linking.' },
  { id: 4, img: blog_img_4, title: 'Off-Page Optimization', des: 'High-quality backlinks, guest posts, and digital PR.' },
  { id: 5, img: blog_img_5, title: 'Technical SEO', des: 'Fixing speed, mobile responsiveness, schema markup, and more.' },
  { id: 6, img: blog_img_6, title: 'Local SEO', des: 'Google Business Profile optimization to dominate local searches.' },
  { id: 7, img: blog_img_7, title: 'Social Media Strategy', des: 'Customized growth and engagement plan for each platform.' },
  { id: 8, img: blog_img_8, title: 'Content Creation', des: 'Eye-catching graphics, videos, and copy that align with your brand.' },
  { id: 9, img: blog_img_9, title: 'Community Management', des: 'Engaging with followers and building trust.' },
  { id: 11, img: blog_img_11, title: 'Influencer Collaboration', des: 'Partnering with industry-relevant influencers to expand reach.' },
  { id: 12, img: blog_img_12, title: 'Analytics & Reporting', des: 'Transparent insights into performance and ROI..' },
];

const hero_contact: HeroDetails = {
  title: 'Boost Your Online Presence with SEO & SMM That Delivers Results',
  description:
    `We help businesses increase visibility, drive traffic, and engage customers through powerful Search Engine Optimization (SEO) and Social Media Marketing (SMM) strategies tailored to their goals.In today’s digital-first world, having a website isn’t enough — your business needs to be seen, heard, and remembered. With millions of brands competing online, SEO and SMM are the most effective tools to stay ahead.Our SEO strategies ensure your website ranks higher on search engines like Google, attracting organic traffic that converts. Meanwhile, our Social Media Marketing services build your brand voice, engage your audience, and create loyal communities across platforms such as Facebook, Instagram, LinkedIn, X (Twitter), and TikTok.By combining SEO and SMM, we create an integrated growth engine for your business — increasing visibility, building trust, and driving measurable ROI.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "End-to-End Service", subtitle: "Both SEO and SMM managed under one roof.", icon: "⚡", href: "/performance" },
    { title: "Proven Results", subtitle: "Improved rankings, increased followers, and higher conversions.", icon: "📶", href: "/offline" },
    { title: "Data-Driven Approach", subtitle: "Every decision backed by analytics and research.", icon: "📲", href: "/install" },
    { title: "Customized Solutions", subtitle: "Tailored strategies for startups, SMEs, and enterprises.", icon: "🛡️", href: "/security" },
    { title: "Long-Term Growth", subtitle: "Not just only quick wins, but sustainable brand presence.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="SEO & SMM Services We Offer" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
