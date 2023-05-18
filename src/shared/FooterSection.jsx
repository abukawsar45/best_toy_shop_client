import { Footer } from "flowbite-react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div className=" ">
      <Footer container={true}>
        <div className='w-full'>
          <div className='w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
            <div className="flex  flex-col md:flex-row my-4 md:my-0 justify-start md:items-center">
              <Footer.Brand
                  
            src='https://i.ibb.co/HXRYSmH/logo22.jpg'
            className='w-2/4 md:w-3/4 h-auto'
                alt='Flowbite Logo'
              />
              <h3 className="text-2xl font-extrabold md:text-3xl font-bold">Best Toys Shop</h3>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='about' />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href='#'>
                    <span className='font-bold'>Head Office:</span>Dhaka,Bonani
                  </Footer.Link>
                  <Footer.Link href='#'>
                    <span className='font-bold'>Branch:</span> Uttara,1
                    <br />
                    <br />
                    Dhaka,Bangladesh
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href='#'>Github</Footer.Link>
                  <Footer.Link href='#'>Discord</Footer.Link>
                  <Footer.Link href='#'>FaceBook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Legal' />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href='#'>Privacy Policy</Footer.Link>
                  <Footer.Link href='#'>Terms & </Footer.Link>
                  <Footer.Link href='#'>Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by='Best Toys House' year={2023} />
            <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
              <FaFacebook className='cursor-pointer h-6 q-6 text-teal-400' />{' '}
              <FaTwitter className='cursor-pointer h-6 q-6 text-cyan-500' />{' '}
              <FaGithub className='cursor-pointer h-6 q-6 text-slate-950' />{' '}
              <FaInstagram className='cursor-pointer h-6 q-6 text-red-500' />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterSection;