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

import blog_img_1 from "@/assets/img/portfolio/1.jpg";
import blog_img_2 from "@/assets/img/portfolio/pexels-pixabay-355952.jpg";
import blog_img_3 from "@/assets/img/portfolio/kyle-loftus-3UcQtXSvA88-unsplash.jpg";
import blog_img_4 from "@/assets/img/portfolio/jakob-owens-fnjxpnaivnE-unsplash.jpg";
import blog_img_5 from "@/assets/img/portfolio/jakub-zerdzicki-v9iowyOH7QQ-unsplash.jpg";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1, // swap later with a portfolio image if you prefer
    title: "Personal Portfolio",
    des: "A clean one-pager that highlights your story, skills, and best work—with a clear contact CTA to drive inquiries."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Designer / UI-UX Portfolio",
    des: "Case-study style projects (problem → process → outcome), prototype embeds (Figma), and visuals that sell your thinking."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Developer Portfolio",
    des: "Tech stack highlights, tagged projects, live demos, code snippets/MDX, and performance scores that impress recruiters."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Agency / Studio Portfolio",
    des: "Service pages + rich case studies, client logos, testimonials, and a frictionless contact/brief form to capture leads."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Photographer / Videographer Portfolio",
    des: "Fast, visual galleries with lightbox, client proofing, watermarking options, and optional shop/bookings."
  },
  {
    id: 6,
    img: blog_img_5,
    title: "Resume / CV + One-Page Portfolio",
    des: "ATS-friendly resume download, social links, Calendly booking, and a polished project grid—perfect for job hunting."
  }
];

const hero_contact: HeroDetails = {
  title: "Showcase Your Talent with a Stunning Portfolio Website",
  description: `We build beautiful, responsive, and high-converting portfolio websites that help you stand out, get noticed, and win more clients. Perfect for freelancers, creatives, professionals, and agencies.

Your portfolio website is your digital identity—a space to showcase your work, tell your story, and convert visitors into clients or collaborators. Whether you’re a designer, developer, photographer, writer, or agency, we create custom portfolio sites that reflect your style and elevate your personal brand.

Our portfolio websites are fast, mobile-friendly, SEO-optimized, and easy to update—so your best work is always front and center.`,
  
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Design-First Approach", subtitle: "Visually stunning interfaces that reflect your brand and creativity.", icon: "⚡", href: "/performance" },
    { title: "Easy Content Management", subtitle: "Update your projects or resume anytime—no coding needed.", icon: "📶", href: "/offline" },
    { title: "Speed Optimized", subtitle: "Lightning-fast loading times for better UX and SEO.", icon: "📲", href: "/install" },
    { title: "SEO & Social Sharing Ready", subtitle: "Boost visibility and share your work seamlessly.", icon: "🛡️", href: "/security" },
    { title: "Lead Capture Integration", subtitle: "Add contact forms, booking options, or call-to-action buttons.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Project galleries and case studies.",
    "About me / bio section.",
    "Downloadable resume/CV.",
    "Client testimonials and reviews.",
    "Contact form with scheduling options.",
    "Blog or thought leadership section.",
    "Password-protected or private portfolios (optional).",
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
            <BlogHomeOne heading="Types of Portfolio Websites" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
