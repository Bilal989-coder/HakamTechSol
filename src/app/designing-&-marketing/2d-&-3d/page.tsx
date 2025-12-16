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

import blog_img_1 from "@/assets/img/2d.jpg";
import blog_img_2 from "@/assets/img/3d.jpeg";
import blog_img_3 from "@/assets/img/3.jpg";
import blog_img_4 from "@/assets/img/5.jpg";
import blog_img_5 from "@/assets/img/6.jpg";
import blog_img_6 from "@/assets/img/7.jpg";
import blog_img_7 from "@/assets/img/virtual.jpg";

import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';

const blog_data: BlogItem[] = [
  { id: 1, img: blog_img_1, title: '2D Illustrations & Concept Art', des: 'Character designs, environments, and storyboards.' },
  { id: 2, img: blog_img_2, title: '3D Modeling & Sculpting', des: 'High-poly and low-poly models for games, animation, and AR/VR.' },
  { id: 3, img: blog_img_3, title: 'Architectural Visualization', des: 'Interior and exterior 3D renders for real estate and construction.' },
  { id: 4, img: blog_img_4, title: 'Animation (2D & 3D)', des: 'Smooth, dynamic animations for games, ads, and explainer videos.' },
  { id: 5, img: blog_img_5, title: 'Product Visualization', des: '3D renders for e-commerce, manufacturing, and architecture.' },
  { id: 6, img: blog_img_6, title: 'Game Assets', des: 'Characters, props, environments, and UI elements ready for integration.' },
  { id: 7, img: blog_img_7, title: 'Virtual & Augmented Reality Assets', des: 'Optimized 3D models and environments for immersive AR/VR experiences.' },
];

const hero_contact: HeroDetails = {
  title: 'Transforming Ideas Into Stunning Visual Art',
  description:
    `From sleek 2D illustrations to realistic 3D models, we create high-quality visual assets that elevate your brand, products, and digital experiences.Visual storytelling is one of the most powerful ways to connect with your audience. Whether it’s in games, apps, marketing, animations, or product design, compelling art can capture attention and leave a lasting impression.Our 2D & 3D art services combine creativity, technical expertise, and the latest design tools to bring your vision to life. From concept sketches to detailed renderings, we design artwork that’s not only visually appealing but also strategically aligned with your business goals.`,
};
const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Versatile Expertise", subtitle: "From flat illustrations to hyper-realistic 3D environments.", icon: "⚡", href: "/performance" },
    { title: "Creative & Technical Balance", subtitle: "Artwork that looks stunning and performs efficiently.", icon: "📶", href: "/offline" },
    { title: "Cutting-Edge Tools", subtitle: "Skilled in Blender, Maya, Photoshop, Illustrator, and more.", icon: "📲", href: "/install" },
    { title: "Industry-Ready Assets", subtitle: "Optimized for games, films, advertising, and product design.", icon: "🛡️", href: "/security" },
    { title: "Custom-Built for You", subtitle: "Every asset is tailored to your brand and project needs.", icon: "🛡️", href: "/security" },
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
            <BlogHomeOne heading="2D & 3D Art Services We Offer" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
