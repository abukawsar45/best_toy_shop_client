import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MoreDetails = () => {
  const toyData = useLoaderData();
  console.log({toyData})
  const { _id, carName, soldBy, quantity, category, subCategory, price, type, rating, image, description, postBy, made} = toyData || [];


  return (
    <div>
      <Card>
        <div className='text-center md:relative'>
          <img
            src={image}
            alt=''
            className='w-3/4 md:h-96 md:w-auto object-cover mx-auto my-2 md:my-6'
          />
          <Button className='absolute hidden md:block md:top-5 md:right-5 px-4 py-3'>
            <span className='text-3xl'>Buy Now</span>
          </Button>
        </div>
        <div>
          <Button className='w-full block md:hidden px-4 py-3'>
            <span className='text-3xl'>Buy Now</span>
          </Button>
        </div>
        <div className='bg-slate-100 mx-2 md:px-4 my-2 md:py-4'>
          <div className='grid grid-cols-1 px-2 md:grid-cols-2 md:mb-4 mt-2 md:mt-4'>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 font-bold text-lime-700'>
              <small> Car Name</small>: {carName}
            </p>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 font-medium  text-red-700'>
              <small> Price</small>: ${price}
            </p>
          </div>
          <div className='grid grid-cols-1 px-2 md:grid-cols-2 md:mb-4'>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-lime-700'>
              <small> Available Quantity</small>: {quantity}
            </p>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-red-700'>
              <small> Category</small>: {category}
            </p>
          </div>
          <div className='grid grid-cols-1 px-2 md:grid-cols-2 md:mb-4'>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-lime-700'>
              <small> Sub-Ctegory</small>: {subCategory}
            </p>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-red-700'>
              <small> Car-Type</small>: {type}
            </p>
          </div>
          <div className='grid grid-cols-1 px-2 md:grid-cols-2 md:mb-4'>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-lime-700'>
              <small> Made by </small>
              {made}
            </p>
            <p className='text-xl md:text-2xl mb-2 md:mb-0 text-red-700'>
              <small> Rating</small> : {rating}
            </p>
          </div>
        </div>
        <div>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            {description}
          </p>
        </div>
        <div className='text-center'>
          <p className='bg-slate-700 text-white py-2 rounded'>
            <small>Seller By: {soldBy}</small>{' '}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MoreDetails;