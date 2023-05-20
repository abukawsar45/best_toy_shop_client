import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="mx-auto">
      <div>
        <Link to='/'>
          <Button className="px-4 py-2 mt-5 mb-3 ms-5">Back To Home</Button>
        </Link>
      </div>
      <img src='https://i.ibb.co/8cRT7GH/4042023-05-20-120452.png' className="mx-auto w-3/4 md:w-2/4 h-11/12" alt='' />
    </div>
  );
};

export default ErrorElement;