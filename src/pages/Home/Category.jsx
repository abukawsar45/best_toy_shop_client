import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

const Category = () => {
  const [activeMode, setActiveMode] = useState('assending');
  const handleAssendingTab = (tabName) => {
    setActiveMode(tabName);
  };

  return (
    <div>
     
      <div className='flex justify-center'>
        <div
          onClick={() => handleAssendingTab('assending')}
          className={`tab px-6 py-2 ${
            activeMode == 'assending' ? ' bg-sky-400 text-slate-50' : ''
          }`}
        >
          Remote
        </div>
        <div
          onClick={() => handleAssendingTab('dessending')}
          className={`px-6 py-2 ${
            activeMode == 'dessending' ? ' bg-sky-400 text-slate-50' : ''
          }`}
        >
          Offline
        </div>
      </div>
    </div>
  );
};

export default Category;
