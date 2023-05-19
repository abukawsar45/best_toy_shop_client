import { useEffect, useState } from "react";
import useTitles from "../../shared/useTitles";
import CarCard from "./CarCard";


const AllToys = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setToysData(data)
      });
  },[])

  useTitles('All Toys')
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3 bg-zinc-500'>amar</div>
      <div className='col-span-9'>
        <div className='grid grid-cosl-1 md:grid-cols-2 '>
          {toysData.map((toy) => (
            <CarCard key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;