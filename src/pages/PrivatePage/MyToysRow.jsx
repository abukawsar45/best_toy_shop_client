import React from 'react';

const MyToysRow = ({ toy, handleMoreBtn }) => {
  console.log({ toy });
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
  } = toy || [];
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
          <Link to={`/edit/${_id}`}>
            <Button>Edit</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default MyToysRow;