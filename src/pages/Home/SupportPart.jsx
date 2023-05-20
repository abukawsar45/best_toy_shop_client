import { FaShippingFast,FaCartArrowDown,FaBlenderPhone,FaPauseCircle } from 'react-icons/fa';
const SupportPart = () => {
  return (
    <div className='flex justify-around bg-orange-500 w-full h-40'>
      <div className='text-slate-100 flex items-center py-2'>
        <FaShippingFast className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>FAST SHIPPING</h3>
        <div className='border-2 border-gray-300  h-full ml-4'></div>
      </div>
      <div className='text-slate-100 flex items-center py-2'>
        <FaCartArrowDown className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>ONLINE PAYMENT</h3>
        <div className='border-2 border-gray-300  h-full ml-4'></div>
      </div>
      <div className='text-slate-100 flex items-center py-2'>
        <FaBlenderPhone className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>24/7 SUPPORT</h3>
        <div className='border-2 border-gray-300  h-full ml-4'></div>
      </div>
      <div className='text-slate-100 flex items-center py-2'>
        <FaPauseCircle className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>On Time Delivery</h3>
      </div>
    </div>
  );
};

export default SupportPart;
