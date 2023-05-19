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
    <div>
      <div>
        {
          toysData.map(toy => <CarCard key={ toy._id } toy={toy} />)
        }
      </div>
    </div>
  );
};

export default AllToys;