// import { Button, Card } from 'flowbite-react';
// import { Link } from 'react-router-dom';

import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const CarCard = ({ toy, handleMoreBtn }) => {
  console.log({toy});
  const {
    _id,
    carName,
    soldBy,
    quantity,
    category,
    subCategory,
    price,
    type,
    rating,
    image,
    description,
    postBy,
    made,
  } = toy || {};
  return (
    <>
      {' '}
      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
          {carName}
        </Table.Cell>
        <Table.Cell>{price} taka</Table.Cell>
        <Table.Cell>{soldBy}</Table.Cell>
        <Table.Cell>{quantity}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>

        <Table.Cell>
          <Link to={`/moreDetails/${_id}`}>
            <Button onClick={handleMoreBtn}>More</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
    // <div className='flex my-4'>
    //   <Card imgSrc={image}>
    //     <div className='flex justify-between'>
    //       <div>
    //         <h5 className='Text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
    //           {carName}
    //         </h5>
    //         <p className='font-normal text-gray-700 dark:text-gray-400'>
    //           $: {price}
    //         </p>
    //         <p>
    //           { soldBy &&
    //             <small>Seller By: { soldBy }</small> }
    //         </p>
    //         <p>{category}</p>
    //         <p>{type}</p>
    //         <p>available quantity: {quantity}</p>
    //       </div>
    //       <div>
    //         <div>
    //           <Link to='/moreDetails'>
    //             <Button>more</Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
  );
};

export default CarCard;