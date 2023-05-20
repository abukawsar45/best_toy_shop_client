import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const myCarouselData = [
"https://i.ibb.co/ncrXc2V/1.png"
"https://i.ibb.co/B3s7v4h/2.png"
"https://i.ibb.co/XXR8kzF/3.png"
"https://i.ibb.co/yg7BSdM/4.png"
]

const MyCarousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
export default MyCarousel;
// import React from 'react';

// const MyCarousel = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default MyCarousel;
