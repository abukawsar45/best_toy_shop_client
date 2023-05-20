import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitles from "../../shared/useTitles";

const Login = () => {
  useTitles('| Login');

   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

   const { loginWithGoogle, loginWithEmailAndPassword } =
     useContext(AuthContext);

   const handleLogin = (event) => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email, password);

        loginWithEmailAndPassword(email, password)
          .then((result) => {
            const loggedUser = result.user;

            setError('');
            setSuccess('login successfull');
            form.reset();
            navigate(from);
          })
          .catch((error) => {
            setSuccess('');
            setError(error.message);
          });
      };
     const handleGoogleLogin = () => {
       loginWithGoogle()
         .then((result) => {
           const loggedUser = result.user;

           setError('');
           setSuccess('Login successful');
           navigate(from);
         })
         .catch((err) => {
           setSuccess('');
           setError(err.message);
         });
     };



  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 my-2 md:my-6'>
        <div className=' order-1 md:order-none '>
          <img
            src='https://i.ibb.co/z22QnzP/istockphoto-1367444401-612x612.jpg'
            alt='login image'
            className='w-9/12 mx-auto rounded-lg'
          />
        </div>
        <div className='w-9/12 mx-auto rounded-lg '>
          <form onSubmit={handleLogin} className='flex flex-col gap-4'>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' value='Your email' />
              </div>
              <TextInput
                id='email1'
                type='email'
                name='email'
                placeholder='amar@email.com'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password1' value='Your password' />
              </div>
              <TextInput
                id='password1'
                type='password'
                name='password'
                required={true}
              />
            </div>
            <span>
              <Link
                to='/reset_password'
                className=' link link-hover text-blue-500'
              >
                Forgetten password
              </Link>
            </span>
            <div>
                  <p className='text-lime-400'>{success ? success : ''}</p>
                  <p className='text-red-600'>{error ? error : ''}</p>
                </div>

            <Button type='submit'>Login</Button>
            <div className='label'>
              <p>
                <span>
                  Create One?Please&#160;
                  <Link
                    to='/register'
                    className=' link link-hover text-blue-500'
                  >
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row justify-center gap-2 w-6/12 my-6 mx-auto'>
          <div>
            <img
              onClick={handleGoogleLogin}
              className='cursor-pointer w-2/4 mx-auto'
              src='https://i.ibb.co/gSTHXZJ/google-btn.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;