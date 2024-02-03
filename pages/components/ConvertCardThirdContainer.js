
import React from 'react';
import ConvertCardThird from './ConvertCardThird';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.theme.green.css';
import dynamic from "next/dynamic";


const ConvertCardThirdContainer = () => {
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
      });

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


  return (
    <div className='container flex justify-center mt-16'>
        <div className='cardconatininner max-w-[1266px]'>
            <h2 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mb-8 font-bold text-3xl leading-9 text-gray-800'>Convert From PDF</h2>
          
            {/* <div className="card-container grid grid-cols-5 gap-4">
      {cardsData.map((card, index) => (
        <ConvertCardThird key={index} {...card} />
      ))}
    </div> */}
    <OwlCarousel
        className='owl-theme'
        loop
        margin={10}
        items={5}
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause
        dots={false}
        nav
      >
        {cardsData.map((card, index) => (
          <div key={index} className='item'>
            <ConvertCardThird {...card} />
          </div>
        ))}
      </OwlCarousel>
        </div>
    </div>
  );
};


export default ConvertCardThirdContainer;
