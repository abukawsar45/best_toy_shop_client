import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';


const CarCard = ({toy}) => {
  console.log(toy)
  const { carName, soldBy, quantity, category, price, age, type, rating, image, description, postBy, made} = toy || [];
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
            <p>
              { soldBy &&
                <small>Seller By: { soldBy }</small> }
            </p>
            <p>{category}</p>
            <p>{type}</p>
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

export default CarCard;