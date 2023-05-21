import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

const Category = () => {
  const [activeMode, setActiveMode] = useState('assending');
  const handleAssendingTab = (tabName) => {
    setActiveMode(tabName);
  };

  return (
    <div  data-aos="fade-up" className='md:flex justify-end'>
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
  );
};

export default Category;
