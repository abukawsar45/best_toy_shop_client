import './Home.css';
import { AiFillWindows } from 'react-icons/ai';
import playstore from '../../assets/playstore-b.png';
import ios from '../../assets/ios-b.png';
import { TfiLinux } from 'react-icons/tfi';
import { IoLogoApple, IoIosArrowRoundDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Download = () => {
  return (
    <div className='bg-slate-300  py-6 lg:py-10'>
      <h3 className='text-3xl uppercase my-3 text-center text-green-400 font-heebo '>
        Download our applications
      </h3>
      <div className='mx-2 md:mx-4 lg:mx-6 flex flex-col md:flex-row justify-between  gap-5'>
        <div className='text-center'>
          <h4 className='mt-6 mb-5  text-3xl text-stone-900'>Download for</h4>
          <div className='flex flex-col md:flex-row justify-around gap-4'>
            <div className='my-3 hover:bg-stone-500 rounded-lg text-center border-2 border-black hover:text-black'>
              <div className='flex justify-start items-center'>
                <AiFillWindows className='mx-2 my-2 text-3xl hover:text-black lg:text-4xl text-blue-500' />
                <p className='text-white mr-2 my-2'>Windows version</p>
              </div>
              <Link
                to='/'
                className='flex justify-center items-center bg-blue-500 px-2 py-2 mx-2 mb-3 rounded-full hover:text-white'
              >
                <IoIosArrowRoundDown />
                <span>Download</span>
              </Link>
            </div>
            <div className='my-3 hover:bg-stone-500 rounded-lg text-center border-2 border-black hover:text-black'>
              <div className='flex justify-start items-center'>
                <TfiLinux className='mx-2 my-2 text-3xl hover:text-black lg:text-4xl text-blue-500' />
                <p className='text-white mr-2 my-2'>Linux version</p>
              </div>
              <Link
                to='/'
                className='flex justify-center items-center bg-blue-500 px-2 py-2 mx-2 mb-3 rounded-full hover:text-white'
              >
                <IoIosArrowRoundDown />
                <span>Download</span>
              </Link>
            </div>
            <div className='my-3 hover:bg-stone-500 rounded-lg text-center border-2 border-black hover:text-black'>
              <div className='flex justify-start items-center'>
                <IoLogoApple className='mx-2 my-2 text-3xl hover:text-black lg:text-4xl text-blue-500' />
                <p className='text-white mr-2 my-2'>macOS version</p>
              </div>
              <Link
                to='/'
                className='flex justify-center items-center bg-blue-500 px-2 py-2 mx-2 mb-3 rounded-full hover:text-white'
              >
                <IoIosArrowRoundDown />
                <span>Download</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <h4 className='mt-6 mb-8 text-3xl text-stone-900'>Mobile App</h4>
          <div className='my-3 flex flex-col md:flex-row justify-around gap-4'>
            <div className=''>
              {' '}
              <Link to='/'>
                <img src={playstore} className='w-64 h-20' alt='' />{' '}
              </Link>
            </div>
            <div className=''>
              {' '}
              <Link to='/'>
                <img src={ios} className='w-64 h-20' alt='' />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
