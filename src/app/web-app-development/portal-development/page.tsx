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

import blog_img_1 from "@/assets/img/potal/client-portal.jpg";
import blog_img_2 from "@/assets/img/potal/2.jpg";
import blog_img_3 from "@/assets/img/potal/3.jpg";
import blog_img_4 from "@/assets/img/potal/4.jpg";
import blog_img_5 from "@/assets/img/potal/5.jpg";
import blog_img_6 from "@/assets/img/potal/6.jpg";

import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';


const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: 'Client Portals', des: 'Secure, personalized platforms where your clients can track the progress of their projects, access reports, download important documents, and communicate directly with your team. These portals streamline service delivery, reduce email clutter, and improve transparency, ensuring clients always have the information they need at their fingertips.' },
  { id: 2, img: blog_img_2, title: 'Employee Portals', des: 'Centralized internal hubs for managing HR tasks, tracking attendance, sharing company announcements, and facilitating internal communications. Employee portals help businesses boost productivity, keep teams informed, and provide easy access to essential resources like policies, training materials, and payroll information.' },
  { id: 3, img: blog_img_3, title: 'Vendor/Supplier Portals', des: 'Dedicated spaces for suppliers to manage orders, view invoices, track delivery schedules, and collaborate with your procurement team. These portals simplify supply chain management, enhance vendor relationships, and ensure smooth, error-free transactions between your business and its partners.' },
  { id: 4, img: blog_img_4, title: 'Community Portals', des: 'Interactive platforms for members to engage in discussions, share knowledge, participate in forums, and access exclusive resources. Community portals are perfect for associations, interest groups, or organizations aiming to build stronger connections, encourage collaboration, and foster loyalty among members.' },
  { id: 5, img: blog_img_5, title: 'Educational Portals', des: 'Comprehensive platforms for e-learning, enabling institutions to manage student data, conduct online classes, host exams, and share study materials. Educational portals improve accessibility, streamline administrative work, and provide a rich learning experience for students and faculty alike.' },
  { id: 6, img: blog_img_6, title: 'Healthcare Portals', des: 'Secure, HIPAA-compliant systems that allow patients to view medical records, book appointments, request prescriptions, and communicate with healthcare providers. These portals enhance patient engagement, reduce administrative burden, and improve the overall quality of care delivery.' },
  ];

const hero_contact: HeroDetails = {
  title: 'Custom Web Portals to Streamline Your Business Operations',
  description:
    `We design and develop secure, scalable, and user-friendly portals that connect your teams, clients, and data—delivering efficiency and better decision-making.A web portal is a centralized platform that brings together information, tools, and communication channels into one unified interface. Whether you need a client portal, employee portal, vendor portal, or community platform, we create tailored solutions that help your business operate smoothly.Our portals are custom-built with robust features, seamless integrations, and a focus on user experience—so your stakeholders can access exactly what they need, when they need it.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Custom Functionality", subtitle: "Built for your unique workflows.", icon: "⚡", href: "/performance" },
    { title: "Seamless Integrations", subtitle: "Connect with CRMs, ERPs, and other third-party tools.", icon: "📶", href: "/offline" },
    { title: "Anywhere Access", subtitle: "Fully responsive and mobile-ready.", icon: "📶", href: "/offline" },
    { title: "Scalable Solutions", subtitle: "Grow and adapt as your business evolves.", icon: "📲", href: "/install" },
    { title: "High Security Standards", subtitle: "Protect your sensitive data with advanced security protocols.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="Types of Portals We Build" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
