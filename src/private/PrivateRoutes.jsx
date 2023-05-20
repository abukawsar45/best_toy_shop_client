import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";



const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading)
  {
    return (
      <div className='text-center'>
        <Spinner color='success' aria-label='Success spinner example' />
      </div>
    );
  }
  
  if (user)
  {
    return children
  }
 

  return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoutes;