import { useEffect, useState } from "react";
import useTitles from "../../shared/useTitles";
import CarCard from "./CarCard";


const AllToys = () => {
  useTitles('All Toys');
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setToysData(data)
      });
  }, [])
  console.log(toysData)
  

  
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 md:col-span-2 bg-zinc-500'>amar</div>
      <div className='col-span-12 md:col-span-10'>
        <div className='md:mx-4 grid grid-cosl-1 md:grid-cols-3 gap-x-2 md:gap-x-8'>
          {toysData.map((toy) =><CarCard key={toy._id} toy={toy} />
          
          )}
        </div>
      </div>
    </div>
  );
};

export default AllToys;