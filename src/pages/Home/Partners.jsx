import kids from '../../assets/kids.png'
import lovender from '../../assets/lovender.png'
import shopno from '../../assets/shopno.png'
import unimart from '../../assets/unimart.png'
import well from '../../assets/well.png'
import daraz from '../../assets/daraz.png'
import rokomary from '../../assets/rokomary.png'
import panda from '../../assets/panda.png'

const Partners = () => {
  return (
    <div className='p-4'>
      <div className='m-2 md:m-4 lg:m-5 border-2 py-4 px-3 border-neutral-700'>
        <div className='my-4'>
          <h3 className='my-4 font-mono text-center text-2xl lg:text-4xl text-emerald-400'>
            Our Retail Partners
          </h3>
          <div className='flex flex-col gap-3 lg:flex-row justify-around items-center'>
            <div>
              <img src={unimart} alt='' />
            </div>
            <div>
              <img src={kids} alt='' />
            </div>
            <div>
              <img src={lovender} alt='' />
            </div>
            <div>
              <img src={shopno} alt='' />
            </div>
            <div>
              <img src={well} alt='' />
            </div>
          </div>
        </div>
        <div className='my-6 lg:my-16'>
          <h3 className='my-4 font-mono text-center text-2xl lg:text-4xl text-emerald-400'>
            Our Online Partners
          </h3>
          <div className='flex flex-col gap-3 lg:flex-row justify-around items-center'>
            <div>
              <img src={rokomary} alt='' />
            </div>
            <div>
              <img src={panda} alt='' />
            </div>
            <div>
              <img src={daraz} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;