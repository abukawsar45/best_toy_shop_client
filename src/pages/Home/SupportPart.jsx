import {
  FaShippingFast,
  FaCartArrowDown,
  FaBlenderPhone,
  FaPauseCircle,
} from 'react-icons/fa';
const SupportPart = () => {
  return (
    <div
      data-aos='fade-up'
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-orange-500 w-full py-4 px-4 md:py-5 h-auto'
    >
      <div className='text-slate-100 flex items-center  py-2'>
        <FaShippingFast className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>FAST SHIPPING</h3>
        <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
      </div>


      <hr className='md:hidden w-full border-gray-300 mt-4' />

      
      <div className='text-slate-100 flex items-center py-2'>
        <FaCartArrowDown className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>ONLINE PAYMENT</h3>
        <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
      </div>


      <hr className='md:hidden w-full  border-gray-300 mt-4' />


      <div className='text-slate-100 flex items-center py-2'>
        <FaBlenderPhone className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>24/7 SUPPORT</h3>
        <div className='border-2 hidden lg:block border-gray-300  h-full mx-4'></div>
      </div>


      <hr className='md:hidden w-full border-gray-300 mt-4' />

      
      <div className='text-slate-100 flex items-center py-2'>
        <FaPauseCircle className='text-6xl mr-4' />
        <h3 className='font-bold text-2xl'>On Time Delivery</h3>
      </div>
    </div>
  );
};

export default SupportPart;
