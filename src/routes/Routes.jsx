import { createBrowserRouter } from "react-router-dom";
import Main from "../shared/Main";
import ErrorElement from "./ErrorElement";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement/>
    
  }
])
export default router;