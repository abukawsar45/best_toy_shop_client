import { useContext, useEffect, useState } from "react";
import CarRow from './CarRow'
import { Table,Button } from "flowbite-react";
import Swal from 'sweetalert2';
import { AuthContext } from './../../Providers/AuthProviders';
import useTitles from './../../shared/useTitles';


const AllToys = () => {
  useTitles('| All Toys');
  const {user} =useContext(AuthContext)
  const [toysData, setToysData] = useState([]);
  
    const handleSearchBox = (e) => {
      e.preventDefault();
      const searchValue = e.target.search.value;
      fetch(`https://y-umber-three.vercel.app/Carnameby/${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setToysData(data);
          console.log(data);
        });
    };
  const handleMoreBtn = () => {
    if (!user) {
      return ( Swal.fire(
        'Without a login?',
        'You can not visit the single toy details page',
        'error'
        ))
      }
  }

  useEffect(() => {
    fetch('https://y-umber-three.vercel.app/allToysWithLimit')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToysData(data);
      });
  }, [])
  // console.log(toysData)
  

  
  return (
    <div>
      <div className='mx-auto'>
        <div>
          <form className='flex' onSubmit={handleSearchBox}>
            <input type='text' name='search' className='w-20' />
            <Button type='submit'>Search</Button>
          </form>
        </div>
      </div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell className='font-sans text-violet-600'>
            Car name
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
            Sub Category
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            type
          </Table.HeadCell>
          <Table.HeadCell className='font-sans text-violet-600'>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {toysData.map((toy) => (
            <CarRow key={toy._id} toy={toy} handleMoreBtn={handleMoreBtn} />
          ))}
        </Table.Body>
      </Table>
    </div>
    // <div className='grid grid-cols-12'>
    //   <div className='col-span-12 md:col-span-2 bg-zinc-500'>amar</div>
    //   <div className='col-span-12 md:col-span-10'>
    //     <div className='md:mx-4 grid grid-cosl-1 md:grid-cols-3 gap-x-2 md:gap-x-8'>
    //       {toysData.map((toy) =><CarCard key={toy._id} toy={toy} />

    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllToys;