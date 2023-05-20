import { useEffect, useState } from 'react';
import SingleImage from './SingleImage';

const ImageGallery = () => {
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
    <div className='mx-2 my-2 md:my-4 md:mx-4 grid grid-cosl-1 md:grid-cols-3 gap-y-2 gap-x-2 md:gap-x-8'>
      {imgCollection.map((img) => (
        <SingleImage key={img._id} img={img} />
      ))}
    </div>
  );
};
export default ImageGallery;
