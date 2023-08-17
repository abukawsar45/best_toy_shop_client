import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import MyToys from "../pages/PrivatePage/MyToys";
import AddToys from "../pages/PrivatePage/AddToys";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Register from './../pages/Register/Register';
import ResetPass from "../pages/ResetPass/ResetPass";
import PrivateRoutes from "../private/PrivateRoutes";
import MoreDetails from "../pages/PrivatePage/MoreDetails";
import EditToysData from "../pages/PrivatePage/EditToysData";
import AllToys from "../pages/AllToys/AllToys";







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
        path: '/myAllToys/:id',
        element: <PrivateRoutes><EditToysData /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://y-umber-three.vercel.app/alltoys/${params.id}`),
      },

      {
        path: '/moreDetails/:id',
        element: (
          <PrivateRoutes>
            <MoreDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://y-umber-three.vercel.app/alltoys/${params.id}`),
      },
      {
        path: '/reset_password',
        element: <ResetPass />,
      },
    ],
  },
]);
export default router;