'use client'

import MarqueeAreaHomeThree from '@/components/brand/MarqueeAreaHomeThree';
import ContactArea from '@/components/contact/ContactArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Contact | HakamTechSol",  
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
        <ContactArea />
        
        </main>
        <FooterOne />
      </div>
      </div>
    </Wrapper>
  );
};

export default index;