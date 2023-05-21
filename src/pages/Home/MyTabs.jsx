import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Dropdown } from 'flowbite-react';
import { useState } from 'react';




const MyTabs = () => {
  const [activeMode, setActiveMode] = useState('assending');
  const handleAssendingTab = (tabName) => {
    setActiveMode(tabName);
  };

  return (
    <div className='relative'>
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
          <h2 className='hover:bg-sky-400'>American</h2>
          <h2 className='hover:bg-sky-400'>German</h2>
          <h2 className='hover:bg-sky-400'>Hyper</h2>
        </TabPanel>
        <TabPanel>
          <h2 className='hover:bg-sky-400'>Rally</h2>
          <h2 className='hover:bg-sky-400'>Drag racing</h2>
          <h2 className='hover:bg-sky-400'>Touring</h2>
        </TabPanel>
        <TabPanel>
          <h2 className='hover:bg-sky-400'>Police</h2>
          <h2 className='hover:bg-sky-400'>RAB</h2>
          <h2 className='hover:bg-sky-400'>Fire Service</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyTabs;
