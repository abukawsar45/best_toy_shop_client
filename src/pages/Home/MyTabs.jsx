import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Dropdown } from 'flowbite-react';
import { useEffect, useState } from 'react';



const MyTabs = () => {

    const [toysData, setToysData] = useState('abcd');
    const [toysDataCollection, setToysDataCollection] = useState([]);
  const [activeMode, setActiveMode] = useState('assending');
  const handleAssendingTab = (tabName) => {
    setActiveMode(tabName);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/subcategoryName/${toysData}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysDataCollection(data);
        
      });
  }, [toysData]);

  console.log(toysDataCollection)
  return (
    <div className='relative my-2'>
      <Tabs>
        <TabList>
          <Tab>Category</Tab>
          <Tab>GAMING</Tab>
          <Tab>RACING</Tab>
          <Tab>DEFANCE</Tab>
          <div className='md:flex justify-end absolute top-0 right-3'>
            <Dropdown label='Sort By Date'>
              <Dropdown.Item
                onClick={() => handleAssendingTab('assending')}
                className={`tab px-6 py-2  ${
                  activeMode == 'assending'
                    ? ' bg-sky-400 text-slate-50 hover:bg-sky-400'
                    : ''
                }`}
              >
                Assending
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleAssendingTab('dessending')}
                className={`px-6 py-2  ${
                  activeMode == 'dessending'
                    ? ' bg-sky-400 text-slate-50 hover:bg-sky-400'
                    : ''
                }`}
              >
                Dessending
              </Dropdown.Item>
            </Dropdown>
          </div>
        </TabList>

        <TabPanel>
          <h2 className='hover:bg-sky-400'>ALL CATEGORY</h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('American')}
            className='hover:bg-sky-400'
          >
            American Supercars
          </h2>
          <h2
            onClick={() => setToysData('German')}
            className='hover:bg-sky-400'
          >
            German Supercars
          </h2>
          <h2
            onClick={() => setToysData('Hyper')}
            className='hover:bg-sky-400'
          >
            Hyper Supercars
          </h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('Rally Racing')}
            className='hover:bg-sky-400'
          >
            Rally Racing
          </h2>
          <h2
            onClick={() => setToysData('Drag Racing')}
            className='hover:bg-sky-400'
          >
            Drag Racing
          </h2>
          <h2
            onClick={() => setToysData('Touring')}
            className='hover:bg-sky-400'
          >
            Touring Racing
          </h2>
        </TabPanel>
        <TabPanel>
          <h2
            onClick={() => setToysData('Police')}
            className='hover:bg-sky-400'
          >
            Police
          </h2>
          <h2
            onClick={() => setToysData('RAB')}
            className='hover:bg-sky-400'
          >
            RAB
          </h2>
          <h2
            onClick={() => setToysData('FireService')}
            className='hover:bg-sky-400'
          >
            Fire Service
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyTabs;
