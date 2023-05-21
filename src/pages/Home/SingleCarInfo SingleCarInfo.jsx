import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ReactStarsRating } from 'react-awesome-stars-rating';

const SingleCarInfo = ({ toy, handleMoreBtn }) => {
  console.log(toy);
  const { _id, image, carName, price, subCategory, type, quantity, rating } = toy;

  return (
    <div className=''>
      <Card>
        <div>
          <img src={image} className='w-72 h-52' alt='' />
        </div>
        <div className='flex justify-between items-end'>
          <div>
            <h5 className='Text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {carName}
            </h5>
            <p><small> {subCategory}</small> </p>
            <p><small> { type }</small> </p>
            <p><small> Price : { price}</small> </p>
            <p><small> Rating: {rating} </small> </p>
            
            <p>available quantity: {quantity}</p>
          </div>
          <div>
            <div>
              <Link to={`/moreDetails/${_id}`}>
                <Button onClick={handleMoreBtn}>More</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleCarInfo;
