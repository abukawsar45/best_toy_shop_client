import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { AuthContext } from "../Providers/AuthProviders";


const Navber = () => {

  const { user, logout } = useContext(AuthContext);
    const Username = user?.displayName;
  const image = user?.photoURL;
  console.log(image)

  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(err => {
        // console.error(err.message);
    })
  }

   const animationProps = useSpring({
     from: { transform: 'scale(0)' },
     to: { transform: 'scale(1)' },
     config: { tension: 200, friction: 10 },
   });
  


  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Link to='/'>
            <img
              src='https://i.ibb.co/HXRYSmH/logo22.jpg'
              className='mr-1 h-8 sm:h-12'
              alt='best toy shop Logo'
            />
          </Link>
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            <animated.svg
              className='h-auto w-32 md:w-48 '
              viewBox='0 0 300 100'
            >
              <Link to='/'>
                <animated.text
                  x='50%'
                  y='50%'
                  textAnchor='middle'
                  dominantBaseline='middle'
                  style={animationProps}
                  className='text-4xl'
                  fontWeight='bold'
                >
                  BEST TOY SHOP
                </animated.text>
              </Link>
            </animated.svg>
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          {user && (
            <Tooltip content={Username}>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar alt='User settings' img={image} rounded={true} />
                }
              ></Dropdown>
            </Tooltip>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className='flex flex-col md:flex-row gap-4 md:items-center'>
            <Link to='/'>Home</Link>
            <Link to='/allToys'>All Toys</Link>
            <Link to='/blog'>Blogs</Link>
            {/*  */}
            {user && (
              <>
                <Link to='/myToys'>My Toys</Link>
                <Link to='/addToys'>Add Toys</Link>
                <Button
                  className='w-20'
                  onClick={handleLogout}
                  outline={true}
                  gradientDuoTone='greenToBlue'
                >
                  Logout
                </Button>
              </>
            )}

            {!user && (
              <>
                <Button>
                  <Link to='/login'>Log In</Link>
                </Button>
                <Button color='purple'>
                  <Link to='/register'>Register</Link>
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navber;