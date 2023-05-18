import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import ErrorElement from './ErrorElement';
import Home from './../pages/Home/Home';
import AllToys from './../pages/Home/AllToys';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import Blog from './../pages/Blog/Blog';
import MyToys from "../pages/PrivatePage/MyToys";
import AddToys from "../pages/PrivatePage/AddToys";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />
        
      },
      {
        path: '/allToys',
        element:<AllToys/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/myToys',
        element: <MyToys/>
      },
      {
        path: '/addToys',
        element: <AddToys/>
      }
    ]
    
  }
])
export default router;