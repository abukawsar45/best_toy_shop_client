import { useEffect, useState } from 'react';
import SingleImage from './SingleCarInfo SingleCarInfo';

const ImageGallery = () => {
  const [imgCollection, setImgCollection] = useState([]);

  useEffect(() => {
    fetch('https://y-umber-three.vercel.app/alltoys')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImgCollection(data);
      });
  }, []);
  // console.log(imgCollection);

  return (
    <></>
    // <div
    //   data-aos='fade-up'
    //   className='mx-2 my-2 md:my-4 md:mx-4 grid grid-cosl-1 md:grid-cols-3 gap-y-2 gap-x-2 md:gap-x-8'
    // >
    //   {imgCollection.map((img) => (
    //     <SingleImage key={img._id} img={img} />
    //   ))}
    // </div>
  );
};
export default ImageGallery;
