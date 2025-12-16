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

import blog_img_1 from "@/assets/img/blog/travel.jpeg";
import blog_img_2 from "@/assets/img/blog/food.jpeg";
import blog_img_3 from "@/assets/img/blog/fashion.jpeg";
import blog_img_4 from "@/assets/img/blog/tech.jpeg";
import blog_img_5 from "@/assets/img/blog/fainance.jpeg";
import blog_img_6 from "@/assets/img/blog/health.jpeg";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

const blog_data: BlogItem[] = [
  {
    id: 7,
    img: blog_img_1,
    title: "Travel & Adventure Blog",
    des: "City guides, interactive maps, and itineraries with galleries and booking/affiliate integrations."
  },
  {
    id: 8,
    img: blog_img_2,
    title: "Food & Recipe Blog",
    des: "Recipe cards with servings, timers, nutrition labels, and SEO schema for rich results on Google."
  },
  {
    id: 9,
    img: blog_img_3,
    title: "Fashion & Beauty Blog",
    des: "Lookbooks, shoppable posts, and trend roundups with Instagram embeds and creator-friendly layouts."
  },
  {
    id: 10,
    img: blog_img_4,
    title: "Tech & Developer Blog",
    des: "MDX/code blocks, dark mode, versioned docs, and search—perfect for dev logs and product changelogs."
  },
  {
    id: 11,
    img: blog_img_5,
    title: "Finance & Investing Blog",
    des: "Data-driven articles, charts, and calculators with category silos for markets, crypto, and personal finance."
  },
  {
    id: 12,
    img: blog_img_6,
    title: "Health & Wellness Blog",
    des: "Evidence-based articles, routines, and resources with author bios and references for credibility."
  }
];

const hero_contact: HeroDetails = {
  title: 'Engaging, Scalable Blog Websites That Keep Readers Coming Back',
  description:
    `We design and develop custom blog websites that are fast, user-friendly, SEO-optimized, and easy to manage. Whether you're a solo writer, news publisher, or brand building thought leadership—we’ve got you covered.A well-crafted blog website does more than just display articles—it builds your voice, drives organic traffic, and connects with your audience. We build responsive, content-rich blog websites using platforms like WordPress, Custom CMS, or headless setups, giving you full control over publishing and performance.From clean layouts to powerful search and categorization features, our blog websites are tailored to your goals—be it monetization, SEO, or storytelling.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Content-Focused UX", subtitle: "Designed to put your content in the spotlight.", icon: "⚡", href: "/performance" },
    { title: "Easy-to-Manage CMS", subtitle: "No tech skills needed to update or publish content.", icon: "📶", href: "/offline" },
    { title: "SEO-Optimized Structure", subtitle: "Better visibility with optimized code, speed, and metadata.", icon: "📲", href: "/install" },
    { title: "Analytics Ready", subtitle: "Integrations for Google Analytics, AdSense, and email marketing tools.", icon: "🛡️", href: "/security" },
    { title: "Engagement Features", subtitle: "Comment sections, share buttons, newsletter sign-ups, and more.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Category/tag-based navigation.",
    "Featured posts, trending articles.",
    "Author profiles and archives.",
    "Commenting system (Disqus, native, or custom).",
    "Newsletter opt-ins and popup integrations.",
    "Monetization-ready (ads, affiliate links, sponsorships).",
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
            <BlogHomeOne heading="Types of Blog Websites" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
