'use client';

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Service from '@/components/service/Service';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';

import blog_img_1 from "@/assets/img/cms/1.avif";
import blog_img_2 from "@/assets/img/cms/2.avif";
import blog_img_3 from "@/assets/img/cms/3.avif";
import blog_img_4 from "@/assets/img/cms/4.avif";
import blog_img_5 from "@/assets/img/cms/5.avif";
import blog_img_6 from "@/assets/img/cms/6.avif";

import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';


// --- CMS cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // swap later with a CMS image
    title: "Corporate / Marketing CMS",
    des: "Easy page editing, landing builders, forms, and translations—built to publish fast and capture leads."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Newsroom & Publishing CMS",
    des: "Multi-author workflow, drafts & approvals, schedule posts, categories/tags, and SEO schema for rich results."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Documentation / Knowledge Base",
    des: "Versioned docs, powerful search, MDX/code blocks, changelogs, and feedback to reduce support tickets."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Education / LMS CMS",
    des: "Courses, lessons, quizzes, certificates, drip content, and secure access with Stripe/PayPal payments."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Membership / Community CMS",
    des: "Gated content, roles/permissions, subscriptions, forums/comments, and SSO integrations."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Headless CMS (Jamstack)",
    des: "Sanity/Strapi/Contentful + Next.js for speed, security, and multi-channel content (web, app, kiosks)."
  }
];

// --- CMS hero content ---
const hero_contact: HeroDetails = {
  title: "Take Control of Your Website with a Powerful CMS",
  description: `We build user-friendly CMS-based websites that put you in charge—update, edit, and publish content without touching a single line of code. 
A CMS (Content Management System) website gives you the flexibility to manage your content without technical skills. Whether you want to post blogs, update product details, change images, or add new pages, a CMS makes it easy and instant.
We specialize in designing and developing custom CMS websites that are secure, scalable, and tailored to your brand’s unique needs—so you’re not stuck relying on developers for every small change.
Popular CMS platforms we work with include WordPress, Joomla, Drupal, SquareSpace, Wix, and custom-built solutions.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Easy to Update", subtitle: "No coding knowledge required.", icon: "⚡", href: "/performance" },
    { title: "Secure & Reliable", subtitle: "Built with best practices to protect your data.", icon: "📶", href: "/offline" },
    { title: "Scalable", subtitle: "Add new pages and features anytime.", icon: "📶", href: "/offline" },
    { title: "Faster Turnaround", subtitle: "Get your site up and running quickly.", icon: "📲", href: "/install" },
    { title: "Mobile-Responsive", subtitle: "Perfect display across devices.", icon: "🛡️", href: "/security" },
    { title: "SEO-Ready", subtitle: "Optimized for search engines from day one.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Custom theme design.",
    "Drag-and-drop page builder integration.",
    "User role & permission management.",
    "Built-in SEO tools.",
    "Blog & article publishing.",
    "Media management (images, videos, documents).",
    "Contact forms & lead capture tools.",
    "Multilingual capabilities.",
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
            <BlogHomeOne heading="Types of CMS Websites" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
