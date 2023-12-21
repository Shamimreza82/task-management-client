import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../dashboard/Dashboard";
import DashHome from "../dashboard/DashHome";
import NewTask from "../dashboard/NewTask";
import PreviousTask from "../dashboard/PreviousTask";




const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>
    }, 
    {
        path: '/login', 
        element: <Login></Login>
    },
    {
        path: '/register', 
        element: <Register></Register>
    },
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>, 
        children: [
            {
                index: true, 
                element: <DashHome></DashHome> 
            },
            {
                path: '/dashboard/home', 
                element: <DashHome></DashHome>
            }, 
            {
                path: '/dashboard/newTask', 
                element: <NewTask></NewTask>
            }, 
            {
                path: '/dashboard/previousTask', 
                element: <PreviousTask></PreviousTask>
            }
        ]
    }
])

export default router; 