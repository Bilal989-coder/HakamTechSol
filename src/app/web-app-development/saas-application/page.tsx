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

import blog_img_1 from "@/assets/img/erp/hrm.jpg";
import blog_img_2 from "@/assets/img/erp/2.jpg";
import blog_img_3 from "@/assets/img/erp/3.jpg";
import blog_img_4 from "@/assets/img/erp/4.jpg";
import blog_img_5 from "@/assets/img/erp/5.jpg";
import blog_img_6 from "@/assets/img/erp/6.jpg";
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';


const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: 'Business Productivity Tools', des: 'Project management, task automation, collaboration apps.' },
  { id: 2, img: blog_img_2, title: 'CRM & ERP SaaS', des: 'Manage customer relationships, sales pipelines, and operations.' },
  { id: 3, img: blog_img_3, title: 'E-commerce SaaS', des: 'Cloud-based shopping platforms and marketplace solutions.' },
  { id: 4, img: blog_img_4, title: 'Healthcare SaaS', des: 'Patient management, telemedicine, and appointment booking.' },
  { id: 5, img: blog_img_5, title: 'EdTech SaaS', des: 'E-learning platforms, course marketplaces, and exam systems.' },
  { id: 6, img: blog_img_6, title: 'FinTech SaaS', des: 'Invoicing, accounting, payment processing, and investment tools.' },
];

const hero_contact: HeroDetails = {
  title: 'Build Scalable, Secure, and High-Performance SaaS Solutions',
  description:
    `From idea to deployment, we specialize in building Software as a Service (SaaS) platforms that empower businesses with cloud-native, scalable, and subscription-ready applications.

In today’s digital-first world, SaaS applications are transforming how businesses deliver software. Instead of selling products as one-time installations, SaaS offers on-demand access to powerful solutions via the cloud—improving flexibility, lowering costs, and enabling continuous updates.

Our team develops custom SaaS applications tailored to your industry, whether it’s project management, CRM, e-learning, healthcare, or finance. We focus on building applications that are multi-tenant, secure, highly available, and easy to scale as your user base grows. With expertise in modern frameworks, APIs, and cloud infrastructure, we ensure your SaaS product is ready to compete globally.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Custom-Built SaaS Platforms", subtitle: "tailored to your business idea.", icon: "⚡", href: "/performance" },
    { title: "Multi-Tenant Architecture", subtitle: "for efficient user and resource management.", icon: "📶", href: "/offline" },
    { title: "Scalable Infrastructure", subtitle: "that grows as your user base expands.", icon: "📶", href: "/offline" },
    { title: "Third-Party Integrations", subtitle: "(APIs, CRMs, ERPs, Payment Gateways).", icon: "📲", href: "/install" },
    { title: "Cloud-Native & Secure", subtitle: "with industry-standard encryption and compliance.", icon: "🛡️", href: "/security" },
    { title: "Subscription & Billing Integration", subtitle: "with recurring payments, invoicing, and trial models.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="Types of SaaS Applications We Develop" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
