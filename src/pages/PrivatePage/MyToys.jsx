import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Dropdown, Table } from 'flowbite-react';
import useTitles from '../../shared/useTitles';
import MyToysTableRow from './MyToysTableRow';
import Swal from 'sweetalert2';
//

//

const MyToys = () => {
  //

  const [activeMode, setActiveMode] = useState('ascending');
  const handleAssendingTab = (tabName) => {
    setActiveMode(tabName);
  };

  const { user } = useContext(AuthContext);
  const [myPostToys, setMyPostToys] = useState([]);
  useTitles('| My Toys');
  useEffect(() => {
    fetch(
      `https://y-umber-three.vercel.app/myToys/${user?.email}?sortBy=${activeMode}`
    )
      .then((res) => res.json())
      .then((data) => {
        // //console.log(data);
        setMyPostToys(data);
      })
      .catch((error) => {
        // //console.error(error);
      });
  }, [activeMode]);

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure delete this item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://y-umber-three.vercel.app/myAllToys/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            // //console.log(data);
            // //console.log(id);
            const remaining = myPostToys.filter((toy) => toy._id !== id);
            setMyPostToys(remaining);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div className='md:flex justify-end  '>
          <Dropdown label='Sort By Date'>
            <Dropdown.Item
              onClick={() => handleAssendingTab('ascending')}
              className={`tab px-6 py-2  ${
                activeMode == 'ascending'
                  ? ' bg-sky-400 text-slate-50 hover:bg-sky-400'
                  : ''
              }`}
            >
              Assending
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleAssendingTab('descending')}
              className={`px-6 py-2  ${
                activeMode == 'descending'
                  ? ' bg-sky-400 text-slate-50 hover:bg-sky-400'
                  : ''
              }`}
            >
              Dessending
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell className='font-sans text-violet-600'>
            Remove
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Car name
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Image
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Price
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Seller
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Quantiy
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            Category
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            type
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {myPostToys.map((toy) => (
            <MyToysTableRow
              key={toy._id}
              toy={toy}
              handleRemove={handleRemove}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;
