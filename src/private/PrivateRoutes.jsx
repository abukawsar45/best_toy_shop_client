import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";


const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log('100000', { loading });

  if (loading){
    <p>loadinggg...</p>
  }
  if (user)
  {
    return children
  }

  return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoutes;