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

import blog_img_1 from "@/assets/img/e-comerce/1.webp";
import blog_img_2 from "@/assets/img/e-comerce/2.jpg";
import blog_img_3 from "@/assets/img/e-comerce/3.avif";
import blog_img_4 from "@/assets/img/e-comerce/4.avif";
import blog_img_5 from "@/assets/img/e-comerce/5.jpg";
import blog_img_6 from "@/assets/img/e-comerce/6.avif";


import BlogHomeOne from '@/components/blog/BlogHomeOne';
import WhyChoosePro from '@/components/hero/WhyChoose';
import type { HeroDetails, WhyChooseData,BlogItem } from '@/components/hero/shared';


// --- eCommerce cards (keeps same BlogItem shape) ---
const blog_data: BlogItem[] = [
  {
    id: 1,
    img: blog_img_1,
    title: "D2C Storefront",
    des: "Conversion-focused brand store with fast product pages, variants/SKUs, coupons, and a frictionless checkout (Stripe/PayPal/local gateways)."
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Fashion & Lifestyle",
    des: "Lookbooks, size guides, swatches, UGC galleries, and easy returns—built to reduce friction and increase AOV."
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Electronics & Gadgets",
    des: "Spec-rich PDPs, comparison tables, warranties, and bundles. Optimized for search, speed, and high-intent traffic."
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Grocery & Quick-Commerce",
    des: "Location/slot-based delivery, substitutions, repeat baskets, and smart search for large catalogs."
  },
  {
    id: 5,
    img: blog_img_5,
    title: "Marketplace / Multi-Vendor",
    des: "Vendor onboarding, split payouts, commissions, and catalog moderation—scales with your seller network."
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Digital Products & Courses",
    des: "Instant downloads, license keys, gated lessons, and drip content with secure access control."
  }
];

// --- eCommerce hero content ---
const hero_contact: HeroDetails = {
  title: "Launch Your Online Store & Start Selling Everywhere",
  description: `We design and develop powerful, scalable, and conversion-focused eCommerce websites that help you sell products online with ease—whether you have 10 items or 10,000.

Your eCommerce website is more than just an online shop—it’s your digital sales engine. We create eCommerce solutions that are visually appealing, easy to navigate, mobile-friendly, and optimized to convert visitors into loyal customers.

From custom store design to secure payment gateways and inventory management systems, we ensure your business is ready to grow in today’s competitive market.

Whether you’re starting a new online store or upgrading an existing one, our team builds eCommerce websites that perform, scale, and sell.`,
};

const whyPWA: WhyChooseData = {
  heading: "🚀 Why Choose Us?",
  features: [
    { title: "Platform Flexibility", subtitle: "Shopify, WooCommerce, Magento, OpenCart, or fully custom solutions.", icon: "⚡", href: "/performance" },
    { title: "Optimized for Sales", subtitle: "Designs that encourage clicks, purchases, and repeat orders.", icon: "📶", href: "/offline" },
    { title: "Secure Payments", subtitle: "Multiple gateways including PayPal, Stripe, credit cards, and local payment methods.", icon: "📲", href: "/install" },
    { title: "Inventory & Order Management", subtitle: "Streamline operations with automated stock tracking.", icon: "🛡️", href: "/security" },
    { title: "Mobile-First Approach", subtitle: "Your store looks and works perfectly on all devices.", icon: "🛡️", href: "/security" },
  ],
  benefitsHeading: "🌟Key Benefits We Deliver",
  benefits: [
    "Modern, branded store design.",
    "Product catalog with categories & filters.",
    "Secure checkout and payment integration.",
    "Shipping calculators & multiple delivery options.",
    "Discount codes & loyalty programs.",
    "Customer accounts & order tracking.",
    "SEO-optimized product pages.",
    "Multi-language & multi-currency options.",
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
            <BlogHomeOne heading="Types of E-commerce Websites" items={blog_data} imageWidth={360} imageHeight={240}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
