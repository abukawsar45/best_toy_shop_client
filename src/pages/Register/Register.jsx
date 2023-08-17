import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Providers/AuthProviders';
import useTitles from '../../shared/useTitles';

const Register = () => {
  useTitles('| Register');

  const navigate = useNavigate();
  const from = '/';

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { signUpWithEmail, loginWithGoogle, updateUserProfile, user, setUser } =
    useContext(AuthContext);

  //console.log(user);

  // //console.log(signUpWithEmail);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    //  //console.log(name, email, password, photo);

    signUpWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError('');
        setSuccess('Login Successfull');
        form.reset();
        setUser({ ...user, displayName: name, photoURL: photo });
        updateUserProfile(name, photo);
        //console.log(updateUserProfile)
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
        setSuccess('Login Successful');
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
            src='https://i.ibb.co/M2S3HGX/understanding-the-copyright-registration-process-1-jpg-pagespeed-ce-8-Yjih-Bi-Jvw.jpg'
            alt='login image'
            className='w-9/12 h-3/4  mx-auto rounded-lg'
          />
        </div>
        <div className='w-9/12 mx-auto rounded-lg '>
          <form onSubmit={handleRegister} className='flex flex-col gap-4'>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='name' value='Your Name' />
              </div>
              <TextInput
                id=''
                type='text'
                placeholder='name'
                name='name'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' value='Your email' />
              </div>
              <TextInput
                id=''
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
                id=''
                type='password'
                name='password'
                required={true}
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='photo' value='Your Photo URL' />
              </div>
              <TextInput
                id=''
                type='url'
                placeholder='photo url'
                name='url'
                required={true}
              />
            </div>

            <div>
              <p className='text-teal-400'>{success ? success : ''}</p>
              <p className='text-red-600'>{error ? error : ''}</p>
            </div>

            <Button type='submit'>Submit</Button>
            <div className='label'>
              <p>
                <span>
                  Already have an account?Please&#160;
                  <Link to='/login' className=' link link-hover text-blue-500'>
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className='my-4 md:my-8 w-6/12 h-2/4 mx-auto'>
          <img
            onClick={handleGoogleLogin}
            className='cursor-pointer w-6/12 mx-auto'
            src='https://i.ibb.co/gSTHXZJ/google-btn.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
