// components/footer/FooterOne.tsx
"use client";

import React from "react";
import Image from "next/image";
import footer_logo from "@/assets/img/logoo-removebg-preview.png";

const EMAIL   = process.env.NEXT_PUBLIC_COMPANY_EMAIL   || "info@hakamtechsol.com";
const PHONE   = process.env.NEXT_PUBLIC_COMPANY_PHONE   || "+92 309 227 1214";
const ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "LG-18, Kolachi IT Park, Rashid Minhas Road, Karachi, Pakistan";

const ICON_BG    = process.env.NEXT_PUBLIC_FOOTER_ICON_BG    || "#ffffff";
const ICON_FG    = process.env.NEXT_PUBLIC_FOOTER_ICON_FG    || "#0a0a0a";
const ICON_HOVER = process.env.NEXT_PUBLIC_FOOTER_ICON_HOVER || "#FF6B00";

const SOCIALS = [
  { key: "facebook",  href: process.env.NEXT_PUBLIC_FACEBOOK_URL  || "#", label: "Facebook",  icon: (
    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.55v1.86h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94z"/></svg>) },
  { key: "x",        href: process.env.NEXT_PUBLIC_TWITTER_URL   || "#", label: "X",         icon: (
    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18.244 2H21l-6.5 7.43L22 22h-6.9l-4.52-5.86L4.3 22H2l7.08-8.08L2 2h6.9l4.12 5.33L18.244 2zm-1.2 18h2.08L8.16 4H6.08l11 16z"/></svg>) },
  { key: "youtube",  href: process.env.NEXT_PUBLIC_YOUTUBE_URL   || "#", label: "YouTube",   icon: (
    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M23.5 6.2a3.3 3.3 0 0 0-2.3-2.3C19.3 3.3 12 3.3 12 3.3s-7.3 0-9.2.6A3.3 3.3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.3 3.3 0 0 0 2.3 2.3c1.9.6 9.2.6 9.2.6s7.3 0 9.2-.6a3.3 3.3 0 0 0 2.3-2.3c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>) },
  { key: "instagram",href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#", label: "Instagram", icon: (
    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.51 3.51 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2z"/></svg>) },
  { key: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL  || "#", label: "LinkedIn",  icon: (
    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0zM9 8h4.8v2.2h.07c.67-1.27 2.32-2.6 4.78-2.6C22.3 7.6 24 9.6 24 13.1V23H19v-8.5c0-2-0.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V23H9z"/></svg>) },
];

export default function FooterOne() {
  const telHref = `tel:${PHONE.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${EMAIL}`;

  return (
    <footer className="cs_footer cs_primary_bg">
      <div className="container">
        {/* Logo (minimal) */}
        {/* 1) Logo (smaller) */}
<div className="ft-top">
  <Image
    src={footer_logo}
    alt="Logo"
    className="ft-logo"
    width={160}     // intrinsic size (helps Next optimize)
    height={40}
    priority
  />
</div>


        {/* Middle row with address, phone | email, icons on right */}
        <div className="ft-mid">
          <div className="contact-left">
            {/* ADDRESS line (added) */}
            <div className="address-line">{ADDRESS}</div>
            <div className="address-line"><a href={mailHref}>{EMAIL}</a></div>
            <div className="address-line"><a href={telHref}>{PHONE}</a></div>
            
          </div>

          <ul className="icons-right">
            {SOCIALS.map((s) => (
              <li key={s.key}>
                <a
                  className="icon"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        {/* <div className="ft-bottom">
          <div className="copy">© {new Date().getFullYear()} HakamTechSol. All rights reserved</div>
          <ul className="legal">
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div> */}
      </div>

      <style jsx>{`
        .ft-top {
          padding: 24px 0 12px;
        }

        .ft-mid {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: 8px 0 28px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Address line (inline, wraps naturally) */
        .address-line {
          font-size: 18px;
          line-height: 1.6;
        }

        .inline-split {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 18px;
        }
        .inline-split a {
          color: #fff;
          text-decoration: none;
        }
        .inline-split a:hover { text-decoration: underline; }

        .divider {
          display: inline-block;
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.5);
        }

        .dmca-wrap img {
          height: 48px;
          width: auto;
          display: block;
        }

        .icons-right {
          margin: 0 0 0 auto;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .icons-right .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: ${ICON_BG};
          color: ${ICON_FG};
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }
        .icons-right .icon:hover {
          transform: translateY(-1px);
          color: ${ICON_BG};
          background: ${ICON_HOVER};
        }

        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 0 32px;
        }
        .copy { opacity: 0.9; }

        .legal {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .legal li + li {
          position: relative;
          padding-left: 18px;
        }
        .legal li + li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.5);
        }
        .ft-top {
    padding: 20px 0 10px;
  }

  /* Make the logo visually smaller and crisp */
  :global(.ft-logo) {
    height: 60px;     /* desktop */
    width: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 767.98px) {
    :global(.ft-logo) {
      height: 32px;   /* mobile */
    }
  }
        .legal a {
          color: #fff;
          text-decoration: none;
        }
        .legal a:hover { text-decoration: underline; }

        @media (max-width: 767.98px) {
          .ft-mid { flex-direction: column; align-items: flex-start; }
          .icons-right { margin: 8px 0 0; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </footer>
  );
}
