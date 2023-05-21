// import { Button, Card } from 'flowbite-react';
// import { Link } from 'react-router-dom';

import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const CarCard = ({ toy, handleMoreBtn }) => {
  // console.log({toy});
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
            <Button onClick={handleMoreBtn}>Details</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
   
  );
};

export default CarCard;