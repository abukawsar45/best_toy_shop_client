import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';

const MainCarousel = () => {
  const [imgCollection, setImgCollection] = useState([]);

  useEffect(() => {
    fetch('https://y-umber-three.vercel.app/alltoys')
      .then((res) => res.json())
      .then((data) => {
        // //console.log(data);
        setImgCollection(data);
      });
  }, []);
  //console.log(imgCollection);

  return (
    <div
      data-aos='fade-up'
      className='grid grid-cols-1 md:grid-cols-2 bg-zinc-600 px-2 md:px-4 gay-y-2  py-4 md:py-8'
    >
      <div className='my-4 md:my-0'>
        <div className=''>
          <h3 className='text-6xl font-bold my-4 mx-auto text-white'>
            Best Online Toy Stores and All the Rest
          </h3>
          <p className='text-green-400 text-2xl mt-2 md:mt-4'>
            Your Baby Happy,so We Are Happy.
          </p>
          <p className='text-gray-50 mt-4 md:mt-8'>
            <span>
              Thousands of parents and kids are still reeling from the 2018
              closing of Toys”R”Us. While there’s no serviceable replacement for
              the physical toy store, the internet is bursting with a wide
              variety of shops the sell toys!
            </span>
          </p>
        </div>
      </div>
      <div className='md:w-3/4 mx-auto my-4 md:my-0'>
        <Carousel>
          {imgCollection.map((img, index) => (
            <div
              key={index}
              className='flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'
            >
              <img src={img.image} alt='' className='w-full h-72 object-fill' />
              <div className=''></div>
            </div>
          ))}
        </Carousel>
        {/* // <Carousel>
        gradient(90deg, # 0%,  100%)
          // <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          //   Slide 1
          // </div>
          linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)
          </Carousel> */}
      </div>
    </div>
  );
};

export default MainCarousel;
