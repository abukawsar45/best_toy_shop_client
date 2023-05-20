import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { useContext } from "react";
import { useSpring, animated } from 'react-spring';
import { AuthContext } from "../Providers/AuthProviders";
import ActiveLink from "../pages/ActiveLink/ActiveLink";
import { Link } from "react-router-dom";


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
          <ActiveLink to='/'>
            <img
              src='https://i.ibb.co/HXRYSmH/logo22.jpg'
              className='mr-1 h-8 sm:h-12'
              alt='best toy shop Logo'
            />
          </ActiveLink>
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
                  className='text-2xl'
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
            <ActiveLink className=''  to='/'>Home</ActiveLink>
            <ActiveLink  className='' to='/allToys'>All Toys</ActiveLink>
            <ActiveLink  className='' to='/blog'>Blogs</ActiveLink>
            {/*  */}
            {user && (
              <>
                <ActiveLink  className='' to='/myToys'>My Toys</ActiveLink>
                <ActiveLink  className='' to='/addToys'>Add Toys</ActiveLink>
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
                  <ActiveLink to='/login'>Log In</ActiveLink>
                </Button>
                <Button color='purple'>
                  <ActiveLink to='/register'>Register</ActiveLink>
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