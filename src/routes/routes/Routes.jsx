import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import ChefDetails from "../../pages/chefDetails/ChefDetails";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:':id',
                element:<ChefDetails></ChefDetails>
            }
        ]
    }
])
 
export default router ;