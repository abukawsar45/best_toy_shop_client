import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import useTitles from "../../shared/useTitles";

const ResetPass = () => {

  useTitles('Reset Password |')
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');


  const {resetPassword} = useContext(AuthContext)
  
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleResetPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    resetPassword(email)
      .then(() => {
        setError('');
       Swal.fire('Please Check Your Email');
        form.reset();
         setShowModal(!showModal);
      })
      .catch((err) => {
        setError('');
        setError(err.message);
      });
  };
  return (
    <div>
      <React.Fragment>
        <Button onClick={handleModalToggle} className='md:mx-auto my-2 md:my-8'>
          Give me your Email
        </Button>
        <p className='md:text-center my-2 md:my-4'>
          <span>
            Back to Home?&#160;
            <Link to='/' className=' link link-hover text-blue-500'>
              Home
            </Link>
          </span>
        </p>
        <Modal dismissible={true} show={showModal} onClose={handleModalClose}>
          <Modal.Header>RESET YOUR ACCOUNT PASSWORD</Modal.Header>
          <Modal.Body>
            <form
              onSubmit={handleResetPassword}
              className='flex flex-col gap-4'
            >
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
                <p>
                  <small className='text-red-600'>{error && error}</small>
                </p>
                <p>
                  <span>
                    Back to Home?&#160;
                    <Link to='/' className=' link link-hover text-blue-500'>
                      Home
                    </Link>
                  </span>
                </p>
              </div>
              <Button type='submit'>Confirm</Button>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default ResetPass;