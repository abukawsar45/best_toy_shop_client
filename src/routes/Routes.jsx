import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from './../pages/Home/Home';
import AllToys from './../pages/Home/AllToys';
import Login from './../pages/Login/Login';
import Blog from './../pages/Blog/Blog';
import MyToys from "../pages/PrivatePage/MyToys";
import AddToys from "../pages/PrivatePage/AddToys";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Register from './../pages/Register/Register';
import ResetPass from "../pages/ResetPass/ResetPass";
import PrivateRoutes from "../private/PrivateRoutes";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allToys',
        element: <AllToys />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/myToys',
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: '/addToys',
        element: (
          <PrivateRoutes>
            <AddToys />
          </PrivateRoutes>
        ),
      },
      {
        path: '/reset_password',
        element: <ResetPass />,
      },
    ],
  },
]);
export default router;