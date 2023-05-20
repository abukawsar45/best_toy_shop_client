
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';
 

const MainCarousel = () => {
  const [imgCollection, setImgCollection] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImgCollection(data);
      });
  }, []);
  console.log(imgCollection);
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-zinc-600'>
      <div className=''>
        <div className=''>
          <h3 className='text-4xl font-bold my-4 mx-auto text-white'>
            Most Popular Hospiter
          </h3>
          <p className='text-green-400 text-2xl mt-2 md:mt-4'>
            Your first choice in this HOSPITAL
          </p>
          <p className='text-sky-500'>
            <span>
              Because we are patients support 24hours/7days.
              <br />
              You can book an online doctor appointment at Apollo Hospitals.
              Click the button below to submit the doctor appointment form.
            </span>
          </p>
        </div>
      </div>
      <div className='w-3/4 mx-auto'>
        <Carousel>
          {imgCollection.map((img, index) => (
            <div
              key={index}
              className='flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'
            >
              <img src={img.image} alt='' className='w-full h-72 object-cover' />
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