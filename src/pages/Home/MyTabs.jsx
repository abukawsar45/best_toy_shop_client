import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SingleCarInfo from './SingleCarInfo';

const MyTabs = () => {
  const { user } = useContext(AuthContext);

  // const [imgCollection, setImgCollection] = useState([]);
  const [toysData, setToysData] = useState('abcd');
  const [toysDataCollection, setToysDataCollection] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch(`https://y-umber-three.vercel.app/subcategoryName/${toysData}`)
      .then((res) => res.json())
      .then((data) => {
        // //console.log(data);
        setToysDataCollection(data.slice(0, 12));
      });
  }, [toysData]);
  // //console.log(toysDataCollection);
  const handleMoreBtn = () => {
    if (!user) {
      return Swal.fire(
        'Without a login?',
        'You can not visit the single toy details page',
        'error'
      );
    }
  };

  const handleSeeAllBtn = () => {
    fetch(`https://y-umber-three.vercel.app/subcategoryName/${toysData}`)
    .then((res) => res.json())
    .then((data) => {
      // //console.log(data);
      setToysDataCollection(data);
    });
    setShow(!show);
  }
  return (
    <div className='my-2 md:my-5 lg:my-8'>
      <Tabs className='text-center'>
        <TabList>
          <Tab>ALL</Tab>
          <Tab>GAMING</Tab>
          <Tab>RACING</Tab>
          <Tab>DEFANCE</Tab>
        </TabList>

        <TabPanel>
          <h2
            onClick={() => setToysData('abcd')}
            className='cursor-pointer hover:bg-sky-400'
          >
            ALL CATEGORY
          </h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('American Supercars')}
            className='cursor-pointer hover:bg-sky-400'
          >
            American Supercars
          </h2>
          <h2
            onClick={() => setToysData('German Supercars')}
            className='cursor-pointer hover:bg-sky-400'
          >
            German Supercars
          </h2>
          <h2
            onClick={() => setToysData('Hyper Supercars')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Hyper Supercars
          </h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('Rally Racing')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Rally Racing
          </h2>
          <h2
            onClick={() => setToysData('Drag Racing')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Drag Racing
          </h2>
          <h2
            onClick={() => setToysData('Touring Racing')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Touring Racing
          </h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('Police')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Police
          </h2>
          <h2
            onClick={() => setToysData('RAB')}
            className='cursor-pointer hover:bg-sky-400'
          >
            RAB
          </h2>
          <h2
            onClick={() => setToysData('Fire Service')}
            className='cursor-pointer hover:bg-sky-400'
          >
            Fire Service
          </h2>
        </TabPanel>
      </Tabs>
      <div>
        <div
          data-aos='fade-up'
          className='mx-2 my-2 md:my-4 md:mx-4 grid grid-cosl-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 md:gap-x-8'
        >
          {toysDataCollection?.map((toy) => (
            <SingleCarInfo
              key={toy._id + 'ab'}
              toy={toy}
              handleMoreBtn={handleMoreBtn}
            />
          ))}
        </div>
        <div className='my-7 text-center'>
          {show && <button onClick={()=>handleSeeAllBtn()}
            className='bg-sky-400 hover:bg-sky-600 hover:text-white py-2 px-8 rounded-full'
          >
            See all
          </button>}
        </div>
      </div>
    </div>
  );
};

export default MyTabs;
