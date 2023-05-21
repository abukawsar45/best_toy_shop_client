import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ReactStarsRating } from 'react-awesome-stars-rating';

const SingleCard = ({toyData}) => {
  const { image, carName, price, subCategory, type, quantity, rating } =
    toyData;
  return (
    <div className='flex my-4'>
      <Card imgSrc={image}>
        <div className='flex justify-between'>
          <div>
            <h5 className='Text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {carName}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              $: {price}
            </p>

            <p>{subCategory}</p>
            <p>{type}</p>
            <p>
              {' '}
              <small> Rating</small> : &#160;{' '}
              <ReactStarsRating value={rating} className='flex flex-row ' />
            </p>
            <p>available quantity: {quantity}</p>
          </div>
          <div>
            <div>
              <Link to='/moreDetails'>
                <Button>more</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleCard;