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
import blog_img_7 from "@/assets/img/erp/7.jpg";
import blog_img_8 from "@/assets/img/erp/8.jpg";
import blog_img_9 from "@/assets/img/erp/9.jpg";

import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';


const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: 'Human Resource Management (HRM)', des: 'Employee records, attendance, payroll, and performance tracking.' },
  { id: 2, img: blog_img_2, title: 'Finance & Accounting', des: 'Invoicing, budgeting, expense tracking, and financial reporting.' },
  { id: 3, img: blog_img_3, title: 'Inventory & Supply Chain', des: 'Real-time stock monitoring, vendor management, and order tracking.' },
  { id: 4, img: blog_img_4, title: 'Project Management', des: 'Task assignments, progress tracking, and resource allocation.' },
  { id: 5, img: blog_img_5, title: 'Manufacturing & Production', des: 'Production scheduling, quality control, and resource planning' },
  { id: 6, img: blog_img_6, title: 'Reporting & Analytics', des: 'Data-driven insights to help you make smarter business decisions.' },
  { id: 7, img: blog_img_7, title: 'Procurement Management', des: 'Streamlines purchasing processes, vendor negotiations, and order approvals while ensuring cost efficiency.' },
  { id: 8, img: blog_img_8, title: 'Customer Relationship Management (CRM)', des: 'Lead tracking, customer support, and sales pipeline management.' },
  { id: 9, img: blog_img_9, title: 'Asset Management', des: 'Tracks company assets, maintenance schedules, depreciation, and lifecycle management for better resource utilization.' },
  ];

const hero_contact: HeroDetails = {
  title: 'Custom ERP Solutions to Streamline & Automate Your Business',
  description:
    `We design and develop powerful, scalable, and fully customized ERP systems that integrate your processes, data, and teams into one centralized platform—helping you work smarter, faster, and more efficiently.Enterprise Resource Planning (ERP) is more than just software—it’s the backbone of a modern business. An ERP system unifies your operations across departments—finance, HR, sales, inventory, production, and more—into one centralized, real-time dashboard.We specialize in building custom ERP solutions tailored to your workflows, ensuring that you get exactly what your business needs—without the complexity of off-the-shelf software. Whether you’re looking for a full-scale ERP or modular systems to manage specific functions, we deliver solutions that enhance efficiency, reduce operational costs, and give you complete control over your business data.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Custom-Built for Your Business", subtitle: "No unnecessary features, just the tools you need.", icon: "⚡", href: "/performance" },
    { title: "Full Integration Capability", subtitle: "Connects seamlessly with your existing systems.", icon: "📶", href: "/offline" },
    { title: "Scalable & Future-Ready", subtitle: "Grows with your business demands.", icon: "📶", href: "/offline" },
    { title: "Mobile & Cloud Ready", subtitle: "Access your ERP anywhere, anytime.", icon: "📲", href: "/install" },
    { title: "High-Level Security", subtitle: "Advanced authentication, encryption, and compliance protocols.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="Key ERP Modules We Develop" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
