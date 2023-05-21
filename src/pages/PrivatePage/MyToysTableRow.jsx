import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import { AiFillDelete } from 'react-icons/ai';

const MyToysTableRow = ({ toy, handleRemove }) => {
  const { user } = useContext(AuthContext);
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
      <>
        {' '}
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            <AiFillDelete
              onClick={() => handleRemove(_id)}
              className='w-6 h-6 cursor-pointer text-red-500 hover:text-red-700 '
            />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
            {carName}
          </Table.Cell>
          <Table.Cell>
            <img src={image} className='w-20  md:' alt='' />
          </Table.Cell>
          <Table.Cell>{price} taka</Table.Cell>
          <Table.Cell>{soldBy}</Table.Cell>
          <Table.Cell>{quantity}</Table.Cell>
          <Table.Cell>{subCategory}</Table.Cell>
          <Table.Cell>{type}</Table.Cell>

          <Table.Cell>
            <Link to={`/myAllToys/${_id}`}>
              <Button outline={true} gradientDuoTone='greenToBlue'>
                Edit
              </Button>
            </Link>
          </Table.Cell>
        </Table.Row>
      </>
    </>
  );
};

export default MyToysTableRow;