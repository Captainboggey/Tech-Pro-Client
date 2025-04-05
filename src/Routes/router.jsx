import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BecomeTutor from "../Pages/BecomeTutor";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FindTeacher from "../Pages/FindTeacher/FindTeacher";
import Book from "../Pages/Book/Book";
import MyTutorial from "../Pages/MyTutorial/MyTutorial";
import UpdateTutorial from "../Pages/MyTutorial/UpdateTutorial";



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
        },{
            path:'/findTutor',
            element:<FindTeacher></FindTeacher>,
            loader:()=> fetch(`http://localhost:4000/becomeTeacher`)
        },{
            path:'/book/:id',
            element:<PrivateRoute><Book></Book>,</PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:4000/becomeTeacher/${params.id}`)
        },{
            path:'/findTutor/:id',
            element:<FindTeacher></FindTeacher>,
            loader:({params})=> fetch(`http://localhost:4000/becomeTeacher?language=${params.id}`)
        },{
            path:'/myTutorials',
            element:<PrivateRoute><MyTutorial></MyTutorial></PrivateRoute>
        },{
            path:'/updateTutorial/:id',
            element:<PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:4000/becomeTeacher/${params.id}`)
        }]
        
        
    }
])

export default router;