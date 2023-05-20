import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Table } from "flowbite-react";
import useTitles from "../../shared/useTitles";
import MyCarTable from "./MyCarTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myPostToys, setMyPostToys] = useState([])
  useTitles('My Toys |')
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then(res => res.json())
    .then(data => {
      console.log(data)
      setMyPostToys(data)
    })
  },[])
  return (
    <div>
      <div>div</div>
      <Table striped={true}>
        <Table.Head>
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
            <MyCarTable key={toy._id} toy={toy} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;