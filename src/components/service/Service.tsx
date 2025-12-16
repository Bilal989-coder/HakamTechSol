
// import React from 'react';


// interface DataType {
//   id: string;
//   title: string;
//   description: string;
// }
// const service_data: DataType[] = [
//   {
//     id: 'one',
//     title: "Discovery & Planning",
//     description: ` `,
//   },
//   {
//     id: 'Two',
//     title: "UI/UX Design",
//     description: ` `,
//   },
//   {
//     id: 'Three',
//     title: "Development",
//     description: ` `,
//   },
//   {
//     id: 'Four',
//     title: "Testing & Quality Assurance",
//     description: ` `,
//   },
//   {
//     id: 'Five',
//     title: "Launch & Support",
//     description: ` `,
//   },
// ]
// const Service = () => {
//   return (
//     <>
//       <div className="cs_height_115 cs_height_lg_60"></div>
//       <section>
//         <div className="cs_primary_bg">
//           <div className="cs_height_135 cs_height_lg_70"></div>
//           <div className="container">
//             <div className="cs_section_heading_hr cs_style_1 cs_color_1">
//               <div className="cs_hr_design"></div>
//               <div className="cs_section_heading cs_style_1 cs_color_1">
//                 <div className="cs_section_heading_text">
//                   <h2 className="cs_section_title anim_heading_title">
//                     Our Working Process
//                   </h2>
//                 </div>
//               </div>
//               <div className="cs_hr_design"></div>
//             </div>

//             <div className="cs_height_100 cs_height_lg_70"></div>
//             <div className="anim_div_ShowLeftSide">
//               <div className="cs_work cs_work_1">
//                 <div className="cs_card_work cs_style_1 cs_color_1">
//                   {service_data.map((item, i) => (
//                     <div key={i} className="cs_card">
//                       <div className="cs_card cs_style_1">
//                         <div className="cs_posagation">
//                           <div className="cs_work_style_1"></div>
//                           <div className="cs_work_style_2"></div>
//                         </div>
//                         <div className="cs_stroke_number">
//                           <span>{item.id}</span>
//                         </div>
//                       </div>

//                       <h6 className="cs_work_title">{item.title}</h6>
//                       <p className="cs_work_subtitle">
//                         {item.description}
//                       </p>
//                     </div>

//                   ))}

//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="cs_height_80 cs_height_lg_60"></div>
//         </div>
//       </section>
//       <div className="cs_height_150 cs_height_lg_60" />
//     </>
//   );
// };

// export default Service;

// components/service/Service.tsx
'use client';

import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

const service_data: DataType[] = [
  { id: '01', title: 'Discovery & Planning',           description: 'Goals, scope, technical choices, and a clear roadmap.' },
  { id: '02', title: 'UI/UX Design',                   description: 'Wireframes to high-fidelity designs with rapid feedback.' },
  { id: '03', title: 'Development',                    description: 'Clean, scalable code with CI/CD and coding standards.' },
  { id: '04', title: 'Testing & Quality Assurance',    description: 'Automated & manual tests covering performance and UX.' },
  { id: '05', title: 'Launch & Support',               description: 'Zero-downtime release, monitoring, and continuous care.' },
];

const Service = () => {
  return (
    <>
      <div className="cs_height_115 cs_height_lg_60" />
      <section className="process-wrap">
        <div className="cs_primary_bg">
          <div className="cs_height_135 cs_height_lg_70" />
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design" />
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">Our Working Process</h2>
                </div>
              </div>
              <div className="cs_hr_design" />
            </div>

            <div className="cs_height_100 cs_height_lg_70" />

            {/* Modern, parallel-line layout */}
            <ol className="process-list">
              {service_data.map((item) => (
                <li key={item.id} className="row">
                  <div className="left">
                    <span className="badge">{item.id}</span>
                    <h6 className="title">{item.title}</h6>
                  </div>
                  <p className="desc">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="cs_height_80 cs_height_lg_60" />
        </div>

        <style jsx>{`
          .process-wrap{
            /* keeps text readable on dark themes */
            color: #eef2ff;
          }
          .container{
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 16px;
          }

          /* list container */
          .process-list{
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 14px;
          }

          /* one row: left (badge + title) | right (desc) */
          .row{
            display: grid;
            grid-template-columns: minmax(260px, 420px) 1fr; /* title+badge width | description */
            align-items: center;
            gap: 14px 18px;
            padding: 14px 16px;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.04);
            border-radius: 14px;
            backdrop-filter: blur(6px);
            transition: border-color .2s ease, background .2s ease, transform .2s ease;
          }
          .row:hover{
            transform: translateY(-2px);
            border-color: rgba(255,255,255,0.18);
            background: rgba(255,255,255,0.06);
          }

          .left{
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0; /* enable text clamp */
          }

          .badge{
            display: inline-grid;
            place-items: center;
            width: 38px;
            height: 38px;
            border-radius: 10px;
            font-weight: 800;
            color: #0b0f16;
            background: linear-gradient(135deg, #6c5ce7, #9a8cff); /* primary */
            box-shadow: 0 8px 24px rgba(108,92,231,.35);
            flex: 0 0 auto;
          }

          .title{
            margin: 0;
            font-weight: 800;
            color: #ffffff;                 /* strong for headings */
            font-size: clamp(16px, 1.3vw, 18px);
            line-height: 1.25;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;        /* keep single line */
          }

          .desc{
            margin: 0;
            color: #cdd6e6;                 /* slightly muted */
            font-size: 15px;
            line-height: 1.55;
            display: -webkit-box;
            -webkit-line-clamp: 2;          /* keep neat; expands on mobile */
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Mobile: stack description under title (still “parallel” feel on larger screens) */
          @media (max-width: 640px){
            .row{
              grid-template-columns: 1fr;   /* stack */
              padding: 12px 14px;
            }
            .title{ white-space: normal; }  /* allow wrap */
            .desc{
              -webkit-line-clamp: unset;
              overflow: visible;
            }
          }
        `}</style>
      </section>
      
    </>
  );
};

export default Service;
