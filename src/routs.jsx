//import layouts
import MainLayout from "./layouts/MainLayout"
//import Auth Pages

//import Default Pages
import Home from "./pages/(dashboard)/Home"
import Collection from "./pages/(dashboard)/Collection"
import Cart from "./pages/(dashboard)/Cart"
import CheckOut from "./pages/(dashboard)/CheckOut"
import Favourit from "./pages/(dashboard)/Favourit"
import ProductDetails from "./pages/(dashboard)/ProductDetails"
import UserSettings from "./pages/(dashboard)/UserSettings"
//not found page
import NotFound from "./pages/NotFound"
import { createBrowserRouter } from "react-router-dom"
export default function routs() {
    return createBrowserRouter([

      //routs for users and admins (buyer and sellers)
       {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element:<Home/>
      }
      ,{
        path: "collection",
        element:<Collection/>
      },
      {
        path: "cart",
        element:<Cart/>
      },
      {
        path: "check-out",
        element:<CheckOut/>
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "settings",
        element:<UserSettings/>
      },
      {
        path: "favourites",
        element:<Favourit/>
      }
    ]
  },
      
   
      
            //not found rout
      {
        path: "*",
        element:<NotFound/>
      }
])

}