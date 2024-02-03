// import React from "react";
// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   // Client-side-only code
//   window.$ = window.jQuery = require("jquery");
// }
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

// const Responsive = {
//   0: {
//     items: 1.5,
//     margin: 5
//   },
//   768: {
//     items: 2.5,
//     margin: 10
//   },
//   1024: {
//     items: 3.5,
//     margin: 20
//   }
// }

// export default function Slider() {
//   return (

//     <OwlCarousel
//       responsive={Responsive}
//     >
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//       <div className="item">
//       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
//         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
//         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
//       </div>
//     </OwlCarousel>
//   );
// }
import React from "react";
import dynamic from "next/dynamic";
import ConvertCardThird from './components/ConvertCardThird';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1.5,
    margin: 5,
  },
  768: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 5,
    margin: 10,
  },
};

const cardsData = [
  {
      title: 'PDF to Word',
      description: 'Easily convert PDF to Word online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-word.svg',
    },
    {
      title: 'PDF to PPT',
      description: 'Convert PDF to Powerpoint online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-PPT.svg',
    },
    {
      title: 'PDF to Excel',
      description: 'Convert PDF to Excel for free online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-excel.svg',
    },
    {
      title: 'PDF to JPG',
      description: 'Convert PDF files to JPG online for free in high quality. Quickly transform any PDF into high-quality images.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-JPG.svg',
    },
    {
        title: 'PDF to Text',
        description: 'Convert your PDF to TXT, extract text from your PDF',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-TXT.svg',
      },
      {
        title: 'PDF to RTF',
        description: 'Convert PDF to RTF online and free.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-RTX.svg',
      },
      {
        title: 'PDF to Pages',
        description: 'The fastest way to convert PDF to Pages on Mac and Windows.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-Pages.svg',
      },
      {
        title: 'PDF to HTML',
        description: 'Convert your PDF document into an HTML web page.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-html.svg',
      },
];

export default function Slider() {
  return (
    <div className='container flex justify-center mt-16'>
        <div className='cardconatininner max-w-[1266px]'>
            <h2 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mb-8 font-bold text-3xl leading-9 text-gray-800'>Convert From PDF</h2>

    <OwlCarousel loop
        margin={8}
        items={5}
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause responsive={Responsive} dots={false} nav navText={["←", "→"]}>
      {/* Your existing items
      <div className="item">
       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
       </div>
       <div className="item">
       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
       </div>
      <div className="item">
       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
         <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
         <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
       </div>
       <div className="item">
       <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div>
      <div className="item">
      <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="title" />
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>PDF to Word</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>Easily convert PDF to Word online.</p>
      </div> */}
      {cardsData.map((card, index) => (
          <div key={index} className='item'>
            <ConvertCardThird {...card} />
          </div>
        ))}
      {/* Add more slides as needed */}
    </OwlCarousel>
    </div>
    </div>
  );
}