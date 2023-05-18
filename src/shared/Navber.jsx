import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';


const Navber = () => {

   const animationProps = useSpring({
     from: { transform: 'scale(0)' },
     to: { transform: 'scale(1)' },
     config: { tension: 200, friction: 10 },
   });


  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='https://flowbite.com/'>
          <img
            src='https://i.ibb.co/HXRYSmH/logo22.jpg'
            className='mr-1 h-8 sm:h-12'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          
            <animated.svg className='h-auto w-32 md:w-48 ' viewBox='0 0 300 100'>
              <animated.text
                x='50%'
                y='50%'
                textAnchor='middle'
                dominantBaseline='middle'
                style={ animationProps }
                className="text-4xl"
               
                fontWeight='bold'
              >
                BEST TOY SHOP
              </animated.text>
            </animated.svg>
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt='User settings'
                img=''
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          
          <Link to='/'>Home</Link>
          <Link to='/allToys'>All Toys</Link>
          <Link to='/blog'>Blogs</Link>
          {/*  */}
          <Link to='/myToys'>My Toys</Link>
          <Link to='/addToys'>Add Toys</Link>
          <Link to='/Pic'>Pic</Link>
          {/*  */}
          <Link to='/login'>Log In</Link>
          <Link to='/register'>Register</Link>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navber;