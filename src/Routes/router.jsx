import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BecomeTutor from "../Pages/BecomeTutor";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        },{
            path:'/becomeTutor',
            element:<PrivateRoute><BecomeTutor></BecomeTutor></PrivateRoute>
        }]
        
        
    }
])

export default router;