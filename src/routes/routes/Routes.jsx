import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import ChefDetails from "../../pages/chefDetails/ChefDetails";
import ErrorPage from './../../pages/errorPage/ErrorPage';
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:':id',
                element:<ChefDetails></ChefDetails>,
                loader:({params})=>fetch(`https://bengali-food-server-safayatalif.vercel.app/chefs/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
 
export default router ;